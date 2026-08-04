# Slovakia — Phone Number Formats

**ISO 3166-1:** `SK` / `SVK`  
**Country calling code:** +421  
**Trunk prefix:** `0`  
**International call prefix:** `00`  
**National significant number:** 9 digits

## Formatting

```
National:      0A/XXXX XXXX (Bratislava) / 0AA/XXX XXXX (elsewhere)
International: +421 A XXXX XXXX (trunk 0 dropped)
```

## Number ranges

| Range | National format | International format |
| --- | --- | --- |
| Bratislava (area code 2) | `02/XXXX XXXX` | `+421 2 XXXX XXXX` |
| Other geographic (2-digit area codes) | `0XX/XXX XXXX` | `+421 XX XXX XXXX` |
| Mobile (090x, 091x, 094x, 095x) | `0905 XXX XXX` | `+421 905 XXX XXX` |
| Freephone | `0800 XXX XXX` | `+421 800 XXX XXX` |

## Examples

| Type | E.164 | International | National | Notes |
| --- | --- | --- | --- | --- |
| fixed-line | `+421212345678` | `+421 2 1234 5678` | `02/1234 5678` | Bratislava — single-digit area code 2 with an 8-digit subscriber number |
| fixed-line | `+421551234567` | `+421 55 123 4567` | `055/123 4567` | Košice — 2-digit area code 55 |
| mobile | `+421905123456` | `+421 905 123 456` | `0905 123 456` | Mobile — 0905 is a Slovak Telekom range |
| toll-free | `+421800123456` | `+421 800 123 456` | `0800 123 456` | Freephone |

## Notes

- Slovakia uses a closed 9-digit NSN. Bratislava has a 1-digit area code plus 8-digit subscriber number; everywhere else has a 2-digit area code plus 7 digits.
- The slash notation (02/1234 5678) separating area code from subscriber number is a common Slovak and Czech writing convention.

## Sources

- https://en.wikipedia.org/wiki/Telephone_numbers_in_Slovakia
- RÚ — číslovací plán: https://www.teleoff.gov.sk/
