# Hungary — Phone Number Formats

**ISO 3166-1:** `HU` / `HUN`  
**Country calling code:** +36  
**Trunk prefix:** `06`  
**International call prefix:** `00`  
**National significant number:** 8 or 9 digits

## Formatting

```
National:      06 A XXX XXXX (Budapest) / 06 AA XXX XXX (elsewhere)
International: +36 A XXX XXXX (trunk 06 dropped)
```

## Number ranges

| Range | National format | International format |
| --- | --- | --- |
| Budapest (area code 1) | `06 1 XXX XXXX` | `+36 1 XXX XXXX` |
| Other geographic (2-digit area codes) | `06 XX XXX XXX` | `+36 XX XXX XXX` |
| Mobile (20, 30, 31, 50, 70) | `06 20 XXX XXXX` | `+36 20 XXX XXXX` |
| Freephone | `06 80 XXX XXX` | `+36 80 XXX XXX` |

## Examples

| Type | E.164 | International | National | Notes |
| --- | --- | --- | --- | --- |
| fixed-line | `+3612345678` | `+36 1 234 5678` | `06 1 234 5678` | Budapest — area code 1, 7-digit subscriber number |
| fixed-line | `+3652123456` | `+36 52 123 456` | `06 52 123 456` | Debrecen — 2-digit area code 52, 6-digit subscriber number |
| mobile | `+36201234567` | `+36 20 123 4567` | `06 20 123 4567` | Mobile — 20 is a Yettel range; 30 and 70 are also mobile |
| toll-free | `+3680123456` | `+36 80 123 456` | `06 80 123 456` | Freephone |

## Notes

- Hungary's trunk prefix is the two-digit 06, not a single 0 — an unusual arrangement in Europe.
- Budapest numbers have a 1-digit area code and 7-digit subscriber number (NSN 8); everywhere else has a 2-digit area code and 6-digit subscriber number (NSN 8). Mobile NSNs are 9 digits.

## Sources

- https://en.wikipedia.org/wiki/Telephone_numbers_in_Hungary
- NMHH — számozási terv: https://nmhh.hu/
