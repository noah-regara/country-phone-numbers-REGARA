# Mozambique — Phone Number Formats

**ISO 3166-1:** `MZ` / `MOZ`  
**Country calling code:** +258  
**Trunk prefix:** none  
**International call prefix:** `00`  
**National significant number:** 8 or 9 digits

## Formatting

```
National:      AA XXXXXX (fixed) / AA XXXXXXX (mobile)
International: +258 AA XXXXXX
```

## Number ranges

| Range | National format | International format |
| --- | --- | --- |
| Maputo (21) | `21 XXXXXX` | `+258 21 XXXXXX` |
| Other provinces (2-digit area codes) | `XX XXXXXX` | `+258 XX XXXXXX` |
| Mobile — Mcel (82, 83), Vodacom (84, 85), Movitel (86, 87) | `84 XXXXXXX` | `+258 84 XXXXXXX` |

## Examples

| Type | E.164 | International | National | Notes |
| --- | --- | --- | --- | --- |
| fixed-line | `+25821123456` | `+258 21 123456` | `21 123456` | Maputo — area code 21 |
| mobile | `+258841234567` | `+258 84 1234567` | `84 1234567` | Mobile — 84/85 are Vodacom Moçambique ranges |
| mobile | `+258821234567` | `+258 82 1234567` | `82 1234567` | Mobile — 82/83 are Mcel ranges |

## Notes

- No trunk prefix; fixed NSNs are 8 digits and mobile NSNs 9, so length distinguishes the two.
- Mobile operator blocks: 82/83 Mcel, 84/85 Vodacom, 86/87 Movitel.

## Sources

- https://en.wikipedia.org/wiki/Telephone_numbers_in_Mozambique
- INCM — Instituto Nacional das Comunicações de Moçambique: https://www.incm.gov.mz/
