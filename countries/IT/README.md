# Italy — Phone Number Formats

**ISO 3166-1:** `IT` / `ITA`  
**Country calling code:** +39  
**Trunk prefix:** none  
**International call prefix:** `00`  
**National significant number:** variable

## Formatting

```
National:      0AA XXXXXXXX (landline, leading 0 retained) / 3XX XXXXXXX (mobile)
International: +39 0AA XXXXXXXX — the leading 0 is KEPT when dialling from abroad
```

## Number ranges

| Range | National format | International format |
| --- | --- | --- |
| Rome | `06 XXXX XXXX` | `+39 06 XXXX XXXX` |
| Milan | `02 XXXX XXXX` | `+39 02 XXXX XXXX` |
| Other cities (3–4 digit area code) | `0XXX XXXXXX` | `+39 0XXX XXXXXX` |
| Mobile | `3XX XXX XXXX` | `+39 3XX XXX XXXX` |
| Toll-free (numero verde) | `800 XXX XXX` | `+39 800 XXX XXX` |

## Examples

| Type | E.164 | International | National | Notes |
| --- | --- | --- | --- | --- |
| fixed-line | `+390648901234` | `+39 06 4890 1234` | `06 4890 1234` | Rome — area code 06, leading 0 retained internationally |
| fixed-line | `+390272001234` | `+39 02 7200 1234` | `02 7200 1234` | Milan — area code 02 |
| mobile | `+393351234567` | `+39 335 123 4567` | `335 123 4567` | Mobile — 335 was originally TIM; mobile numbers never carry a leading 0 |
| toll-free | `+39800123456` | `+39 800 123 456` | `800 123 456` | Numero verde |

## Notes

- Italy is the notable European exception: since 1998 the leading 0 of a landline number is an integral part of the number and MUST be dialled from abroad (+39 06 …, not +39 6 …).
- Mobile numbers start with 3 and carry no leading 0.
- Italian regulations prescribe no fixed digit-grouping rules; spaces, dots and hyphens are all seen in practice.
- Landline NSNs range from about 6 to 11 digits, so length alone does not validate an Italian number.

## Sources

- https://en.wikipedia.org/wiki/Telephone_numbers_in_Italy
