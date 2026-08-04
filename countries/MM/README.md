# Myanmar — Phone Number Formats

**ISO 3166-1:** `MM` / `MMR`  
**Country calling code:** +95  
**Trunk prefix:** `0`  
**International call prefix:** `00`  
**National significant number:** variable

## Formatting

```
National:      0A XXX XXXX (fixed) / 09 XXX XXXXXX (mobile)
International: +95 A XXX XXXX (trunk 0 dropped)
```

## Number ranges

| Range | National format | International format |
| --- | --- | --- |
| Yangon (1) | `01 XXX XXXX` | `+95 1 XXX XXXX` |
| Mandalay (2), Nay Pyi Taw (67) | `02 XXX XXXX` | `+95 2 XXX XXXX` |
| Mobile (09) | `09 XXX XXXXXX` | `+95 9 XXX XXXXXX` |

## Examples

| Type | E.164 | International | National | Notes |
| --- | --- | --- | --- | --- |
| fixed-line | `+9512345678` | `+95 1 234 5678` | `01 234 5678` | Yangon — area code 1 |
| fixed-line | `+9522834567` | `+95 2 283 4567` | `02 283 4567` | Mandalay — area code 2 |
| mobile | `+95797123456` | `+95 797 123 456` | `09 797 123 456` | Mobile — 097 is a Telenor range; 096 Mytel, 098/099 Ooredoo, 092/094/095 MPT |

## Notes

- Myanmar's NSN varies from about 7 to 10 digits, so length-based validation is unreliable.
- All mobile numbers are dialled domestically with the 09 prefix; the operator is identified by the digit that follows.

## Sources

- https://en.wikipedia.org/wiki/Telephone_numbers_in_Myanmar
- PTD — Posts and Telecommunications Department, Myanmar: https://www.ptd.gov.mm/
