# Madagascar — Phone Number Formats

**ISO 3166-1:** `MG` / `MDG`  
**Country calling code:** +261  
**Trunk prefix:** `0`  
**International call prefix:** `00`  
**National significant number:** 9 digits

## Formatting

```
National:      0AB ZZ XXX XX (AB = operator, Z = area)
International: +261 AB ZZ XXX XX (trunk 0 dropped)
```

## Number ranges

| Range | National format | International format |
| --- | --- | --- |
| Fixed line — Telma (20) | `020 XX XXX XX` | `+261 20 XX XXX XX` |
| Mobile — Orange (32), Airtel (33), Telma (34) | `032 XX XXX XX` | `+261 32 XX XXX XX` |

## Examples

| Type | E.164 | International | National | Notes |
| --- | --- | --- | --- | --- |
| fixed-line | `+261202212345` | `+261 20 22 123 45` | `020 22 123 45` | Antananarivo — 20 is Telma fixed service, 22 the Antananarivo zone |
| mobile | `+261321234567` | `+261 32 12 345 67` | `032 12 345 67` | Mobile — 32 is an Orange Madagascar range |
| mobile | `+261331234567` | `+261 33 12 345 67` | `033 12 345 67` | Mobile — 33 is an Airtel Madagascar range |

## Notes

- The NSN is 9 digits structured as a 2-digit operator code, a 1-digit area digit (fixed lines only) and the subscriber number.
- Mobile operator codes: 32 Orange, 33 Airtel, 34 Telma.

## Sources

- https://en.wikipedia.org/wiki/Telephone_numbers_in_Madagascar
- ARTEC — Autorité de Régulation des Technologies de Communication: https://www.artec.mg/
