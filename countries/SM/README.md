# San Marino — Phone Number Formats

**ISO 3166-1:** `SM` / `SMR`  
**Country calling code:** +378, +39  
**Trunk prefix:** none  
**International call prefix:** `00`  
**National significant number:** variable

## Formatting

```
National:      0549 XXXXXX (all digits always dialled)
International: +378 0549 XXXXXX — also reachable as +39 0549 XXXXXX
```

## Number ranges

| Range | National format | International format |
| --- | --- | --- |
| Fixed line (0549 …) | `0549 XXXXXX` | `+378 0549 XXXXXX` |
| Mobile (6…) | `6X XXX XXX` | `+378 6X XXX XXX` |

## Examples

| Type | E.164 | International | National | Notes |
| --- | --- | --- | --- | --- |
| fixed-line | `+3780549123456` | `+378 0549 123456` | `0549 123456` | Fixed line — 0549 is the Italian area code San Marino incorporates |
| fixed-line | `+390549123456` | `+39 0549 123456` | `0549 123456` | The same subscriber reached through the Italian country code +39 |
| mobile | `+378612345678` | `+378 61 234 5678` | `61 234 5678` | Mobile — 6 range |

## Notes

- San Marino is dual-routed: it holds country code +378 but is also reachable through Italy as +39 0549 xxxxxx, because it is embedded in the Italian numbering plan.
- All digits are always dialled; there is no trunk prefix. The leading 0 of 0549 is part of the number itself — as in Italy, it is retained when dialling from abroad.
- Leading digits 0/8/9 denote landlines, 6 mobile, 5 IP telephony and 7 premium services.

## Sources

- https://en.wikipedia.org/wiki/Telephone_numbers_in_San_Marino
- https://en.wikipedia.org/wiki/Telephone_numbers_in_Italy
