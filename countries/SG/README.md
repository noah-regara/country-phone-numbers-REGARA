# Singapore — Phone Number Formats

**ISO 3166-1:** `SG` / `SGP`  
**Country calling code:** +65  
**Trunk prefix:** none  
**International call prefix:** `000 (or carrier codes 001 SingTel, 002 M1, 008 StarHub)`  
**National significant number:** 8 digits

## Formatting

```
National:      XXXX XXXX
International: +65 XXXX XXXX
```

## Number ranges

| Range | National format | International format |
| --- | --- | --- |
| Fixed line / residential IP telephony (6) | `6XXX XXXX` | `+65 6XXX XXXX` |
| Mobile (8, 9) | `9XXX XXXX` | `+65 9XXX XXXX` |
| Toll-free (domestic alias) | `1800 XXX XXXX` | `reachable from abroad as +65 6XXX XXXX` |

## Examples

| Type | E.164 | International | National | Notes |
| --- | --- | --- | --- | --- |
| fixed-line | `+6561234567` | `+65 6123 4567` | `6123 4567` | Fixed line — the 6 prefix covers PSTN and residential IP telephony |
| mobile | `+6591234567` | `+65 9123 4567` | `9123 4567` | Mobile — 8 and 9 prefixes |
| mobile | `+6581234567` | `+65 8123 4567` | `8123 4567` | Mobile — 8 prefix, including prepaid and data services |

## Notes

- Singapore has no area codes or trunk prefix — the country is a single numbering area. All numbers are 8 digits, adopted in 2002.
- A 1800 toll-free number is an alias for a 6xxx xxxx line; from abroad you dial the underlying +65 6xxx xxxx number instead.
- Until 1995 Singapore was dialled from Malaysia using a trunk prefix rather than a country code.

## Sources

- https://en.wikipedia.org/wiki/Telephone_numbers_in_Singapore
- IMDA — Infocomm Media Development Authority: https://www.imda.gov.sg/
