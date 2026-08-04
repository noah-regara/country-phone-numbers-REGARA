# Indonesia — Phone Number Formats

**ISO 3166-1:** `ID` / `IDN`  
**Country calling code:** +62  
**Trunk prefix:** `0`  
**International call prefix:** `00`  
**National significant number:** variable

## Formatting

```
National:      0AA-XXXX-XXXX (landline) / 08XX-XXXX-XXXX (mobile)
International: +62 AA XXXX XXXX (trunk 0 dropped)
```

## Number ranges

| Range | National format | International format |
| --- | --- | --- |
| Jakarta (21), Surabaya (31), Bandung (22) | `021-XXXX-XXXX` | `+62 21 XXXX XXXX` |
| Other regions (3-digit area codes) | `0XXX-XXXXXX` | `+62 XXX XXXXXX` |
| Mobile (8XX) | `08XX-XXXX-XXXX` | `+62 8XX XXXX XXXX` |
| Toll-free | `0800-1-XXXXXX` | `+62 800 1 XXXXXX` |

## Examples

| Type | E.164 | International | National | Notes |
| --- | --- | --- | --- | --- |
| fixed-line | `+622112345678` | `+62 21 1234 5678` | `021-1234-5678` | Jakarta — area code 21 |
| fixed-line | `+62311234567` | `+62 31 123 4567` | `031-123-4567` | Surabaya — area code 31 |
| mobile | `+6281234567890` | `+62 812 3456 7890` | `0812-3456-7890` | Mobile — 8XX ranges; 812 is a Telkomsel range |

## Notes

- Landlines carry area codes (2 digits for the largest cities, 3 elsewhere); mobile numbers do not.
- Mobile subscriber numbers vary in length by operator, giving NSNs of roughly 9–12 digits, so length-based validation is unreliable.

## Sources

- https://en.wikipedia.org/wiki/Telephone_numbers_in_Indonesia
- Kominfo — Ministry of Communication and Informatics: https://www.komdigi.go.id/
