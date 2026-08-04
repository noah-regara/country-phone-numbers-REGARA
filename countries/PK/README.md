# Pakistan — Phone Number Formats

**ISO 3166-1:** `PK` / `PAK`  
**Country calling code:** +92  
**Trunk prefix:** `0`  
**International call prefix:** `00`  
**National significant number:** 10 digits

## Formatting

```
National:      (0AA) XXXXXXXX (landline) / 03XX-XXXXXXX (mobile)
International: +92 AA XXXXXXXX (trunk 0 dropped)
```

## Number ranges

| Range | National format | International format |
| --- | --- | --- |
| Karachi (21), Lahore (42), Islamabad (51) | `(021) XXXXXXXX` | `+92 21 XXXXXXXX` |
| Smaller cities (3–5 digit area codes) | `(0XXX) XXXXXXX` | `+92 XXX XXXXXXX` |
| Mobile (03XX) | `03XX-XXXXXXX` | `+92 3XX XXXXXXX` |
| Toll-free | `0800-XXXXX` | `+92 800 XXXXX` |

## Examples

| Type | E.164 | International | National | Notes |
| --- | --- | --- | --- | --- |
| fixed-line | `+922112345678` | `+92 21 1234 5678` | `(021) 12345678` | Karachi — area code 21 |
| fixed-line | `+924212345678` | `+92 42 1234 5678` | `(042) 12345678` | Lahore — area code 42 |
| mobile | `+923001234567` | `+92 300 1234567` | `0300-1234567` | Mobile — 0300 is a Jazz range; 0310 Zong, 0330 Ufone, 0340 Telenor |

## Notes

- Landline area codes are 2–5 digits; the largest cities have the shortest codes.
- All mobile numbers begin 03 and are 10 digits in NSN form.
- Toll-free 0800 numbers have shorter NSNs (8 digits) than the 10-digit norm.

## Sources

- https://en.wikipedia.org/wiki/Telephone_numbers_in_Pakistan
- PTA — Pakistan Telecommunication Authority: https://www.pta.gov.pk/
