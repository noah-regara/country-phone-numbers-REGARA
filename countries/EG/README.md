# Egypt — Phone Number Formats

**ISO 3166-1:** `EG` / `EGY`  
**Country calling code:** +20  
**Trunk prefix:** `0`  
**International call prefix:** `00`  
**National significant number:** variable

## Formatting

```
National:      0A XXXX XXXX (landline) / 01X XXXX XXXX (mobile)
International: +20 A XXXX XXXX (trunk 0 dropped)
```

## Number ranges

| Range | National format | International format |
| --- | --- | --- |
| Cairo (2), Alexandria (3) | `02 XXXX XXXX` | `+20 2 XXXX XXXX` |
| Governorates (2-digit area codes) | `0XX XXX XXXX` | `+20 XX XXX XXXX` |
| Mobile (010 Vodafone, 011 Etisalat, 012 Orange, 015 WE) | `010 XXXX XXXX` | `+20 10 XXXX XXXX` |
| Toll-free | `0800 XXX XXXX` | `+20 800 XXX XXXX` |

## Examples

| Type | E.164 | International | National | Notes |
| --- | --- | --- | --- | --- |
| fixed-line | `+20234567890` | `+20 2 3456 7890` | `02 3456 7890` | Cairo — single-digit area code 2 with an 8-digit subscriber number |
| fixed-line | `+2031234567` | `+20 3 123 4567` | `03 123 4567` | Alexandria — area code 3 |
| mobile | `+201012345678` | `+20 10 1234 5678` | `010 1234 5678` | Mobile — 010 is a Vodafone Egypt range |

## Notes

- Landline NSNs vary (8–9 digits) because area codes are 1–2 digits; mobile NSNs are 10 digits.
- Mobile operator prefixes: 010 Vodafone, 011 Etisalat, 012 Orange, 015 WE (Telecom Egypt).
- Governed by the 2003 Telecom Act and administered by the NTRA.

## Sources

- https://en.wikipedia.org/wiki/Telephone_numbers_in_Egypt
- NTRA — National Telecommunications Regulatory Authority: https://www.tra.gov.eg/
