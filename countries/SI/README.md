# Slovenia — Phone Number Formats

**ISO 3166-1:** `SI` / `SVN`  
**Country calling code:** +386  
**Trunk prefix:** `0`  
**International call prefix:** `00`  
**National significant number:** 8 digits

## Formatting

```
National:      0A XXX XX XX
International: +386 A XXX XX XX (trunk 0 dropped)
```

## Number ranges

| Range | National format | International format |
| --- | --- | --- |
| Ljubljana (area code 1) | `01 XXX XX XX` | `+386 1 XXX XX XX` |
| Other geographic (2–7) | `0X XXX XX XX` | `+386 X XXX XX XX` |
| Mobile (30, 31, 40, 41, 51, 64, 68, 69, 70, 71) | `030 XXX XXX` | `+386 30 XXX XXX` |
| Freephone | `080 XXX XXX` | `+386 80 XXX XXX` |

## Examples

| Type | E.164 | International | National | Notes |
| --- | --- | --- | --- | --- |
| fixed-line | `+38612345678` | `+386 1 234 56 78` | `01 234 56 78` | Ljubljana — area code 1 |
| fixed-line | `+38621234567` | `+386 2 123 45 67` | `02 123 45 67` | Maribor — area code 2 |
| mobile | `+38630123456` | `+386 30 123 456` | `030 123 456` | Mobile — 030 is an A1 Slovenija range |
| toll-free | `+38680123456` | `+386 80 123 456` | `080 123 456` | Freephone |

## Notes

- All Slovenian numbers are 9 digits in national form: trunk 0 plus an 8-digit NSN.
- Mobile prefixes are dialled in full even from within the same network.

## Sources

- https://en.wikipedia.org/wiki/Telephone_numbers_in_Slovenia
- AKOS — številski načrt: https://www.akos-rs.si/
