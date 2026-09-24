# LAHL — Propuesta navegable

Andrew aclaró el 23 de septiembre de 2026 que este sitio es una muestra / mockup para presentar al cliente. Se conserva el mapa del sitio y la dirección visual; no se conectan cuentas reales ni se activa sincronización social antes de aprobar la propuesta.

## Dirección de diseño

Carbón #0E0E0E, superficie #161616, blanco hueso #F2EFEA, gris #8A8A85 y latón #C9A46C. Jost 300–500 para títulos y logo, Inter para lectura. Composición: hero fotográfico a pantalla completa, titular inferior izquierdo, servicios compactos, portafolio editorial asimétrico y cotización al final. Los números de sección funcionan como referencias de láminas del plano solicitado.

El gris del texto pequeño se aclara a #AAA9A3 para legibilidad. No se muestran montos inventados: los datos usan null y la interfaz dice «Precio por confirmar». Las fichas conceptuales nunca se presentan como obras construidas de LAHL. El alcance técnico de los servicios está pendiente de revisión del arquitecto.

## Alcance y ajustes

- La carpeta efectiva autorizada es `/Users/andrewcoreaflores/Documents/ChatGPT/LAHL Arquitectura`.
- React 18 por compatibilidad del stack; Vite, TypeScript, Tailwind, React Router, Framer Motion, Lenis y fuentes locales.
- GitHub Pages solicitado después del plan inicial; el despliegue usa Actions y base `/LAHL-Arquitecura/`.
- Feed social de demostración. Integraciones de producción diferidas por tratarse de una propuesta.
- No se atribuyen las imágenes generadas a obras reales del estudio.

## Redes en esta propuesta

`public/data/redes.json` contiene seis imágenes de muestra con `ejemplo: true`, sin perfiles ni fechas ficticias. Cada tarjeta abre una vista local que aclara su carácter ilustrativo. El componente acepta publicaciones reales HTTPS y abre YouTube en un modal sin cookies. Con archivo vacío o fallo de carga, la sección se oculta.

La sincronización y el workflow cada tres horas quedan diferidos por la aclaración de alcance (mockup). Para la versión definitiva se requerirán perfiles reales, channel_id de YouTube y autorización de Instagram profesional. No hay credenciales, adaptadores ficticiamente operativos ni tareas programadas activas.

## Animación

Se usa Framer Motion para cortinas y transición compartida de proyectos, Lenis para desplazamiento suave, y transform/opacity para las revelaciones. Se sustituye clip-path por transform/opacity para respetar la restricción de rendimiento del plan. Las transiciones se desactivan con movimiento reducido. La carga de logo se limita a la primera visita de la sesión y dura menos de 1.8 segundos.

## Imágenes y SEO

14 imágenes originales generadas con ImageGen, con 14 miniaturas WebP. El hero sirve además de referencia de Casa Horizonte, y el render dividido de Estudio de luz. Los prompts están en `docs/prompts-imagenes.md`. Los sellos y rótulos son genéricos; no representan documentos aprobados.

SEO preparado por página: metadatos estáticos y dinámicos, Open Graph, canonical, esquema ProfessionalService y sitemap. La propuesta se sirve con `noindex, nofollow` y robots bloqueado intencionalmente. Al aprobar: cambiar dominio, quitar bloqueo e incorporar material real.

## Pendientes del cliente

- [ ] Aprobar dirección visual y contenidos de la propuesta.
- [ ] Entregar precios y rangos reales, con unidad y alcance.
- [ ] Entregar 6–10 proyectos reales: fotos, nombre, ubicación, área y año.
- [ ] Confirmar alcance de entregables de cada servicio.
- [ ] Confirmar días de atención, dominio y logo vectorial.
- [ ] Entregar redes sociales; confirmar permiso para conectar las cuentas.
- [ ] Confirmar reseña, fotografía y carné CFIA si desea mostrarlo.

## Antes del sitio definitivo

- [ ] Implementar adaptadores y workflow de sincronización una vez autorizadas las cuentas.
- [ ] Revisar tokens, renovación y requisitos vigentes de Meta al conectar Instagram.
- [ ] Confirmar cuentas, permisos, días, precios y proyectos antes de habilitar indexación.

## Verificación de la propuesta
- `npm run build`, `npm run lint` y `git diff --check`: correctos.
- Navegador Chromium: 21 páginas y 404 a 375 px y 1440 px, sin desbordamientos horizontales, imágenes rotas detectadas ni excepciones JavaScript.
- Probados: menú y Escape, filtros con estado en URL y recarga, detalle de proyectos, formulario con mensaje preparado (sin enviar), modal social y preguntas expandibles.
- Auditoría de dependencias de producción: 0 vulnerabilidades reportadas tras actualizar React Router.
- Reporte: `docs/qa/resultados.json`. Capturas de revisión locales en `docs/qa/`.

## Vista previa al compartir
Tarjeta de marca de 1200 × 630 px en `public/images/lahl-compartir-v1.jpg`: logo vectorial existente, colores carbón y latón, lema, nombre del arquitecto y fotografía conceptual. Fuente editable en `docs/branding/compartir-lahl.svg`. Se usa en Open Graph y Twitter en las 21 páginas, también en el HTML estático que leen los servicios de mensajería. El nombre versionado permite renovar la imagen sin reutilizar el archivo anterior.
