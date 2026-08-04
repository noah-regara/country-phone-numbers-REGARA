# India — Phone Number Formats

**ISO 3166-1:** `IN` / `IND`  
**Country calling code:** +91  
**Trunk prefix:** `0`  
**International call prefix:** `00`  
**National significant number:** 10 digits

## Formatting

```
National:      0AA-XXXX-XXXX (STD code + subscriber number, 10 digits total)
International: +91 AA XXXX XXXX (trunk 0 dropped)
```

## Number ranges

| Range | National format | International format |
| --- | --- | --- |
| Metro STD codes — Delhi (11), Mumbai (22), Kolkata (33), Chennai (44) | `011-XXXX-XXXX` | `+91 11 XXXX XXXX` |
| Second-tier cities — Jaipur (141), Lucknow (522) | `0141-XXX-XXXX` | `+91 141 XXX XXXX` |
| Mobile (starts 6, 7, 8 or 9) | `9XXXX XXXXX` | `+91 9XXXX XXXXX` |
| Toll-free | `1800-XXX-XXXX` | `+91 1800 XXX XXXX` |

## Examples

| Type | E.164 | International | National | Notes |
| --- | --- | --- | --- | --- |
| fixed-line | `+911123456789` | `+91 11 2345 6789` | `011-2345-6789` | Delhi — STD code 11 |
| fixed-line | `+912223456789` | `+91 22 2345 6789` | `022-2345-6789` | Mumbai — STD code 22 |
| mobile | `+919812345678` | `+91 98123 45678` | `98123 45678` | Mobile — 10 digits beginning 6, 7, 8 or 9; operator-independent since number portability |
| fixed-line | `+911412345678` | `+91 141 234 5678` | `0141-234-5678` | Jaipur — 3-digit STD code 141 |

## Notes

- India runs a closed 10-digit plan: the STD (area) code plus subscriber number always totals 10 digits, so a 2-digit metro code leaves 8 subscriber digits while an 8-digit rural code leaves 2.
- Mobile numbers are 10 digits beginning with 6, 7, 8 or 9 and carry no area code.
- Governed by the National Numbering Plan 2003 under the Department of Telecommunications.

## Sources

- https://en.wikipedia.org/wiki/Telephone_numbers_in_India
- DoT — National Numbering Plan: https://dot.gov.in/
