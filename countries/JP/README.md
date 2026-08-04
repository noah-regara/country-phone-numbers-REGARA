# Japan — Phone Number Formats

**ISO 3166-1:** `JP` / `JPN`  
**Country calling code:** +81  
**Trunk prefix:** `0`  
**International call prefix:** `010`  
**National significant number:** 9 or 10 digits

## Formatting

```
National:      0A-XXXX-XXXX (major cities) / 0AAAA-XX-XXXX (rural)
International: +81 A XXXX XXXX (trunk 0 dropped)
```

## Number ranges

| Range | National format | International format |
| --- | --- | --- |
| Tokyo (03), Osaka (06) | `03-XXXX-XXXX` | `+81 3 XXXX XXXX` |
| Regional (2–5 digit area codes) | `0XX-XXX-XXXX` | `+81 XX XXX XXXX` |
| Mobile (070, 080, 090) | `090-XXXX-XXXX` | `+81 90 XXXX XXXX` |
| Toll-free (free dial) | `0120-XXX-XXX` | `+81 120 XXX XXX` |

## Examples

| Type | E.164 | International | National | Notes |
| --- | --- | --- | --- | --- |
| fixed-line | `+81312345678` | `+81 3 1234 5678` | `03-1234-5678` | Tokyo — area code 3, the shortest in Japan |
| fixed-line | `+81612345678` | `+81 6 1234 5678` | `06-1234-5678` | Osaka — area code 6 |
| mobile | `+819012345678` | `+81 90 1234 5678` | `090-1234-5678` | Mobile — 070, 080 and 090 are the mobile prefixes |
| toll-free | `+81120123456` | `+81 120 123 456` | `0120-123-456` | Free dial (フリーダイヤル) |

## Notes

- Japan's international access prefix is 010, not 00.
- Area code length is inversely proportional to population density: Tokyo is a single digit (3), while rural areas run to five digits. The subscriber number shrinks to compensate.
- Area codes increase roughly north to south — Sapporo 11, Kagoshima 99.
- Numbers are conventionally written with hyphens.

## Sources

- https://en.wikipedia.org/wiki/Telephone_numbers_in_Japan
- MIC — Ministry of Internal Affairs and Communications: https://www.soumu.go.jp/main_sosiki/joho_tsusin/top/tel_number/
