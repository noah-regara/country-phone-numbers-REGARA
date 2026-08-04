# Viet Nam — Phone Number Formats

**ISO 3166-1:** `VN` / `VNM`  
**Country calling code:** +84  
**Trunk prefix:** `0`  
**International call prefix:** `00`  
**National significant number:** variable

## Formatting

```
National:      02AA XXXX XXXX (landline) / 0AA XXX XX XX (mobile)
International: +84 AA XXXX XXXX (trunk 0 dropped)
```

## Number ranges

| Range | National format | International format |
| --- | --- | --- |
| Hanoi (24), Ho Chi Minh City (28) | `024 XXXX XXXX` | `+84 24 XXXX XXXX` |
| Other provinces (2-3 digit area codes, all begin 02) | `02XX XXX XXXX` | `+84 2XX XXX XXXX` |
| Mobile (03x, 05x, 07x, 08x, 09x) | `091 XXX XX XX` | `+84 91 XXX XX XX` |
| Toll-free | `1800 XXXX` | `+84 1800 XXXX` |

## Examples

| Type | E.164 | International | National | Notes |
| --- | --- | --- | --- | --- |
| fixed-line | `+842438254433` | `+84 24 3825 4433` | `024 3825 4433` | Hanoi — area code 24 since the 2017 renumbering (was 4) |
| fixed-line | `+842838221234` | `+84 28 3822 1234` | `028 3822 1234` | Ho Chi Minh City — area code 28 (was 8) |
| mobile | `+84912345678` | `+84 91 234 56 78` | `091 234 56 78` | Mobile — 091 is a Vinaphone range; 096–098 Viettel, 090/093 MobiFone |

## Notes

- Vietnam renumbered in 2017–2018: landline area codes were re-prefixed so all now begin 02, and 11-digit mobile numbers on 012x/016x/018x/019x were converted to 10-digit numbers on 03x/05x/07x/08x.
- Landline NSNs are 9–10 digits and mobile NSNs 9, so length alone is a weak validator.
- Operator prefixes: 032–039 and 096–098 Viettel; 033–035, 091, 094 Vinaphone; 036–038, 090, 093 MobiFone.

## Sources

- https://en.wikipedia.org/wiki/Telephone_numbers_in_Vietnam
- Ministry of Information and Communications: https://mic.gov.vn/
