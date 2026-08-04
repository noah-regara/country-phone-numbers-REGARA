#!/usr/bin/env node
/*
 * Builds countries/<ISO2>/{data.json,README.md} from the researched records
 * in _source/data/*.json, then writes the top-level index.
 *
 * This script is a serializer + validator only. It does NOT invent or derive
 * any phone-number data: every field originates from the researched records,
 * each of which carries its own `sources` list.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SRC = path.join(ROOT, '_source');
const DATA = path.join(SRC, 'data');
const OUT = path.join(ROOT, 'countries');

const iso = require(path.join(SRC, 'iso3166.json'));
const NAME = new Map(iso.map(([a2, a3, n]) => [a2, { a2, a3, name: n }]));

const errors = [];
const warnings = [];

function loadRecords() {
  if (!fs.existsSync(DATA)) return [];
  const files = fs.readdirSync(DATA).filter((f) => f.endsWith('.json')).sort();
  const out = [];
  for (const f of files) {
    let parsed;
    try {
      parsed = JSON.parse(fs.readFileSync(path.join(DATA, f), 'utf8'));
    } catch (e) {
      errors.push(`${f}: invalid JSON — ${e.message}`);
      continue;
    }
    if (!Array.isArray(parsed)) {
      errors.push(`${f}: expected a top-level array`);
      continue;
    }
    parsed.forEach((r) => out.push({ ...r, _file: f }));
  }
  return out;
}

const digits = (s) => (s || '').replace(/\D/g, '');

function validate(r) {
  const id = `${r._file}:${r.iso2 || '??'}`;
  if (!r.iso2 || !NAME.has(r.iso2)) {
    errors.push(`${id}: unknown or missing ISO 3166-1 alpha-2 code`);
    return false;
  }
  if (!/^\+\d{1,4}$/.test(r.callingCode || '')) {
    errors.push(`${id}: bad callingCode ${JSON.stringify(r.callingCode)}`);
  }
  if (!Array.isArray(r.sources) || r.sources.length === 0) {
    errors.push(`${id}: no sources`);
  }
  // Uninhabited territories and dependencies with no assigned numbering carry
  // `noPublicNumbering: true` and are exempt from the examples requirement —
  // fabricating example numbers for them would be worse than having none.
  if (r.noPublicNumbering) {
    if (!Array.isArray(r.notes) || r.notes.length === 0) {
      errors.push(`${id}: noPublicNumbering records must explain the situation in notes`);
    }
    return true;
  }

  if (!Array.isArray(r.examples) || r.examples.length === 0) {
    errors.push(`${id}: no examples`);
    return errors.length === 0;
  }

  // Every calling code this territory legitimately answers on.
  const codes = [r.callingCode, ...(r.additionalCallingCodes || [])]
    .filter(Boolean)
    .map(digits);

  for (const ex of r.examples) {
    if (!/^\+\d{4,15}$/.test(ex.e164 || '')) {
      errors.push(`${id}: malformed E.164 ${JSON.stringify(ex.e164)}`);
      continue;
    }
    const d = digits(ex.e164);
    const code = codes.find((c) => d.startsWith(c));
    if (!code) {
      errors.push(`${id}: ${ex.e164} does not start with ${codes.map((c) => '+' + c).join(' or ')}`);
      continue;
    }
    // NSN length check. `nsnLengths: []` means deliberately variable/unknown.
    const nsn = d.slice(code.length).length;
    if (Array.isArray(r.nsnLengths) && r.nsnLengths.length && !r.nsnLengths.includes(nsn)) {
      warnings.push(`${id}: ${ex.e164} NSN=${nsn}, declared ${r.nsnLengths.join('/')}`);
    }
    // The three renderings must describe the same number.
    if (ex.international && digits(ex.international) !== d) {
      errors.push(`${id}: international "${ex.international}" != e164 ${ex.e164}`);
    }
    if (!ex.national) warnings.push(`${id}: ${ex.e164} has no national rendering`);
    if (!ex.type) warnings.push(`${id}: ${ex.e164} has no type`);
  }
  return true;
}

function readme(r, meta) {
  const L = [];
  L.push(`# ${meta.name} — Phone Number Formats`);
  L.push('');
  L.push(`**ISO 3166-1:** \`${meta.a2}\` / \`${meta.a3}\`  `);
  const allCodes = [r.callingCode, ...(r.additionalCallingCodes || [])].join(', ');
  L.push(`**Country calling code:** ${allCodes}  `);
  // NANP territories all share +1, so the area code is what actually identifies
  // them. Bare numeric codes are set in backticks; descriptive entries (the US
  // and Canadian ranges) are printed as written.
  if (Array.isArray(r.areaCodes) && r.areaCodes.length) {
    const codes = r.areaCodes.map((c) => (/^\d+$/.test(c) ? `\`${c}\`` : c)).join(', ');
    // Plural unless it is a single bare code: the US and Canadian entries are one
    // array element but describe a whole range, so "Area code: 201-989" misreads.
    const plural = r.areaCodes.length > 1 || !/^\d+$/.test(r.areaCodes[0]);
    L.push(`**Area code${plural ? 's' : ''}:** ${codes}  `);
  }
  L.push(`**Trunk prefix:** ${r.trunkPrefix ? `\`${r.trunkPrefix}\`` : 'none'}  `);
  L.push(`**International call prefix:** ${r.internationalPrefix ? `\`${r.internationalPrefix}\`` : '—'}  `);
  L.push(
    `**National significant number:** ${
      r.nsnLengths && r.nsnLengths.length ? r.nsnLengths.join(' or ') + ' digits' : 'variable'
    }`
  );
  L.push('');

  L.push('## Formatting');
  L.push('');
  L.push('```');
  L.push(`National:      ${r.formats.national}`);
  L.push(`International: ${r.formats.international}`);
  L.push('```');
  L.push('');

  if (r.patterns && r.patterns.length) {
    L.push('## Number ranges');
    L.push('');
    L.push('| Range | National format | International format |');
    L.push('| --- | --- | --- |');
    for (const p of r.patterns) {
      L.push(`| ${p.label} | \`${p.national}\` | \`${p.international}\` |`);
    }
    L.push('');
  }

  L.push('## Examples');
  L.push('');
  if (!r.examples || r.examples.length === 0) {
    L.push('_No public numbering is assigned to this territory — see the notes below._');
    L.push('');
  } else {
    L.push('| Type | E.164 | International | National | Notes |');
    L.push('| --- | --- | --- | --- | --- |');
    for (const ex of r.examples) {
      L.push(
        `| ${ex.type || ''} | \`${ex.e164}\` | \`${ex.international || ''}\` | \`${ex.national || ''}\` | ${ex.note || ''} |`
      );
    }
    L.push('');
  }

  if (r.notes && r.notes.length) {
    L.push('## Notes');
    L.push('');
    for (const n of r.notes) L.push(`- ${n}`);
    L.push('');
  }

  L.push('## Sources');
  L.push('');
  for (const s of r.sources) L.push(`- ${s}`);
  L.push('');
  return L.join('\n');
}

function main() {
  const records = loadRecords();
  const seen = new Map();
  for (const r of records) {
    if (seen.has(r.iso2)) {
      errors.push(`${r.iso2}: defined twice (${seen.get(r.iso2)._file} and ${r._file})`);
      continue;
    }
    seen.set(r.iso2, r);
  }

  fs.mkdirSync(OUT, { recursive: true });
  let written = 0;
  for (const [code, r] of seen) {
    if (!validate(r)) continue;
    const meta = NAME.get(code);
    const dir = path.join(OUT, code);
    fs.mkdirSync(dir, { recursive: true });
    const { _file, ...clean } = r;
    const doc = {
      country: meta.name,
      iso2: meta.a2,
      iso3: meta.a3,
      ...clean,
    };
    fs.writeFileSync(path.join(dir, 'data.json'), JSON.stringify(doc, null, 2) + '\n');
    fs.writeFileSync(path.join(dir, 'README.md'), readme(r, meta));
    written++;
  }

  // Top-level index.
  const done = [...seen.keys()].sort();
  const missing = iso.map(([a2]) => a2).filter((a2) => !seen.has(a2));
  const idx = [];
  idx.push('# Phone Numbers by Country');
  idx.push('');
  idx.push(
    'One folder per ISO 3166-1 alpha-2 entry. Each holds a machine-readable `data.json` ' +
      'and a human-readable `README.md` covering the country calling code, trunk prefix, ' +
      'national significant number length, digit grouping, and worked example numbers.'
  );
  idx.push('');
  idx.push(`**Coverage:** ${done.length} / ${iso.length} entries.`);
  idx.push('');
  idx.push('| Code | Country | Calling code | NSN | Examples |');
  idx.push('| --- | --- | --- | --- | --- |');
  for (const c of done) {
    const r = seen.get(c);
    const m = NAME.get(c);
    const nsn = r.nsnLengths && r.nsnLengths.length ? r.nsnLengths.join('/') : 'var';
    const exCount = r.noPublicNumbering ? '—' : (r.examples || []).length;
    idx.push(
      `| [\`${c}\`](countries/${c}/) | ${m.name} | ${r.callingCode} | ${nsn} | ${exCount} |`
    );
  }
  idx.push('');
  if (missing.length) {
    idx.push(`## Not yet researched (${missing.length})`);
    idx.push('');
    idx.push(missing.join(', '));
    idx.push('');
  }
  fs.writeFileSync(path.join(ROOT, 'README.md'), idx.join('\n'));

  console.log(`written:  ${written} country folders`);
  console.log(`coverage: ${done.length}/${iso.length}`);
  if (missing.length) console.log(`missing:  ${missing.length} -> ${missing.slice(0, 20).join(',')}${missing.length > 20 ? ',…' : ''}`);
  if (warnings.length) {
    console.log(`\nwarnings (${warnings.length}):`);
    warnings.slice(0, 40).forEach((w) => console.log('  ! ' + w));
  }
  if (errors.length) {
    console.log(`\nERRORS (${errors.length}):`);
    errors.forEach((e) => console.log('  x ' + e));
    process.exit(1);
  }
}

main();
