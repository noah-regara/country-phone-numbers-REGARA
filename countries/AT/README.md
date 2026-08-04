# Austria — Phone Number Formats

**ISO 3166-1:** `AT` / `AUT`  
**Country calling code:** +43  
**Trunk prefix:** `0`  
**International call prefix:** `00`  
**National significant number:** variable

## Formatting

```
National:      0A XXXXXXX / 0AAAA XXXX (open plan, highly variable)
International: +43 A XXXXXXX (trunk 0 dropped)
```

## Number ranges

| Range | National format | International format |
| --- | --- | --- |
| Vienna | `01 XXXXXXX` | `+43 1 XXXXXXX` |
| Graz (0316), Linz (0732), Salzburg (0662) | `0316 XXXXXX` | `+43 316 XXXXXX` |
| Mobile | `0664 XXXXXXX` | `+43 664 XXXXXXX` |
| Freephone | `0800 XXXXXX` | `+43 800 XXXXXX` |

## Examples

| Type | E.164 | International | National | Notes |
| --- | --- | --- | --- | --- |
| fixed-line | `+431234567` | `+43 1 234567` | `01 234567` | Vienna — area code 1, the shortest in the country |
| fixed-line | `+43316123456` | `+43 316 123456` | `0316 123456` | Graz — area code 0316 |
| mobile | `+436641234567` | `+43 664 1234567` | `0664 1234567` | Mobile — 0664 is an A1 range; 0676 T-Mobile, 0660/0699 Drei |
| toll-free | `+43800123456` | `+43 800 123456` | `0800 123456` | Freephone |

## Notes

- Austria has an open numbering plan with no standard length for either the area code or the subscriber number; some subscriber numbers are as short as three digits.
- Larger cities get shorter area codes (Vienna = 1) and correspondingly longer subscriber numbers.
- Length-based validation of Austrian numbers is unreliable — match on prefix instead.

## Sources

- https://en.wikipedia.org/wiki/Telephone_numbers_in_Austria
- RTR — Nummerierung: https://www.rtr.at/TKP/was_wir_tun/telekommunikation/nummerierung/
