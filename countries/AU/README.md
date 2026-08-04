# Australia — Phone Number Formats

**ISO 3166-1:** `AU` / `AUS`  
**Country calling code:** +61  
**Trunk prefix:** `0`  
**International call prefix:** `0011`  
**National significant number:** 9 or 10 digits

## Formatting

```
National:      (0A) XXXX XXXX (landline) / 04XX XXX XXX (mobile)
International: +61 A XXXX XXXX (trunk 0 dropped)
```

## Number ranges

| Range | National format | International format |
| --- | --- | --- |
| Central-East — NSW, ACT (02) | `(02) XXXX XXXX` | `+61 2 XXXX XXXX` |
| South-East — VIC, TAS (03); North-East — QLD (07); Central-West — WA, SA, NT (08) | `(03) XXXX XXXX` | `+61 3 XXXX XXXX` |
| Mobile (04) | `04XX XXX XXX` | `+61 4XX XXX XXX` |
| Toll-free | `1800 XXX XXX` | `+61 1800 XXX XXX` |

## Examples

| Type | E.164 | International | National | Notes |
| --- | --- | --- | --- | --- |
| fixed-line | `+61291234567` | `+61 2 9123 4567` | `(02) 9123 4567` | Sydney — area code 02 covers NSW and the ACT |
| fixed-line | `+61391234567` | `+61 3 9123 4567` | `(03) 9123 4567` | Melbourne — area code 03 covers Victoria and Tasmania |
| mobile | `+61412345678` | `+61 412 345 678` | `0412 345 678` | Mobile — all Australian mobiles begin 04 and are nationwide |
| toll-free | `+611800123456` | `+61 1800 123 456` | `1800 123 456` | Freecall |

## Notes

- Australia has just four geographic area codes (02, 03, 07, 08), each covering a large multi-state region.
- The international access prefix is 0011, not 00.
- 13/1300 numbers are charged at a fixed local rate rather than being free.

## Sources

- https://en.wikipedia.org/wiki/Telephone_numbers_in_Australia
- ACMA — Australian Communications and Media Authority: https://www.acma.gov.au/numbering
