# Germany — Phone Number Formats

**ISO 3166-1:** `DE` / `DEU`  
**Country calling code:** +49  
**Trunk prefix:** `0`  
**International call prefix:** `00`  
**National significant number:** variable

## Formatting

```
National:      0AA XXXXXXXX / 0AAA XXXXXXX (open plan, variable length)
International: +49 AA XXXXXXXX (trunk 0 dropped)
```

## Number ranges

| Range | National format | International format |
| --- | --- | --- |
| Geographic, 2-digit area code (Berlin 30, Hamburg 40, Munich 89) | `030 XXXXXXXX` | `+49 30 XXXXXXXX` |
| Geographic, 3-digit area code (Cologne 221, Frankfurt 69) | `0221 XXXXXXX` | `+49 221 XXXXXXX` |
| Geographic, 4-digit area code | `0XXXX XXXXXX` | `+49 XXXX XXXXXX` |
| Mobile | `0151 XXXXXXXX` | `+49 151 XXXXXXXX` |
| Freephone | `0800 XXXXXXX` | `+49 800 XXXXXXX` |

## Examples

| Type | E.164 | International | National | Notes |
| --- | --- | --- | --- | --- |
| fixed-line | `+493022360` | `+49 30 22360` | `030 22360` | Berlin — area code 030; subscriber numbers are genuinely variable length |
| fixed-line | `+498912345678` | `+49 89 12345678` | `089 12345678` | Munich — area code 089 |
| mobile | `+4915112345678` | `+49 151 12345678` | `0151 12345678` | Mobile — 0151 is a Telekom range |
| toll-free | `+498001234567` | `+49 800 1234567` | `0800 1234567` | Freephone |

## Notes

- Germany operates an open numbering plan: there is no fixed national number length. NSNs run from roughly 3 to 13 digits, so length alone cannot validate a German number.
- Area codes are 2–5 digits after the trunk 0. Two-digit codes serve the largest cities; five-digit codes appear in the eastern states.
- Direct-dial-in (Durchwahl) extensions are appended to a base number, which is why subscriber numbers vary in length within a single area code.

## Sources

- https://en.wikipedia.org/wiki/Telephone_numbers_in_Germany
