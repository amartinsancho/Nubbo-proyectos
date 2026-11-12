# La cafetería de Tortoli (La Esquina Café)

Web de una sola página, en español, para la cafetería de Via Piamonte 5, Tortoli (Italia). Sin cuentas de usuario ni base de datos propia.

## Secciones

Inicio, Nuestra historia, Carta, Espacio, Opiniones y Contacto (con enlaces `#inicio`, `#historia`, `#carta`, `#espacio`, `#opiniones`, `#contacto`), pie de página y botón flotante de WhatsApp. Incluye datos para buscadores (cafetería local).

## Cómo cambiar los datos

Todo lo editable está en `src/lib/cafe.ts`: nombre, dirección, teléfono, número y mensaje de WhatsApp, horarios (martes a domingo, 7:00–18:00), email, Instagram, carta y precios, opiniones y fotos.

- Los precios de la carta y las opiniones son de ejemplo: cámbialos por los reales.
- Las fotos están en `public/fotos/` (versión grande y `-s` para móvil). Sustitúyelas por fotos reales del local con el mismo nombre.

## Diseño

Colores: crema `#F5F0E8`, marrón café `#4B3027`, terracota `#B87555`, verde oliva `#74785A`. Titulares en serif y texto en sans serif. Se adapta a móvil y escritorio. Sin pop-ups ni registro.

## Ejecutar en local

Necesitas Node 22 y npm.

1. `npm ci`
2. `npm run dev` y abre <http://localhost:3100>
3. `npm run check` para comprobar que no hay errores antes de publicar.
