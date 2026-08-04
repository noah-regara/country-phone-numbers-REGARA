# Finland — Phone Number Formats

**ISO 3166-1:** `FI` / `FIN`  
**Country calling code:** +358  
**Trunk prefix:** `0`  
**International call prefix:** `00`  
**National significant number:** variable

## Formatting

```
National:      0A XXX XXXX / 0AA XXX XXXX (open plan, variable)
International: +358 A XXX XXXX (trunk 0 dropped)
```

## Number ranges

| Range | National format | International format |
| --- | --- | --- |
| Helsinki | `09 XXXX XXXX` | `+358 9 XXXX XXXX` |
| Other geographic (Tampere 03, Turku 02, Oulu 08) | `0X XXX XXXX` | `+358 X XXX XXXX` |
| Mobile | `04X XXX XXXX / 050 XXX XXXX` | `+358 4X XXX XXXX` |
| Freephone | `0800 XXX XXX` | `+358 800 XXX XXX` |

## Examples

| Type | E.164 | International | National | Notes |
| --- | --- | --- | --- | --- |
| fixed-line | `+358912345678` | `+358 9 1234 5678` | `09 1234 5678` | Helsinki — area code 09 |
| fixed-line | `+35831234567` | `+358 3 123 4567` | `03 123 4567` | Tampere region — area code 03 |
| mobile | `+358401234567` | `+358 40 123 4567` | `040 123 4567` | Mobile — 040/050 and 04x ranges |
| toll-free | `+358800123456` | `+358 800 123 456` | `0800 123 456` | Maksuton palvelunumero (freephone) |

## Notes

- Finland has an open numbering plan; NSN length varies roughly from 5 to 12 digits, so length alone cannot validate a Finnish number.
- Åland (AX) shares +358 and uses the 018 area code.

## Sources

- https://en.wikipedia.org/wiki/Telephone_numbers_in_Finland
