# Portfolio

Sitio personal publicado con GitHub Pages.

## Estructura

- `index.html`: página principal y contenido del portafolio.
- `assets/css/styles.css`: estilos visuales y diseño responsive.
- `assets/js/theme.js`: selección de tema claro/oscuro, preferencia del sistema y persistencia local.
- `CNAME`: dominio personalizado de GitHub Pages.

## Presentación y temas

La descripción del perfil ocupa un bloque centrado de hasta 960 px, con márgenes laterales adaptados al ancho de pantalla. Las secciones con título conservan su distribución en columnas en escritorio y se apilan en móvil.

El interruptor «Modo oscuro» de la cabecera se puede usar con ratón, toque o teclado. Al abrir el sitio se respeta el tema del sistema, salvo que se haya elegido otro previamente. La elección se guarda en `localStorage` con la clave `portfolio-theme` y se sincroniza entre pestañas. Si el almacenamiento está bloqueado, el interruptor sigue funcionando durante la visita. Sin JavaScript, el sitio conserva un tema legible según el sistema y oculta el interruptor.

## Secciones

1. Presentación
2. Perfil
3. Experiencia
4. Proyectos seleccionados
5. Habilidades
6. Contacto

## Regla de publicación

Este repositorio es público. No subir:

- RUT, dirección, teléfono u otros identificadores personales.
- Credenciales, tokens, claves API o secretos.
- Bases de datos privadas o administrativas.
- Información confidencial de empleadores o instituciones.
- Historial de postulaciones laborales.
- Archivos de CV que contengan datos que no se quieran hacer públicos.

El sitio mantiene `noindex, nofollow` para reducir su aparición en motores de búsqueda, pero eso no convierte el contenido en privado. Todo archivo de este repositorio debe considerarse públicamente accesible.
