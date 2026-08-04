# Spain — Phone Number Formats

**ISO 3166-1:** `ES` / `ESP`  
**Country calling code:** +34  
**Trunk prefix:** none  
**International call prefix:** `00`  
**National significant number:** 9 digits

## Formatting

```
National:      XXX XXX XXX (closed plan, no trunk prefix)
International: +34 XXX XXX XXX
```

## Number ranges

| Range | National format | International format |
| --- | --- | --- |
| Geographic (Madrid 91, Barcelona 93) | `9XX XXX XXX` | `+34 9XX XXX XXX` |
| Geographic overflow | `8XX XXX XXX` | `+34 8XX XXX XXX` |
| Mobile | `6XX XXX XXX / 7XX XXX XXX` | `+34 6XX XXX XXX` |
| Freephone | `900 XXX XXX` | `+34 900 XXX XXX` |

## Examples

| Type | E.164 | International | National | Notes |
| --- | --- | --- | --- | --- |
| fixed-line | `+34913123456` | `+34 913 123 456` | `913 123 456` | Madrid — geographic code 91 |
| fixed-line | `+34934123456` | `+34 934 123 456` | `934 123 456` | Barcelona — geographic code 93 |
| mobile | `+34612345678` | `+34 612 345 678` | `612 345 678` | Mobile — 6xx and 7xx ranges |
| toll-free | `+34900123456` | `+34 900 123 456` | `900 123 456` | Teléfono gratuito |

## Notes

- Spain abolished the trunk prefix on 1998-12-01 and moved to a closed 9-digit plan: the full national number is dialled for every call, local or long distance.
- The old area codes survive as the leading digits of the 9-digit number (91 = Madrid, 93 = Barcelona), but they are no longer separable prefixes.
- Numbers are conventionally grouped in threes.

## Sources

- https://en.wikipedia.org/wiki/Telephone_numbers_in_Spain
- CNMC — plan nacional de numeración: https://numeracionyoperadores.cnmc.es/numeracion
