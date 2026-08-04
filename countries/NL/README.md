# Netherlands, Kingdom of the — Phone Number Formats

**ISO 3166-1:** `NL` / `NLD`  
**Country calling code:** +31  
**Trunk prefix:** `0`  
**International call prefix:** `00`  
**National significant number:** 9 digits

## Formatting

```
National:      0AA XXX XX XX / 0AAA XX XX XX
International: +31 AA XXX XX XX (trunk 0 dropped)
```

## Number ranges

| Range | National format | International format |
| --- | --- | --- |
| Geographic, 2-digit area code (Amsterdam 20, Rotterdam 10, The Hague 70) | `020 XXX XX XX` | `+31 20 XXX XX XX` |
| Geographic, 3-digit area code (smaller towns) | `0XXX XX XX XX` | `+31 XXX XX XX XX` |
| Mobile | `06 XX XX XX XX` | `+31 6 XX XX XX XX` |
| Freephone | `0800 XXXX` | `+31 800 XXXX` |

## Examples

| Type | E.164 | International | National | Notes |
| --- | --- | --- | --- | --- |
| fixed-line | `+31201234567` | `+31 20 123 45 67` | `020 123 45 67` | Amsterdam — 2-digit area code 20, 7-digit subscriber number |
| fixed-line | `+31101234567` | `+31 10 123 45 67` | `010 123 45 67` | Rotterdam — area code 10 |
| fixed-line | `+31519123456` | `+31 519 12 34 56` | `0519 12 34 56` | Dokkum — 3-digit area code 519, 6-digit subscriber number |
| mobile | `+31612345678` | `+31 6 12 34 56 78` | `06 12 34 56 78` | Mobile — all Dutch mobiles are 06 + 8 digits |

## Notes

- The NSN is always 9 digits. Large cities have 2-digit area codes with 7-digit subscriber numbers; everywhere else has 3-digit area codes with 6-digit subscriber numbers.
- Mobile numbers are effectively a single '6' area code followed by 8 digits.

## Sources

- https://en.wikipedia.org/wiki/Telephone_numbers_in_the_Netherlands
- ACM — nummerplan: https://www.acm.nl/nl/onderwerpen/telecommunicatie/telefoonnummers
