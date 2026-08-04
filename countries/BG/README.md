# Bulgaria — Phone Number Formats

**ISO 3166-1:** `BG` / `BGR`  
**Country calling code:** +359  
**Trunk prefix:** `0`  
**International call prefix:** `00`  
**National significant number:** 8 or 9 digits

## Formatting

```
National:      0A XXX XXXX (Sofia) / 0AA XXX XXX (elsewhere)
International: +359 A XXX XXXX (trunk 0 dropped)
```

## Number ranges

| Range | National format | International format |
| --- | --- | --- |
| Sofia (area code 2) | `02 XXX XXXX` | `+359 2 XXX XXXX` |
| Other geographic | `0XX XXX XXX` | `+359 XX XXX XXX` |
| Mobile (87, 88, 89, 98, 99) | `088 XXX XXXX` | `+359 88 XXX XXXX` |
| Freephone | `0800 XXXXX` | `+359 800 XXXXX` |

## Examples

| Type | E.164 | International | National | Notes |
| --- | --- | --- | --- | --- |
| fixed-line | `+35921234567` | `+359 2 123 4567` | `02 123 4567` | Sofia — single-digit area code 2 |
| fixed-line | `+35932123456` | `+359 32 123 456` | `032 123 456` | Plovdiv — area code 32 |
| mobile | `+359881234567` | `+359 88 123 4567` | `088 123 4567` | Mobile — 088 is an A1 Bulgaria range |
| toll-free | `+35980012345` | `+359 800 12345` | `0800 12345` | Freephone |

## Notes

- The full national number, including the trunk 0, must be dialled for all domestic calls.
- Geographic NSNs are typically 8 digits; mobile NSNs are 9.

## Sources

- https://en.wikipedia.org/wiki/Telephone_numbers_in_Bulgaria
- CRC — numbering plan: https://crc.bg/en/
