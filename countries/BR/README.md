# Brazil — Phone Number Formats

**ISO 3166-1:** `BR` / `BRA`  
**Country calling code:** +55  
**Trunk prefix:** `0 + 2-digit carrier selection code`  
**International call prefix:** `00 + 2-digit carrier selection code`  
**National significant number:** 10 or 11 digits

## Formatting

```
National:      (AA) NNNN-NNNN (landline) / (AA) 9NNNN-NNNN (mobile)
International: +55 AA NNNN NNNN
```

## Number ranges

| Range | National format | International format |
| --- | --- | --- |
| São Paulo (11), Rio de Janeiro (21), Brasília (61) | `(11) NNNN-NNNN` | `+55 11 NNNN NNNN` |
| Mobile (9 prepended to the 8-digit number) | `(11) 9NNNN-NNNN` | `+55 11 9NNNN NNNN` |
| Toll-free | `0800 NNN NNNN` | `+55 800 NNN NNNN` |

## Examples

| Type | E.164 | International | National | Notes |
| --- | --- | --- | --- | --- |
| fixed-line | `+551132109876` | `+55 11 3210 9876` | `(11) 3210-9876` | São Paulo — DDD area code 11 |
| mobile | `+5511960102030` | `+55 11 96010 2030` | `(11) 96010-2030` | São Paulo mobile — the leading 9 was added on 2012-07-29, making mobile NSNs 11 digits |
| toll-free | `+558007290001` | `+55 800 729 0001` | `0800 729 0001` | Toll-free — always billed as a local call regardless of where the call centre sits |

## Notes

- Brazil requires a carrier selection code (CSP) for long-distance calls: you dial 0, then a 2-digit carrier code (21 Claro, 41 TIM, 15 Vivo), then the area code and number.
- Area codes are called DDD codes and are always 2 digits.
- Mobile numbers gained a leading 9 in 2012, so mobile NSNs are 11 digits against 10 for landlines — this is the reliable way to tell them apart.

## Sources

- https://en.wikipedia.org/wiki/Telephone_numbers_in_Brazil
- ANATEL — Agência Nacional de Telecomunicações: https://www.gov.br/anatel/
