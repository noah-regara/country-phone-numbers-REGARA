# Croatia — Phone Number Formats

**ISO 3166-1:** `HR` / `HRV`  
**Country calling code:** +385  
**Trunk prefix:** `0`  
**International call prefix:** `00`  
**National significant number:** 8 or 9 digits

## Formatting

```
National:      0A XXXX XXX (Zagreb) / 0AA XXX XXX (elsewhere)
International: +385 A XXXX XXX (trunk 0 dropped)
```

## Number ranges

| Range | National format | International format |
| --- | --- | --- |
| Zagreb (area code 1) | `01 XXXX XXX` | `+385 1 XXXX XXX` |
| Other geographic (2-digit area codes) | `0XX XXX XXX` | `+385 XX XXX XXX` |
| Mobile (91, 92, 95, 97, 98, 99) | `091 XXX XXXX` | `+385 91 XXX XXXX` |
| Freephone | `0800 XXX XXX` | `+385 800 XXX XXX` |

## Examples

| Type | E.164 | International | National | Notes |
| --- | --- | --- | --- | --- |
| fixed-line | `+38512345678` | `+385 1 2345 678` | `01 2345 678` | Zagreb — single-digit area code 1 |
| fixed-line | `+38521123456` | `+385 21 123 456` | `021 123 456` | Split — area code 21 |
| mobile | `+385912345678` | `+385 91 234 5678` | `091 234 5678` | Mobile — 91 is an A1 Hrvatska range |
| toll-free | `+385800123456` | `+385 800 123 456` | `0800 123 456` | Freephone |

## Notes

- Croatia took +385 after the breakup of Yugoslavia (which shared +38) in 1991.
- Zagreb has a single-digit area code; all other regions have two digits. Mobile NSNs are 9 digits.

## Sources

- https://en.wikipedia.org/wiki/Telephone_numbers_in_Croatia
- HAKOM — numbering: https://www.hakom.hr/
