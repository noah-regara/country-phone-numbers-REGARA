# Congo, Democratic Republic of the — Phone Number Formats

**ISO 3166-1:** `CD` / `COD`  
**Country calling code:** +243  
**Trunk prefix:** `0`  
**International call prefix:** `00`  
**National significant number:** variable

## Formatting

```
National:      0A XXX XX XX (landline) / 0AA XXX XX XX (mobile)
International: +243 A XXX XX XX (trunk 0 dropped)
```

## Number ranges

| Range | National format | International format |
| --- | --- | --- |
| Kinshasa (1) | `01 XXX XX XX` | `+243 1 XXX XX XX` |
| Katanga (2), Bas-Congo/Bandundu (3), Kasaï (4), Orientale (5), Kivu (6) | `0X XXX XX XX` | `+243 X XXX XX XX` |
| Mobile (81, 82, 84, 85, 89, 90, 97, 99) | `082 XXX XX XX` | `+243 82 XXX XX XX` |

## Examples

| Type | E.164 | International | National | Notes |
| --- | --- | --- | --- | --- |
| fixed-line | `+24312345678` | `+243 1 234 56 78` | `01 234 56 78` | Kinshasa — area code 1 |
| mobile | `+243821234567` | `+243 82 123 45 67` | `082 123 45 67` | Mobile — 82 is a Vodacom Congo range |
| mobile | `+243991234567` | `+243 99 123 45 67` | `099 123 45 67` | Mobile — 99 range |

## Notes

- Landline area codes are single digits mapping to former provinces; mobile prefixes are two digits.
- Fixed-line infrastructure is limited and mobile numbers dominate in practice.
- NSN length varies between fixed (8) and mobile (9), so length alone is a weak validator.

## Sources

- https://en.wikipedia.org/wiki/Telephone_numbers_in_the_Democratic_Republic_of_the_Congo
- ARPTC — Autorité de Régulation de la Poste et des Télécommunications du Congo: https://www.arptc.gouv.cd/
