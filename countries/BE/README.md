# Belgium — Phone Number Formats

**ISO 3166-1:** `BE` / `BEL`  
**Country calling code:** +32  
**Trunk prefix:** `0`  
**International call prefix:** `00`  
**National significant number:** 8 or 9 digits

## Formatting

```
National:      0A XXX XX XX (large cities) / 0AA XX XX XX (smaller areas)
International: +32 A XXX XX XX (trunk 0 dropped)
```

## Number ranges

| Range | National format | International format |
| --- | --- | --- |
| Brussels (02), Antwerp (03), Liège (04), Ghent (09) | `02 XXX XX XX` | `+32 2 XXX XX XX` |
| Two-digit area codes (smaller regions) | `0XX XX XX XX` | `+32 XX XX XX XX` |
| Mobile | `04XX XX XX XX` | `+32 4XX XX XX XX` |
| Freephone | `0800 XX XXX` | `+32 800 XX XXX` |

## Examples

| Type | E.164 | International | National | Notes |
| --- | --- | --- | --- | --- |
| fixed-line | `+3225551212` | `+32 2 555 12 12` | `02 555 12 12` | Brussels — single-digit area code 2 |
| fixed-line | `+3232123456` | `+32 3 212 34 56` | `03 212 34 56` | Antwerp — area code 3 |
| mobile | `+32474123456` | `+32 474 12 34 56` | `0474 12 34 56` | Mobile — 047x is a Proximus range |
| toll-free | `+3280012345` | `+32 800 12 345` | `0800 12 345` | Freephone |

## Notes

- Belgium uses full-number dialling: the trunk 0 and area code are required even for local calls.
- Geographic NSNs are 8 digits; mobile NSNs are 9 digits.
- The four largest cities have single-digit area codes (2, 3, 4, 9); everywhere else has two digits.

## Sources

- https://en.wikipedia.org/wiki/Telephone_numbers_in_Belgium
