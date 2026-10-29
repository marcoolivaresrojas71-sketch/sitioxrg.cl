# XRG Memorias — landing page

Sitio estático en HTML5, CSS y JavaScript, preparado para Cloudflare Pages.

## Estructura
- `index.html`: contenido y estructura.
- `css/styles.css`: estilos responsive.
- `js/main.js`: menú móvil, año y enlaces de WhatsApp.
- `assets/`: favicon y paisaje vectorial local.

## Configuración obligatoria antes de publicar
1. Abre `js/main.js`.
2. Cambia `WHATSAPP_NUMBER = "56912345678"` por el número de WhatsApp Business real de XRG, con código de país y solo dígitos. Ejemplo de formato chileno: `569XXXXXXXX`.
3. Busca `www.xrg.cl` en `index.html` si deseas cambiar el dominio o añadir enlaces definitivos.
4. Revisa las condiciones reales del servicio: privacidad, duración del alojamiento, copias de seguridad, precios, plazos y compatibilidad de realidad aumentada. No publiques promesas que todavía no puedas garantizar.
5. Sustituye las ilustraciones abstractas de las tarjetas por fotografías de productos reales cuando las tengas. El paisaje de portada incluido es un SVG local, no requiere conexión externa.

## Publicar en Cloudflare Pages
1. Sube la carpeta a un repositorio GitHub.
2. En Cloudflare Dashboard, entra a **Workers & Pages → Create → Pages → Connect to Git**.
3. Selecciona el repositorio.
4. Framework preset: **None**.
5. Build command: déjalo vacío.
6. Build output directory: `/` (raíz del repositorio).
7. Guarda y despliega.

También puedes usar `npx wrangler pages deploy .` desde esta carpeta si tienes Wrangler configurado.

## Importante sobre WhatsApp
El sitio genera enlaces `wa.me` con un mensaje predefinido. No almacena ni envía datos a un servidor. El número de ejemplo está intencionalmente bloqueado por una alerta para evitar enviar clientes al número equivocado.

## QR y realidad aumentada
Esta primera landing presenta los servicios, pero no genera los QR de los clientes ni ejecuta una experiencia AR. Cada memorial deberá tener una URL individual estable y el marcador AR original debe probarse con la tecnología de reconocimiento elegida antes de producirlo.
