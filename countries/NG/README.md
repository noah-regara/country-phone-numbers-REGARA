# Nigeria — Phone Number Formats

**ISO 3166-1:** `NG` / `NGA`  
**Country calling code:** +234  
**Trunk prefix:** `0`  
**International call prefix:** `009`  
**National significant number:** 10 digits

## Formatting

```
National:      0AAA XXX XXXX (landline) / 0AAA XXX XXXX (mobile)
International: +234 AAA XXX XXXX (trunk 0 dropped)
```

## Number ranges

| Range | National format | International format |
| --- | --- | --- |
| Lagos (0201) | `0201 XXX XXXX` | `+234 201 XXX XXXX` |
| Abuja (0209) | `0209 XXX XXXX` | `+234 209 XXX XXXX` |
| Mobile (070X, 080X, 081X, 090X, 091X) | `0803 XXX XXXX` | `+234 803 XXX XXXX` |
| Toll-free | `0800 XXX XXXX` | `+234 800 XXX XXXX` |

## Examples

| Type | E.164 | International | National | Notes |
| --- | --- | --- | --- | --- |
| fixed-line | `+2342012345678` | `+234 201 234 5678` | `0201 234 5678` | Lagos — '20' was prepended to every fixed-line area code in 2023, so the old 01 became 0201 |
| mobile | `+2348031234567` | `+234 803 123 4567` | `0803 123 4567` | Mobile — 0803 is an MTN Nigeria range, though portability makes this indicative only |
| toll-free | `+2348001234567` | `+234 800 123 4567` | `0800 123 4567` | Toll-free |

## Notes

- Nigeria renumbered fixed lines in 2023 by prefixing '20' to every geographic area code; the grace period for the old codes ended on 2024-01-01.
- The international access prefix is 009, not 00.
- Mobile numbers are 11 digits nationally including the trunk 0.

## Sources

- https://en.wikipedia.org/wiki/Telephone_numbers_in_Nigeria
- NCC — Nigerian Communications Commission: https://www.ncc.gov.ng/
