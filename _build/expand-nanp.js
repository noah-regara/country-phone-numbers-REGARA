#!/usr/bin/env node
/*
 * Expands the researched NANP table below into _source/data/nanp.json.
 *
 * All 25 NANP members share one numbering plan (+1, 10-digit NSN, NPA-NXX-XXXX),
 * so only the per-territory values differ: the area code(s), the example central
 * office codes, and the locality each serves. Those are the researched values in
 * TERRITORIES; everything else is the shared plan, written once here.
 *
 * Run: node _build/expand-nanp.js
 */
const fs = require('fs');
const path = require('path');

// [iso2, [area codes], [[exchange, locality, type], ...], extra notes]
const TERRITORIES = [
  ['US', ['201–989 (hundreds of area codes)'], [
    ['212', '736', 'New York City, NY — area code 212 covers Manhattan', 'fixed-line'],
    ['415', '626', 'San Francisco, CA — area code 415', 'fixed-line'],
    ['800', '555', 'Toll-free — 800/888/877/866/855/844/833 are shared NANP-wide', 'toll-free'],
  ], [
    'The United States uses hundreds of area codes; 212 (Manhattan) and 415 (San Francisco) are shown as representative examples.',
    'NANP numbers give no indication of whether a line is mobile or fixed — US mobile numbers are drawn from the same geographic area codes as landlines.',
    '555-0100 through 555-0199 are reserved NANP-wide for fictional use in film and television.',
  ]],
  ['CA', ['204, 226, 416, 604, 905 and many others'], [
    ['416', '363', 'Toronto, ON — area code 416', 'fixed-line'],
    ['604', '682', 'Vancouver, BC — area code 604', 'fixed-line'],
    ['800', '555', 'Toll-free — shared with the rest of the NANP', 'toll-free'],
  ], [
    'Canada shares the +1 country code and the entire NANP format with the United States; the two are not separable by number format alone.',
    'Mobile and fixed lines share the same geographic area codes.',
  ]],
  ['PR', ['787', '939'], [
    ['787', '721', 'San Juan — 787 is the original Puerto Rico area code', 'fixed-line'],
    ['939', '555', 'Puerto Rico — 939 is the overlay area code added in 2001', 'fixed-line'],
  ], ['Puerto Rico uses two overlaid area codes, 787 and 939; ten-digit dialling is mandatory.']],
  ['VI', ['340'], [['340', '774', 'Charlotte Amalie, St. Thomas', 'fixed-line']],
    ['The US Virgin Islands use the single area code 340, assigned in 1997 (previously 809).']],
  ['GU', ['671'], [['671', '472', 'Hagåtña', 'fixed-line']],
    ['Guam joined the NANP in 1997, moving from country code +671 to +1 671.']],
  ['AS', ['684'], [['684', '633', 'Pago Pago', 'fixed-line']],
    ['American Samoa joined the NANP in 2004, moving from country code +684 to +1 684.']],
  ['MP', ['670'], [['670', '234', 'Saipan', 'fixed-line']],
    ['The Northern Mariana Islands joined the NANP in 1997.']],
  ['BS', ['242'], [['242', '302', 'Nassau, New Providence', 'fixed-line']],
    ['The Bahamas use the single area code 242, assigned in 1996 (previously 809).']],
  ['BB', ['246'], [['246', '227', 'Bridgetown', 'fixed-line']],
    ['Barbados uses the single area code 246, assigned in 1996 (previously 809).']],
  ['AI', ['264'], [['264', '497', 'The Valley', 'fixed-line']],
    ['Anguilla uses the single area code 264, assigned in 1997 (previously 809).']],
  ['AG', ['268'], [['268', '462', "St. John's", 'fixed-line']],
    ['Antigua and Barbuda use the single area code 268, assigned in 1997 (previously 809).']],
  ['VG', ['284'], [['284', '494', 'Road Town, Tortola', 'fixed-line']],
    ['The British Virgin Islands use the single area code 284, assigned in 1997 (previously 809).']],
  ['KY', ['345'], [['345', '949', 'George Town, Grand Cayman', 'fixed-line']],
    ['The Cayman Islands use the single area code 345, assigned in 1997 (previously 809).']],
  ['BM', ['441'], [['441', '292', 'Hamilton', 'fixed-line']],
    ['Bermuda uses the single area code 441, assigned in 1995 (previously 809).']],
  ['GD', ['473'], [['473', '440', "St. George's", 'fixed-line']],
    ['Grenada uses the single area code 473, assigned in 1997 (previously 809).']],
  ['TC', ['649'], [['649', '946', 'Grand Turk / Providenciales', 'fixed-line']],
    ['The Turks and Caicos Islands use the single area code 649, assigned in 1997 (previously 809).']],
  ['MS', ['664'], [['664', '491', 'Brades', 'fixed-line']],
    ['Montserrat uses the single area code 664, assigned in 1996 (previously 809).']],
  ['SX', ['721'], [['721', '542', 'Philipsburg', 'fixed-line']],
    ['Sint Maarten uses the single area code 721, assigned in 2011 when it left the Netherlands Antilles (+599).']],
  ['LC', ['758'], [['758', '452', 'Castries', 'fixed-line']],
    ['Saint Lucia uses the single area code 758, assigned in 1996 (previously 809).']],
  ['DM', ['767'], [['767', '448', 'Roseau', 'fixed-line']],
    ['Dominica uses the single area code 767, assigned in 1997 (previously 809).']],
  ['VC', ['784'], [['784', '456', 'Kingstown', 'fixed-line']],
    ['Saint Vincent and the Grenadines use the single area code 784, assigned in 1997 (previously 809).']],
  ['DO', ['809', '829', '849'], [
    ['809', '221', 'Santo Domingo — 809 is the original area code', 'fixed-line'],
    ['829', '555', 'Dominican Republic — 829 overlay, added 2005', 'fixed-line'],
  ], ['The Dominican Republic uses three overlaid area codes: 809 (original), 829 (2005) and 849 (2009).']],
  ['TT', ['868'], [['868', '622', 'Port of Spain', 'fixed-line']],
    ['Trinidad and Tobago use the single area code 868 ("TNT" on a keypad), assigned in 1997 (previously 809).']],
  ['KN', ['869'], [['869', '465', 'Basseterre', 'fixed-line']],
    ['Saint Kitts and Nevis use the single area code 869, assigned in 1996 (previously 809).']],
  ['JM', ['876', '658'], [
    ['876', '926', 'Kingston — 876 is the original area code', 'fixed-line'],
    ['658', '555', 'Jamaica — 658 overlay, added 2018', 'fixed-line'],
  ], ['Jamaica uses area code 876 with the 658 overlay added in 2018; ten-digit dialling is mandatory.']],
];

