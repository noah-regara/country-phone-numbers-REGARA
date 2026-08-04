# China — Phone Number Formats

**ISO 3166-1:** `CN` / `CHN`  
**Country calling code:** +86  
**Trunk prefix:** `0`  
**International call prefix:** `00`  
**National significant number:** variable

## Formatting

```
National:      0AA-XXXXXXXX (landline) / 1XX-XXXX-XXXX (mobile)
International: +86 AA XXXXXXXX (trunk 0 dropped)
```

## Number ranges

| Range | National format | International format |
| --- | --- | --- |
| Beijing (10), Shanghai (21) — 2-digit area codes | `010-XXXXXXXX` | `+86 10 XXXXXXXX` |
| Other cities — 3-digit area codes | `0XXX-XXXXXXX` | `+86 XXX XXXXXXX` |
| Mobile (11 digits, always begins with 1) | `1XX XXXX XXXX` | `+86 1XX XXXX XXXX` |
| Service numbers | `400-XXX-XXXX / 800-XXX-XXXX` | `+86 400 XXX XXXX` |

## Examples

| Type | E.164 | International | National | Notes |
| --- | --- | --- | --- | --- |
| fixed-line | `+861012345678` | `+86 10 1234 5678` | `010-12345678` | Beijing — 2-digit area code 10 |
| fixed-line | `+862112345678` | `+86 21 1234 5678` | `021-12345678` | Shanghai — 2-digit area code 21 |
| mobile | `+8613812345678` | `+86 138 1234 5678` | `138 1234 5678` | Mobile — always 11 digits beginning with 1; 138 is a China Mobile range |
| toll-free | `+864001234567` | `+86 400 123 4567` | `400-123-4567` | Shared-cost service number; 800 is the true freephone range |

## Notes

- Landlines carry area codes (2 digits for the largest cities, 3 elsewhere) but mobile numbers do not — a mobile number is always a flat 11 digits starting with 1.
- Because landline NSN length varies with area-code length, length alone cannot validate a Chinese number.
- 400 numbers are shared-cost (the caller pays a local rate); 800 numbers are true freephone but are often unreachable from mobiles.

## Sources

- https://en.wikipedia.org/wiki/Telephone_numbers_in_China
- MIIT — Ministry of Industry and Information Technology: https://www.miit.gov.cn/
