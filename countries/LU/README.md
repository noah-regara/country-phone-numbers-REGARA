# Luxembourg — Phone Number Formats

**ISO 3166-1:** `LU` / `LUX`  
**Country calling code:** +352  
**Trunk prefix:** none  
**International call prefix:** `00`  
**National significant number:** variable

## Formatting

```
National:      XX XX XX (variable length, closed dialling)
International: +352 XX XX XX
```

## Number ranges

| Range | National format | International format |
| --- | --- | --- |
| Fixed line (legacy short form) | `XX XXXX` | `+352 XX XXXX` |
| Fixed line (Luxembourg City 4xxxxx) | `4X XX XX` | `+352 4X XX XX` |
| Mobile (621, 661, 691…) | `6X1 XXX XXX` | `+352 6X1 XXX XXX` |
| Freephone | `800 XXXXX` | `+352 800 XXXXX` |

## Examples

| Type | E.164 | International | National | Notes |
| --- | --- | --- | --- | --- |
| fixed-line | `+3524123456` | `+352 4 123 456` | `4 123 456` | Luxembourg City fixed line |
| fixed-line | `+35226791234` | `+352 2679 1234` | `2679 1234` | Consdorf — 8-digit form introduced in 2000 |
| mobile | `+352661234567` | `+352 661 234 567` | `661 234 567` | Mobile — 661 is an Orange range |
| toll-free | `+35280012345` | `+352 800 12345` | `800 12345` | Freephone |

## Notes

- Luxembourg uses a closed dialling system: numbers are dialled identically from inside and outside the country (minus the country code), with no trunk prefix.
- Fixed-line NSNs are genuinely variable — historically 6 digits, extended to 7–8 — so length-based validation is unreliable. Mobile NSNs are 9 digits.

## Sources

- https://en.wikipedia.org/wiki/Telephone_numbers_in_Luxembourg
- ILR — plan de numérotation: https://web.ilr.lu/communications-electroniques/Pages/Numerotation.aspx