const SHARED_SOURCES = [
  'https://en.wikipedia.org/wiki/North_American_Numbering_Plan',
  'NANPA — North American Numbering Plan Administrator: https://nationalnanpa.com/',
  'https://en.wikipedia.org/wiki/List_of_North_American_Numbering_Plan_area_codes',
];

const records = TERRITORIES.map(([iso2, codes, examples, notes]) => ({
  iso2,
  callingCode: '+1',
  trunkPrefix: '1',
  internationalPrefix: '011',
  nsnLengths: [10],
  areaCodes: codes,
  formats: {
    national: '(NPA) NXX-XXXX',
    international: '+1 NPA NXX XXXX',
  },
  patterns: [
    { label: 'Geographic (fixed or mobile)', national: '(NPA) NXX-XXXX', international: '+1 NPA NXX XXXX' },
    { label: 'Toll-free (shared NANP-wide)', national: '(800) NXX-XXXX', international: '+1 800 NXX XXXX' },
  ],
  examples: examples.map(([npa, nxx, note, type]) => ({
    type,
    e164: `+1${npa}${nxx}1234`,
    international: `+1 ${npa} ${nxx} 1234`,
    national: `(${npa}) ${nxx}-1234`,
    note,
  })),
  notes: [
    'Part of the North American Numbering Plan: country code +1, a 10-digit NSN written NPA-NXX-XXXX.',
    'NPA is the 3-digit area code, NXX the 3-digit central office code; both begin with a digit 2–9. The final four digits are the line number.',
    'The domestic long-distance prefix is 1 and the international call prefix is 011.',
    ...notes,
  ],
  sources: SHARED_SOURCES,
}));

const out = path.resolve(__dirname, '..', '_source', 'data', 'nanp.json');
fs.writeFileSync(out, JSON.stringify(records, null, 2) + '\n');
console.log(`wrote ${records.length} NANP records -> ${path.relative(process.cwd(), out)}`);
