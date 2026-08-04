# Argentina — Phone Number Formats

**ISO 3166-1:** `AR` / `ARG`  
**Country calling code:** +54  
**Trunk prefix:** `0`  
**International call prefix:** `00`  
**National significant number:** 10 or 11 digits

## Formatting

```
National:      0AA XXXX-XXXX (landline) / 0AA 15 XXXX-XXXX (mobile)
International: +54 AA XXXX XXXX — mobiles take an extra 9: +54 9 AA XXXX XXXX
```

## Number ranges

| Range | National format | International format |
| --- | --- | --- |
| Buenos Aires (11) | `(011) XXXX-XXXX` | `+54 11 XXXX XXXX` |
| Other areas (3–4 digit area codes) | `(0223) XXX-XXXX` | `+54 223 XXX XXXX` |
| Mobile (domestic 15 prefix) | `(0223) 15 XXX-XXXX` | `+54 9 223 XXX XXXX` |
| Toll-free | `0800 XXX XXXX` | `+54 800 XXX XXXX` |

## Examples

| Type | E.164 | International | National | Notes |
| --- | --- | --- | --- | --- |
| fixed-line | `+541112345678` | `+54 11 1234 5678` | `(011) 1234-5678` | Buenos Aires — 2-digit area code 11 with an 8-digit subscriber number |
| mobile | `+5492231234567` | `+54 9 223 123 4567` | `(0223) 15 123-4567` | Mar del Plata mobile — note the 9 replaces the domestic 15 when dialling from abroad |
| toll-free | `+548001234567` | `+54 800 123 4567` | `0800 123 4567` | Toll-free |

## Notes

- Argentine mobile numbers are written two different ways: domestically the digit 15 sits between the area code and the subscriber number, but from abroad you drop the 15 and insert a 9 immediately after +54.
- So (0223) 15 123-4567 dialled locally becomes +54 9 223 123 4567 internationally — the same line, two forms. This trips up a lot of validation code.
- The national number is always 10 digits (excluding the mobile 9); area codes run 2–4 digits with the subscriber number sized to match.

## Sources

- https://en.wikipedia.org/wiki/Telephone_numbers_in_Argentina
- ENACOM — Ente Nacional de Comunicaciones: https://www.enacom.gob.ar/
