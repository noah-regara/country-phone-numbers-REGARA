# Romania — Phone Number Formats

**ISO 3166-1:** `RO` / `ROU`  
**Country calling code:** +40  
**Trunk prefix:** `0`  
**International call prefix:** `00`  
**National significant number:** 9 digits

## Formatting

```
National:      0AA XXX XXXX (10 digits including trunk 0)
International: +40 AA XXX XXXX (trunk 0 dropped)
```

## Number ranges

| Range | National format | International format |
| --- | --- | --- |
| Bucharest (21, 31) | `021 XXX XXXX` | `+40 21 XXX XXXX` |
| Other geographic (2xx, 3xx) | `0264 XXX XXX` | `+40 264 XXX XXX` |
| Mobile (7xx) | `0721 XXX XXX` | `+40 721 XXX XXX` |
| Freephone | `0800 XXX XXX` | `+40 800 XXX XXX` |

## Examples

| Type | E.164 | International | National | Notes |
| --- | --- | --- | --- | --- |
| fixed-line | `+40212345678` | `+40 21 234 5678` | `021 234 5678` | Bucharest — area code 21 |
| fixed-line | `+40264123456` | `+40 264 123 456` | `0264 123 456` | Cluj-Napoca — area code 264 |
| mobile | `+40721234567` | `+40 721 234 567` | `0721 234 567` | Mobile — 072x/073x are Vodafone Romania ranges |
| toll-free | `+40800123456` | `+40 800 123 456` | `0800 123 456` | Freephone |

## Notes

- Romania requires the full 10-digit national form (trunk 0 + 9-digit NSN) for every domestic call, including local ones.
- The digit after the trunk 0 encodes the service: 2–3 geographic, 7 mobile, 8 special/toll-free, 9 premium.

## Sources

- https://en.wikipedia.org/wiki/Telephone_numbers_in_Romania
- ANCOM — planul naţional de numerotaţie: https://www.ancom.ro/en/numerotatie_2314
