# United Kingdom of Great Britain and Northern Ireland — Phone Number Formats

**ISO 3166-1:** `GB` / `GBR`  
**Country calling code:** +44  
**Trunk prefix:** `0`  
**International call prefix:** `00`  
**National significant number:** 9 or 10 digits

## Formatting

```
National:      0AA XXXX XXXX / 0AAAA XXXXXX (grouping depends on area-code length)
International: +44 AA XXXX XXXX (trunk 0 dropped)
```

## Number ranges

| Range | National format | International format |
| --- | --- | --- |
| Geographic, 2-digit area code (London 20, Southampton 23) | `020 XXXX XXXX` | `+44 20 XXXX XXXX` |
| Geographic, 3-digit area code (Manchester 161, Birmingham 121) | `0161 XXX XXXX` | `+44 161 XXX XXXX` |
| Geographic, 4-digit area code (most towns) | `01XXX XXXXXX` | `+44 1XXX XXXXXX` |
| Mobile | `07XXX XXXXXX` | `+44 7XXX XXXXXX` |
| Freephone | `0800 XXX XXXX` | `+44 800 XXX XXXX` |
| Non-geographic / national rate | `0345 XXX XXXX` | `+44 345 XXX XXXX` |

## Examples

| Type | E.164 | International | National | Notes |
| --- | --- | --- | --- | --- |
| fixed-line | `+442071234567` | `+44 20 7123 4567` | `020 7123 4567` | London — area code 020, subscriber block 7xxx |
| fixed-line | `+441612361234` | `+44 161 236 1234` | `0161 236 1234` | Manchester — area code 0161 |
| mobile | `+447400123456` | `+44 7400 123456` | `07400 123456` | Mobile — 07400 is an allocated Great Britain mobile range (07911 was previously shown here, but 079111 is allocated to Guernsey) |
| toll-free | `+448001234567` | `+44 800 123 4567` | `0800 123 4567` | Freephone |

## Notes

- The trunk prefix 0 is part of the national presentation but is never dialled from abroad.
- Area codes are variable length (2–5 digits after the 0); the subscriber number shrinks to match, keeping the NSN at 10 digits for almost all numbers.
- Ofcom reserves 07700 900000–900999 and 020 7946 0xxx as fictitious 'drama' ranges for film and TV; the examples above deliberately use real allocated ranges instead.

## Sources

- https://en.wikipedia.org/wiki/Telephone_numbers_in_the_United_Kingdom
- Ofcom — National Telephone Numbering Plan: https://www.ofcom.org.uk/phones-and-broadband/phone-numbers/numbering/
