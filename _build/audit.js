#!/usr/bin/env node
/*
 * Cross-checks the FORMAT STRINGS against the country each record belongs to.
 *
 * verify.js validates example numbers. This checks the prose/template fields
 * that verify.js never looks at — formats.national, formats.international and
 * the patterns[] table — for the failure mode that matters most here: a
 * template carrying a calling code or trunk convention that belongs to a
 * different country (copy-paste drift between neighbouring records).
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'countries');
const iso = require(path.join(ROOT, '_source', 'iso3166.json'));

const bad = [];
const soft = [];
const digits = (s) => (s || '').replace(/\D/g, '');
// Placeholder alphabet used across the pattern templates.
const PLACEHOLDER = /[0-9XNAYZJPQMCDUBT]/g;

for (const [a2] of iso) {
  const d = JSON.parse(fs.readFileSync(path.join(OUT, a2, 'data.json'), 'utf8'));
  const codes = [d.callingCode, ...(d.additionalCallingCodes || [])].filter(Boolean).map(digits);
  const label = `${a2} (${d.country})`;

  // Collect every template string that should be country-specific.
  const strings = [
    ['formats.national', d.formats.national],
    ['formats.international', d.formats.international],
    ...(d.patterns || []).flatMap((p, i) => [
      [`patterns[${i}].national`, p.national],
      [`patterns[${i}].international`, p.international],
    ]),
  ].filter(([, s]) => typeof s === 'string' && s.length);

  // A. Any +NNN appearing in a template must belong to THIS country.
  for (const [field, s] of strings) {
    for (const m of s.matchAll(/\+(\d+)/g)) {
      const found = m[1];
      if (!codes.some((c) => found.startsWith(c))) {
        bad.push(`${label} ${field}: contains "+${found}" but declared codes are ${codes.map((c) => '+' + c).join('/')}`);
      }
    }
  }

  // B. formats.international must actually state the country's calling code.
  if (!/\+\d/.test(d.formats.international) && !d.noPublicNumbering) {
    soft.push(`${label} formats.international: no "+code" shown ("${d.formats.international}")`);
  }

  // C. Every patterns[].international must lead with a declared code, unless it
  //    is explicitly documented as unreachable from abroad.
  for (const [i, p] of (d.patterns || []).entries()) {
    if (!p.international) continue;
    if (/not reachable|reachable from abroad|separate code/i.test(p.international)) continue;
    const m = p.international.match(/^\+(\d+)/);
    if (!m) {
      soft.push(`${label} patterns[${i}].international: does not start with a +code ("${p.international}")`);
    } else if (!codes.some((c) => m[1].startsWith(c))) {
      bad.push(`${label} patterns[${i}].international: leads with "+${m[1]}", not ${codes.map((c) => '+' + c).join('/')}`);
    }
  }

  if (d.noPublicNumbering) continue;

  // D. Trunk-prefix coherence: if a trunk prefix is declared, at least one
  //    example's national form should show it. If none is declared, a national
  //    form starting 0 must be explained in the notes (Italy/Gabon keep it).
  const notes = (d.notes || []).join(' ').toLowerCase();
  // Only judge examples that sit under this record's PRIMARY calling code.
  // Records spanning more than one code (Antarctica's +672 bases vs Scott Base
  // on +64, Vatican on +39) carry examples that follow another plan's trunk
  // conventions, and must not be measured against this record's trunkPrefix.
  const primary = codes[0];
  const nationals = (d.examples || [])
    .filter((e) => digits(e.e164).startsWith(primary))
    .map((e) => e.national || '')
    .filter(Boolean);
  const tp = d.trunkPrefix || '';
  // NANP exemption: the "1" is a long-distance access digit, never part of the
  // written national form — "(212) 736-1234", not "1 (212) 736-1234".
  const isNanp = codes.length && codes[0] === '1' && tp === '1';
  if (isNanp) {
    // nothing to check: the trunk digit is correctly absent from national forms
  } else if (tp && /^\d+$/.test(tp)) {
    const anyShows = nationals.some((n) => n.replace(/[^\d]/g, '').startsWith(tp) || n.trim().startsWith(tp));
    if (!anyShows && nationals.length) {
      soft.push(`${label}: trunkPrefix "${tp}" declared but no example national form shows it`);
    }
  } else if (!tp) {
    const zeroLead = nationals.filter((n) => /^\(?0/.test(n.trim()));
    if (zeroLead.length && !/leading 0|leading zero|part of the number|retained|kept/.test(notes)) {
      bad.push(`${label}: trunkPrefix is "" but national form "${zeroLead[0]}" starts with 0 and notes do not explain it`);
    }
  }

  // E. Template width vs declared NSN length, on the international pattern
  //    (which carries no trunk prefix, so its digits are the NSN).
  if (Array.isArray(d.nsnLengths) && d.nsnLengths.length) {
    // Special-service ranges (toll-free, premium, shared-cost, single-number)
    // are routinely a different length from geographic and mobile numbers, so
    // nsnLengths — which describes ordinary numbers — does not bind them.
    const SPECIAL = /toll-?free|freephone|free dial|premium|shared|service|numéro vert|numero verde|zelen|grøn|gratis|single number/i;
    for (const [i, p] of (d.patterns || []).entries()) {
      if (!p.international) continue;
      if (SPECIAL.test(p.label || '')) continue;
      const m = p.international.match(/^\+(\d+)\s*(.*)$/);
      if (!m) continue;
      const cc = codes.find((c) => m[1].startsWith(c));
      if (!cc) continue;
      // Digits of the code may be glued to the rest; recover the remainder.
      const leftover = m[1].slice(cc.length);
      const body = leftover + ' ' + m[2];
      const n = (body.match(PLACEHOLDER) || []).length;
      if (n && !d.nsnLengths.includes(n)) {
        soft.push(`${label} patterns[${i}] "${p.international}": template is ${n} digits, declared NSN ${d.nsnLengths.join('/')}`);
      }
    }
  }
}

console.log(`checked ${iso.length} country records`);
if (soft.length) {
  console.log(`\nSOFT (${soft.length}) — review, may be legitimate:`);
  soft.forEach((s) => console.log('  ? ' + s));
}
if (bad.length) {
  console.log(`\nHARD (${bad.length}) — wrong country / unexplained:`);
  bad.forEach((b) => console.log('  x ' + b));
  process.exit(1);
}
console.log('\nNo cross-country format errors found.');
