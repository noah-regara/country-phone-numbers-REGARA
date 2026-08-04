# Yemen — Phone Number Formats

**ISO 3166-1:** `YE` / `YEM`  
**Country calling code:** +967  
**Trunk prefix:** `0`  
**International call prefix:** `00`  
**National significant number:** 7 or 8 or 9 digits

## Formatting

```
National:      0A XXXXXXX (fixed) / 7X XXXXXXX (mobile)
International: +967 A XXXXXXX (trunk 0 dropped)
```

## Number ranges

| Range | National format | International format |
| --- | --- | --- |
| Sanaa (01) | `01 XXXXXXX` | `+967 1 XXXXXXX` |
| Aden (02), Taiz (04), other governorates | `0X XXXXXX` | `+967 X XXXXXX` |
| Mobile — Sabafon (71), MTN/Yemen Mobile (73, 77, 70) | `71 XXXXXXX` | `+967 71 XXXXXXX` |

## Examples

| Type | E.164 | International | National | Notes |
| --- | --- | --- | --- | --- |
| fixed-line | `+96712345678` | `+967 1 234 5678` | `01 234 5678` | Sanaa — area code 01 |
| fixed-line | `+9672234567` | `+967 2 234567` | `02 234567` | Aden — area code 2 with a 6-digit subscriber number, giving the usual 7-digit governorate NSN |
| mobile | `+967711234567` | `+967 71 123 4567` | `71 123 4567` | Mobile — 71 is a Sabafon range; mobile numbers carry no trunk 0 |

## Notes

- The trunk prefix 0 applies to landlines only; mobile numbers are dialled without it.
- Fixed-line area codes are a single digit (1 Sana'a, 2 Aden, 3 Hodeidah, 4 Taiz/Ibb, 5 Hadhramaut, 6 Marib, 7 Saada/Amran), so most governorate NSNs are 7 digits.
- Sana'a has sub-ranges with 7-digit subscriber numbers, giving an 8-digit NSN there; mobile NSNs are 9 digits.

## Sources

- https://en.wikipedia.org/wiki/Telephone_numbers_in_Yemen
- Ministry of Telecommunications and Information Technology, Yemen: https://www.mtit.gov.ye/
