#!/usr/bin/env node
/*
 * Independent check of the generated countries/ tree.
 *
 * build.js validates the source records on the way in; this re-reads what
 * actually landed on disk and checks it end to end, so a bug in the writer
 * can't hide behind a clean build.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'countries');
const iso = require(path.join(ROOT, '_source', 'iso3166.json'));

const fail = [];
const warn = [];
const digits = (s) => (s || '').replace(/\D/g, '');

const dirs = fs.readdirSync(OUT).filter((d) => fs.statSync(path.join(OUT, d)).isDirectory()).sort();
const expected = iso.map(([a2]) => a2).sort();

// 1. Every ISO entry has a folder, and nothing extra is present.
for (const code of expected) if (!dirs.includes(code)) fail.push(`missing folder: ${code}`);
for (const d of dirs) if (!expected.includes(d)) fail.push(`unexpected folder: ${d}`);

let totalExamples = 0;
let noNumbering = 0;
const codeUsage = new Map();

for (const code of dirs) {
  const dir = path.join(OUT, code);
  const jsonPath = path.join(dir, 'data.json');
  const mdPath = path.join(dir, 'README.md');

  if (!fs.existsSync(jsonPath)) { fail.push(`${code}: no data.json`); continue; }
  if (!fs.existsSync(mdPath)) { fail.push(`${code}: no README.md`); continue; }
  if (fs.statSync(mdPath).size < 200) fail.push(`${code}: README.md suspiciously small`);

  let d;
  try { d = JSON.parse(fs.readFileSync(jsonPath, 'utf8')); }
  catch (e) { fail.push(`${code}: data.json does not parse — ${e.message}`); continue; }

  // 2. Identity fields agree with the ISO list.
  const row = iso.find(([a2]) => a2 === code);
  if (d.iso2 !== code) fail.push(`${code}: iso2 mismatch (${d.iso2})`);
  if (d.iso3 !== row[1]) fail.push(`${code}: iso3 mismatch (${d.iso3} vs ${row[1]})`);
  if (d.country !== row[2]) fail.push(`${code}: country name mismatch`);

  // 3. Core plan fields present and well-formed.
  if (!/^\+\d{1,4}$/.test(d.callingCode || '')) fail.push(`${code}: bad callingCode`);
  if (!d.formats || !d.formats.national || !d.formats.international) fail.push(`${code}: incomplete formats`);
  if (!Array.isArray(d.sources) || d.sources.length === 0) fail.push(`${code}: no sources`);
  if (typeof d.trunkPrefix !== 'string') fail.push(`${code}: trunkPrefix must be a string ('' = none)`);

  const codes = [d.callingCode, ...(d.additionalCallingCodes || [])].filter(Boolean).map(digits);
  codes.forEach((c) => codeUsage.set(c, (codeUsage.get(c) || 0) + 1));

  if (d.noPublicNumbering) {
    noNumbering++;
    if (!Array.isArray(d.notes) || d.notes.length === 0) fail.push(`${code}: noPublicNumbering without explanation`);
    continue;
  }

  // 4. Examples: E.164 well-formed, prefixed by a declared calling code,
  //    and the three renderings describe the same digits.
  if (!Array.isArray(d.examples) || d.examples.length === 0) { fail.push(`${code}: no examples`); continue; }
  for (const ex of d.examples) {
    totalExamples++;
    if (!/^\+\d{4,15}$/.test(ex.e164 || '')) { fail.push(`${code}: malformed E.164 ${ex.e164}`); continue; }
    const dd = digits(ex.e164);
    const cc = codes.find((c) => dd.startsWith(c));
    if (!cc) { fail.push(`${code}: ${ex.e164} not under ${codes.map((c) => '+' + c).join('/')}`); continue; }
    if (ex.international && digits(ex.international) !== dd) fail.push(`${code}: ${ex.e164} != international "${ex.international}"`);
    if (ex.national && digits(ex.national).length === 0) fail.push(`${code}: ${ex.e164} national form has no digits`);
    const nsn = dd.length - cc.length;
    if (nsn < 3) fail.push(`${code}: ${ex.e164} NSN too short (${nsn})`);
    if (Array.isArray(d.nsnLengths) && d.nsnLengths.length && !d.nsnLengths.includes(nsn))
      warn.push(`${code}: ${ex.e164} NSN=${nsn}, declared ${d.nsnLengths.join('/')}`);
    if (!ex.type) warn.push(`${code}: ${ex.e164} has no type`);
    if (!ex.note) warn.push(`${code}: ${ex.e164} has no note`);
  }
}

const shared = [...codeUsage.entries()].filter(([, n]) => n > 1).sort((a, b) => b[1] - a[1]);

console.log(`folders:        ${dirs.length}/${expected.length}`);
console.log(`example numbers: ${totalExamples}`);
console.log(`no-numbering territories: ${noNumbering}`);
console.log(`shared calling codes: ${shared.map(([c, n]) => `+${c}×${n}`).join(', ')}`);
if (warn.length) {
  console.log(`\nwarnings (${warn.length}):`);
  warn.slice(0, 30).forEach((w) => console.log('  ! ' + w));
}
if (fail.length) {
  console.log(`\nFAILURES (${fail.length}):`);
  fail.forEach((f) => console.log('  x ' + f));
  process.exit(1);
}
console.log('\nAll checks passed.');
