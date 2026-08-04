# Lebanon — Phone Number Formats

**ISO 3166-1:** `LB` / `LBN`  
**Country calling code:** +961  
**Trunk prefix:** `0`  
**International call prefix:** `00`  
**National significant number:** 7 or 8 digits

## Formatting

```
National:      0A XXX XXX (landline) / 0AA XXX XXX (mobile)
International: +961 A XXX XXX (trunk 0 dropped)
```

## Number ranges

| Range | National format | International format |
| --- | --- | --- |
| Beirut (01) | `01 XXX XXX` | `+961 1 XXX XXX` |
| Other regions (04 Metn, 05 Aley, 06 Tripoli, 07 South, 08 Bekaa, 09 Keserwan) | `0X XXX XXX` | `+961 X XXX XXX` |
| Mobile — Alfa (03, 071, 076, 078, 079), touch (03, 070, 081) | `071 XXX XXX` | `+961 71 XXX XXX` |

## Examples

| Type | E.164 | International | National | Notes |
| --- | --- | --- | --- | --- |
| fixed-line | `+9611123456` | `+961 1 123 456` | `01 123 456` | Beirut — area code 01 covers the city and its metropolitan area |
| mobile | `+96171123456` | `+961 71 123 456` | `071 123 456` | Mobile — 071 is an Alfa (MIC1) range |
| mobile | `+96170123456` | `+961 70 123 456` | `070 123 456` | Mobile — 070 is a touch (MIC2) range |

## Notes

- Landline NSNs are 7 digits and mobile NSNs 8, so length distinguishes the two.
- The two mobile operators are known by their licence names MIC1 (Alfa) and MIC2 (touch).

## Sources

- https://en.wikipedia.org/wiki/Telephone_numbers_in_Lebanon
- TRA Lebanon — Telecommunications Regulatory Authority: https://www.tra.gov.lb/
