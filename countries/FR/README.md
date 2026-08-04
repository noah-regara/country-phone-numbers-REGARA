# France — Phone Number Formats

**ISO 3166-1:** `FR` / `FRA`  
**Country calling code:** +33  
**Trunk prefix:** `0`  
**International call prefix:** `00`  
**National significant number:** 9 digits

## Formatting

```
National:      0X XX XX XX XX (five digit-pairs)
International: +33 X XX XX XX XX (trunk 0 dropped)
```

## Number ranges

| Range | National format | International format |
| --- | --- | --- |
| Île-de-France / Paris | `01 XX XX XX XX` | `+33 1 XX XX XX XX` |
| North-west | `02 XX XX XX XX` | `+33 2 XX XX XX XX` |
| North-east | `03 XX XX XX XX` | `+33 3 XX XX XX XX` |
| South-east | `04 XX XX XX XX` | `+33 4 XX XX XX XX` |
| South-west | `05 XX XX XX XX` | `+33 5 XX XX XX XX` |
| Mobile | `06 XX XX XX XX / 07 XX XX XX XX` | `+33 6 XX XX XX XX` |
| Freephone / shared cost | `08 XX XX XX XX` | `+33 8 XX XX XX XX` |
| Non-geographic / VoIP | `09 XX XX XX XX` | `+33 9 XX XX XX XX` |

## Examples

| Type | E.164 | International | National | Notes |
| --- | --- | --- | --- | --- |
| fixed-line | `+33142685300` | `+33 1 42 68 53 00` | `01 42 68 53 00` | Paris — 01 covers Île-de-France |
| fixed-line | `+33491123456` | `+33 4 91 12 34 56` | `04 91 12 34 56` | Marseille — 04 covers the south-east |
| mobile | `+33612345678` | `+33 6 12 34 56 78` | `06 12 34 56 78` | Mobile — 06 and 07 are both mobile |
| toll-free | `+33800123456` | `+33 8 00 12 34 56` | `0 800 12 34 56` | Numéro vert (freephone) |

## Notes

- The NSN is always exactly 9 digits, written nationally as the trunk 0 plus five pairs.
- The leading digit after the trunk 0 encodes geography (1–5), mobile (6–7), special services (8) or non-geographic/VoIP (9).
- Freephone 08 numbers are conventionally written as '0 800 12 34 56' rather than in strict pairs.

## Sources

- https://en.wikipedia.org/wiki/Telephone_numbers_in_France
- ARCEP — plan de numérotation: https://www.arcep.fr/demarches-et-services/utilisateurs/numeros-speciaux.html
