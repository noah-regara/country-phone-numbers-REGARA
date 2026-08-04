# Nepal — Phone Number Formats

**ISO 3166-1:** `NP` / `NPL`  
**Country calling code:** +977  
**Trunk prefix:** `0`  
**International call prefix:** `00`  
**National significant number:** 8 or 10 digits

## Formatting

```
National:      0A XXXXXXX (fixed) / 98X XXX XXXX (mobile)
International: +977 A XXXXXXX (trunk 0 dropped)
```

## Number ranges

| Range | National format | International format |
| --- | --- | --- |
| Kathmandu (1) | `01 4XXXXXX` | `+977 1 4XXXXXX` |
| Other districts (2-digit area codes, e.g. Pokhara 61) | `061 XXXXXX` | `+977 61 XXXXXX` |
| Mobile (97X, 98X) | `98X XXX XXXX` | `+977 98X XXX XXXX` |

## Examples

| Type | E.164 | International | National | Notes |
| --- | --- | --- | --- | --- |
| fixed-line | `+97714441234` | `+977 1 444 1234` | `01 444 1234` | Kathmandu — area code 1; subscriber numbers begin 4, 5 or 6 |
| fixed-line | `+97761123456` | `+977 61 123456` | `061 123456` | Pokhara — area code 61 |
| mobile | `+9779841234567` | `+977 984 123 4567` | `984 123 4567` | Mobile — 98X and 97X ranges; 10-digit NSN dialled without a trunk 0 |

## Notes

- Geographic numbers take the trunk prefix 0 for domestic long-distance; mobile numbers are dialled as a flat 10 digits with no trunk prefix.
- Area codes are 1–2 digits with the subscriber number sized to match, giving an 8-digit fixed NSN and a 10-digit mobile NSN.

## Sources

- https://en.wikipedia.org/wiki/Telephone_numbers_in_Nepal
- NTA — Nepal Telecommunications Authority: https://nta.gov.np/
