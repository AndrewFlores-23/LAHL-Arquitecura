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
