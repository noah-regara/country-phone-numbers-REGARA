# Sudan — Phone Number Formats

**ISO 3166-1:** `SD` / `SDN`  
**Country calling code:** +249  
**Trunk prefix:** `0`  
**International call prefix:** `00`  
**National significant number:** 9 digits

## Formatting

```
National:      0TP AXX XXXX (T = service type, P = provider)
International: +249 TP AXX XXXX (trunk 0 dropped)
```

## Number ranges

| Range | National format | International format |
| --- | --- | --- |
| Fixed — Sudani (10, 11, 12), Canar (15), Sudatel (18) | `013 XXX XXXX` | `+249 13 XXX XXXX` |
| Mobile — Zain (90, 91, 96), MTN (92, 93, 99), NOW (95) | `092 XXX XXXX` | `+249 92 XXX XXXX` |

## Examples

| Type | E.164 | International | National | Notes |
| --- | --- | --- | --- | --- |
| fixed-line | `+249131234567` | `+249 13 123 4567` | `013 123 4567` | Khartoum — Sudani fixed line; 1 denotes fixed service, 3 the Khartoum area |
| mobile | `+249921234567` | `+249 92 123 4567` | `092 123 4567` | Mobile — 92/93/99 are MTN Sudan ranges |
| mobile | `+249911234567` | `+249 91 123 4567` | `091 123 4567` | Mobile — 90/91/96 are Zain Sudan ranges |

## Notes

- Sudanese numbers encode service type in the first digit after the trunk 0 (1 = fixed, 9 = mobile) and the provider in the second.
- South Sudan used +249 until 2011-10-01, when it moved to its own code +211.

## Sources

- https://en.wikipedia.org/wiki/Telephone_numbers_in_Sudan
- TPRA — Telecommunication and Post Regulatory Authority of Sudan: https://tpra.gov.sd/
