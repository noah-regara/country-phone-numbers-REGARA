# Peru — Phone Number Formats

**ISO 3166-1:** `PE` / `PER`  
**Country calling code:** +51  
**Trunk prefix:** `0`  
**International call prefix:** `00`  
**National significant number:** 8 or 9 digits

## Formatting

```
National:      0A XXXXXXX (Lima) / 0AA XXXXXX (regional) / 9XX XXX XXX (mobile)
International: +51 A XXXXXXX (trunk 0 dropped)
```

## Number ranges

| Range | National format | International format |
| --- | --- | --- |
| Lima and Callao (1) | `(01) XXX XXXX` | `+51 1 XXX XXXX` |
| Regional (2-digit area codes, e.g. Cusco 84, Arequipa 54) | `(084) XXXXXX` | `+51 84 XXXXXX` |
| Mobile (9XX, non-geographic) | `9XX XXX XXX` | `+51 9XX XXX XXX` |

## Examples

| Type | E.164 | International | National | Notes |
| --- | --- | --- | --- | --- |
| fixed-line | `+5111234567` | `+51 1 123 4567` | `(01) 123 4567` | Lima — area code 1, the only area with 7-digit subscriber numbers |
| fixed-line | `+5184123456` | `+51 84 123456` | `(084) 123456` | Cusco — area code 84 with a 6-digit subscriber number |
| mobile | `+51912345678` | `+51 912 345 678` | `912 345 678` | Mobile — all Peruvian mobiles are 9 digits beginning with 9 |

## Notes

- Lima/Callao has a single-digit area code and 7-digit subscriber numbers; every other region has a 2-digit code and 6-digit numbers.
- Mobile numbers became fully non-geographic under the 2010 'Área Virtual Móvil' reform and are dialled as a flat 9 digits nationwide.

## Sources

- https://en.wikipedia.org/wiki/Telephone_numbers_in_Peru
- OSIPTEL — Organismo Supervisor de Inversión Privada en Telecomunicaciones: https://www.osiptel.gob.pe/
