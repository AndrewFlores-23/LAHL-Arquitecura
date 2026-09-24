Plan del sitio web — LAHL Arquitectura • Diseño
Especificación para construir el sitio con Codex en esta carpeta. Todo lo que diga [PENDIENTE] es un dato que falta confirmar con el cliente: no lo inventes.

0. Cómo trabajar (para Codex)
Construye el sitio en esta carpeta, por fases (sección 14). Al terminar cada fase, corre npm run build y npm run lint, arregla los errores y resume lo hecho antes de seguir.
Si algo del plan no se puede hacer tal cual, elige la opción más simple que cumpla la intención y anótalo en NOTAS.md.
No agregues dependencias que no estén justificadas en este plan.
Inicia un repo de Git al empezar (git init) y haz un commit por fase, con mensajes en español.
1. Objetivo
Sitio web de LAHL Arquitectura • Diseño, el estudio del arquitecto Luis Alejandro Herrera en Costa Rica. NO es una landing: es un sitio de varias páginas, con una página dedicada a cada servicio. El objetivo es vender servicios de arquitectura: que el visitante entienda en los primeros segundos quiénes somos, qué hacemos, qué hemos construido, cuánto cuesta y cómo contactarnos, y que termine escribiendo por WhatsApp.

Todo el sitio va en español de Costa Rica (moneda en colones ₡, teléfono +506).

2. Datos reales del negocio (usar exactamente estos)
Marca: LAHL, con el subtítulo "ARQUITECTURA • DISEÑO"
Arquitecto: Luis Alejandro Herrera
Teléfono / WhatsApp: +506 8633-3293 → https://wa.me/50686333293
Correo: arqherreralara@gmail.com
Horario: 9:00 a. m. – 6:00 p. m. [PENDIENTE: confirmar días]
Frase base: "Creamos proyectos arquitectónicos funcionales, estéticos y a la medida, desde el diseño hasta la tramitología."
Redes: Instagram [PENDIENTE], TikTok [PENDIENTE], Facebook [PENDIENTE], YouTube [PENDIENTE]
Guarda estos datos en un solo archivo (src/data/negocio.ts) y úsalos desde ahí en todo el sitio.

3. Servicios (cada uno con su propia página)
Ruta	Servicio	Qué resuelve para el cliente
/servicios/diseno-arquitectonico	Diseño arquitectónico	Convertir la idea y el lote del cliente en una casa o local diseñado a su medida.
/servicios/planos-constructivos	Planos constructivos	Juego completo de planos listos para construir y para tramitar.
/servicios/tramitologia-cfia	Tramitología de planos constructivos	Llevar los planos por la revisión y aprobación (CFIA / plataforma APC).
/servicios/tramites-municipales	Trámites municipales	Permisos de construcción, uso de suelo y demás gestiones ante la municipalidad.
/servicios/modelado-3d-y-renders	Modelado 3D y renders	Ver la obra terminada antes de construir: modelo 3D e imágenes fotorrealistas.
/servicios/inspeccion-de-obras	Inspección de obras	Supervisión técnica durante la construcción para que se haga como está en planos.
/servicios/presupuestos	Presupuestos constructivos	Saber cuánto costará la obra antes de empezar, con desglose de materiales y mano de obra.
No inventes requisitos legales, plazos oficiales ni números de ley: escribe en términos generales y deja [PENDIENTE] donde haga falta un dato técnico del arquitecto.

4. Mapa del sitio
/ Inicio
/servicios Índice de servicios
/servicios/:slug Una página por servicio (las 7 de la tabla)
/portafolio Todos los proyectos, con filtro por tipo (Residencial, Comercial, Renders, Remodelación)
/portafolio/:slug Detalle de proyecto
/precios Precios y paquetes
/estudio Quiénes somos (corto, sin relleno)
/contacto Contacto
404 con el mismo estilo
5. Página de inicio: el orden importa
Lo más importante va arriba. La información detallada de los servicios queda abajo o en sus páginas.

Hero a pantalla completa: imagen de una casa contemporánea tropical al atardecer (sección 9). Encima, en grande: "Diseñamos, planificamos y tramitamos tu proyecto." Debajo: "Estudio de arquitectura de Luis Alejandro Herrera · Costa Rica". Dos botones: "Cotizar por WhatsApp" (principal) y "Ver proyectos" (secundario). Abajo del hero, una franja fina con el teléfono y el correo siempre visibles.
Qué hacemos: los 7 servicios en una cuadrícula compacta. Cada tarjeta lleva imagen, nombre, una línea de beneficio, "Desde ₡[PRECIO]" y una flecha que lleva a su página. Sin párrafos largos.
Portafolio destacado: de 4 a 6 proyectos en una galería asimétrica tipo editorial, con nombre, ubicación y tipo. Botón "Ver todo el portafolio".
Precios: 3 paquetes (sección 7) y la nota "Cada proyecto se cotiza según área y alcance". Botón para cotizar.
Lo más reciente en redes: últimos videos y publicaciones (sección 8).
Cómo trabajamos: 4 pasos cortos (Reunión y visita al lote → Diseño y renders → Planos y trámites → Construcción e inspección).
Contacto final: WhatsApp, teléfono, correo, horario y un formulario corto (nombre, teléfono, servicio, tipo de proyecto, ubicación, mensaje). Al enviarlo, abre WhatsApp con el mensaje ya escrito con esos datos. No hace falta servidor.
6. Plantilla de cada página de servicio
El mismo orden en las 7:

Hero con la imagen del servicio, su nombre y una frase de beneficio.
Qué recibes: entregables concretos. Por ejemplo, en Planos: planta arquitectónica, fachadas, cortes y planos estructurales, eléctricos y mecánicos [PENDIENTE: confirmar alcance].
Para quién es: 2 o 3 situaciones reales ("Tienes el lote y quieres construir tu casa", "Necesitas el permiso municipal para ampliar"...).
Proceso en pasos numerados.
Precio: "Desde ₡[PRECIO]" o "₡[PRECIO] por m²", y qué incluye.
Proyectos relacionados del portafolio.
Preguntas frecuentes: 4 como máximo, cortas.
Botón final de WhatsApp con mensaje por servicio, por ejemplo: Hola, me interesa el servicio de Planos constructivos. ¿Me pueden dar información?
Al pie, enlaces al servicio anterior y al siguiente, y sugerencias de servicios que se combinan (Diseño → Planos → Tramitología → Inspección).
Una sola plantilla de página alimentada por src/data/servicios.ts, no 7 componentes copiados.

7. Precios (/precios y bloque en inicio)
Tres paquetes, con precio visible [PENDIENTE: montos reales]:

Anteproyecto: diseño arquitectónico + modelado 3D + renders.
Proyecto completo (destacado): diseño + planos constructivos + tramitología CFIA + trámites municipales.
Acompañamiento de obra: presupuesto + inspección de obras.
Debajo, una tabla con el precio "desde" de cada servicio suelto. Todos los montos en src/data/precios.ts.

8. Redes que se actualizan solas (gratis, sin servidor propio)
El cliente quiere que sus videos y publicaciones más recientes aparezcan solos en la web.

Cómo se actualiza: un workflow de GitHub Actions (.github/workflows/redes.yml) corre cada 3 horas y también a mano (workflow_dispatch). Ejecuta scripts/sync-redes.mjs, que descarga las últimas publicaciones y escribe public/data/redes.json. Si el archivo cambió, hace commit y el hosting publica el sitio de nuevo solo.
Fuentes, con un adaptador por red en scripts/redes/:
YouTube: feed RSS público del canal (https://www.youtube.com/feeds/videos.xml?channel_id=...). No necesita llave.
Instagram: Instagram Graph API (cuenta profesional), con el token en los secrets de GitHub (IG_TOKEN), nunca en el código. El token dura 60 días: el script debe intentar renovarlo y fallar con un mensaje claro si ya venció.
TikTok / Facebook: deja el adaptador listo pero apagado. Mientras tanto, el sitio muestra un enlace al perfil.
Cada adaptador que falle se salta sin romper a los demás, y el JSON anterior se conserva.
Formato de redes.json: [{ red, url, miniatura, titulo, fecha, tipo }], ordenado por fecha y con 12 elementos como máximo.
Componente FeedRedes: lee /data/redes.json y muestra 6–8 elementos en formato vertical tipo reel, con miniatura, ícono de la red, fecha y enlace. Al tocar un video de YouTube se abre en un modal; los demás abren la red.
Mientras no haya cuentas conectadas, usa un redes.json de ejemplo con ejemplo: true. Si el archivo está vacío o falla, la sección se oculta.
Documenta en NOTAS.md, paso a paso, cómo sacar el channel_id de YouTube y el token de Instagram.
9. Imágenes
Fotorrealistas de arquitectura, coherentes entre sí (misma luz cálida, mismo estilo), con clima y vegetación de Costa Rica. Nada de gente posando ni oficinas genéricas de banco de imágenes.

Si tienes herramienta para generar imágenes, genéralas y guárdalas en public/images/ en WebP. Si no, crea marcadores de posición con el tamaño correcto (fondo oscuro con la cuadrícula de plano y el nombre de la imagen) y deja todos los prompts en docs/prompts-imagenes.md para generarlas aparte.
Hero inicio (hero.webp, 2400×1350): casa contemporánea de concreto, madera y vidrio al atardecer, piscina infinita en primer plano, interiores con luz cálida encendida, vegetación tropical y montañas al fondo.
Diseño arquitectónico: mesa de trabajo con bocetos a mano, maqueta de madera blanca y planos, luz natural lateral.
Planos constructivos: plano técnico en detalle, líneas finas y cotas, vista cenital.
Tramitología CFIA: carpeta de planos sellados y firmados sobre un escritorio, con el sello enfocado.
Trámites municipales: casa en construcción con el rótulo de permiso de construcción al frente.
Modelado 3D y renders: la misma casa del hero partida en dos: mitad modelo de líneas (wireframe), mitad render realista.
Inspección de obras: obra gris con columnas y formaletas, casco blanco y planos sobre una mesa en el sitio.
Presupuestos: planos con escalímetro, calculadora y muestras de materiales (concreto, madera, cerámica).
Portafolio: 8 proyectos de ejemplo (casas de playa, casa de montaña, local comercial, remodelación, interiores), marcados en los datos con placeholder: true para reemplazarlos después por las fotos reales.
Todas con loading="lazy" menos el hero, y con texto alternativo descriptivo.
10. Dirección visual
Debe verse como un estudio de arquitectura de alto nivel, no como una plantilla.

Base: tema oscuro. Negro carbón #0E0E0E, superficies #161616, blanco hueso #F2EFEA para el texto, gris #8A8A85 para el texto secundario. Colores como variables CSS en un solo lugar.
Un solo color de acento para acciones y detalles: latón cálido #C9A46C. Ningún otro color decorativo.
Tipografía: títulos en una sans geométrica fina, como el logo ("Jost" en peso 300–500), y etiquetas en mayúsculas con espaciado ancho (0.2–0.3em). Cuerpo en "Inter". Instálalas con @fontsource para que no dependan de Google. Precios en números grandes y alineados (tabular-nums).
Logo: recrea el logotipo en SVG: letras L-A-H-L de trazo fino dentro de un marco rectangular abierto, con "ARQUITECTURA • DISEÑO" debajo, cortando la línea inferior del marco. Blanco sobre fondo oscuro. Si el cliente entrega el vector, se reemplaza.
Detalles del oficio (con moderación):
Cuadrícula muy tenue tipo papel milimetrado en el fondo de algunas secciones.
Líneas de cota (línea con marcas en los extremos) como separadores y bajo los títulos.
Secciones numeradas como láminas de plano: "01 / SERVICIOS", "02 / PORTAFOLIO".
En el detalle de proyecto, una ficha con forma de cajetín de plano: Proyecto, Ubicación, Área m², Año, Servicios.
Bordes rectos o casi rectos (radio de 0 a 4px). Nada de tarjetas redondeadas con sombra genérica.
Mucho espacio negativo, imágenes grandes y texto corto.
11. Animaciones (fluidas, con intención, nunca lentas)
Framer Motion para componentes y transiciones, y Lenis para el scroll suave.

Pantalla de carga: el logo LAHL se dibuja trazo por trazo (stroke-dashoffset del SVG), luego aparece "ARQUITECTURA • DISEÑO" y la pantalla se abre como cortina hacia arriba, revelando el hero. Dura 1.8 s como máximo y solo sale en la primera visita de la sesión (sessionStorage, envuelto en try/catch).
Cambio de página: un panel negro barre la pantalla mostrando el nombre de la página destino en letras espaciadas, como un cambio de lámina. Entre 500 y 700 ms.
Menú: en escritorio, la barra superior es transparente y se vuelve sólida con desenfoque al hacer scroll; se oculta al bajar y reaparece al subir. El botón hamburguesa se convierte en X y abre un menú a pantalla completa con los enlaces numerados (01, 02…), que entran escalonados; al pasar el mouse sobre un servicio se ve su imagen de fondo. En móvil, el mismo menú a pantalla completa.
Botones: relleno que barre de izquierda a derecha con el acento al pasar el mouse, flecha que se desliza y una pequeña reducción de tamaño al presionar. Los botones principales tienen un efecto magnético sutil en escritorio.
Scroll: títulos que aparecen línea por línea, imágenes que se revelan con clip-path como cortina, parallax leve en el hero y en las imágenes grandes, y líneas de cota que se dibujan al entrar en pantalla.
Portafolio: al pasar el mouse, la imagen hace un zoom lento y aparece la ficha del proyecto. Al abrir un proyecto, la imagen pasa con una transición compartida a la página de detalle (layoutId).
Carga de contenido: esqueletos con brillo suave para las imágenes y el feed de redes; nunca espacios en blanco.
Respeta prefers-reduced-motion: sin parallax ni transiciones largas.
Anima solo transform y opacity, para que se mantengan los 60 fps en el celular.
12. Elementos fijos
Botón flotante de WhatsApp abajo a la derecha, discreto y con el color de acento. Aparece después de pasar el hero.
Encabezado: logo a la izquierda; a la derecha, Servicios, Portafolio, Precios, Estudio, Contacto y el botón "Cotizar".
Pie: logo, frase del estudio, teléfono, correo, horario, redes, lista de servicios y "© LAHL Arquitectura • Diseño".
13. Reglas: nada de relleno
Prohibido: lorem ipsum, testimonios inventados, estadísticas falsas ("+500 proyectos", "20 años de experiencia"), la típica sección "¿Por qué elegirnos?" con 6 íconos, logos de clientes falsos y un blog vacío.
Cada sección debe ayudar a vender o a contactar. Si no aporta, no va.
Si falta un dato real, deja [PENDIENTE] en los datos; no lo inventes.
Textos cortos y directos, sin frases de marketing vacías.
14. Técnica y fases
Stack: React + Vite + TypeScript + Tailwind CSS + React Router + Framer Motion + Lenis. Sitio estático, sin backend. Todo el contenido (negocio, servicios, proyectos, precios, preguntas frecuentes) va en src/data/, para editarlo sin tocar componentes.

Hosting (gratis): pensado para Vercel o Netlify conectado al repo de GitHub. Incluye la configuración para que las rutas de React Router funcionen al recargar (vercel.json con rewrites o public/_redirects).

Calidad:

Responsive pensado primero para el celular (375px), porque la mayoría llegará desde WhatsApp e Instagram.
SEO: título y descripción por página (react-helmet-async), Open Graph con imagen, datos estructurados ProfessionalService, sitemap.xml y robots.txt.
Rendimiento: imágenes WebP con tamaño fijo (sin saltos de diseño), rutas con carga diferida y fuentes con font-display: swap. Objetivo: Lighthouse 90 o más en móvil.
Accesibilidad: contraste AA, navegación con teclado, foco visible con el acento y menú con aria-expanded.
Fases (un commit por fase):

Base: proyecto, estilos, fuentes, logo SVG, encabezado, menú, pie, rutas y archivos de datos.
Inicio completo con todas sus secciones.
Plantilla de servicio y las 7 páginas, índice de servicios, precios, estudio y contacto.
Portafolio con filtro y página de detalle.
Animaciones: pantalla de carga, cambio de página, scroll y botones.
Feed de redes: script, workflow de GitHub Actions, JSON de ejemplo y componente.
Imágenes (generadas o marcadores + docs/prompts-imagenes.md), SEO y revisión final en móvil y escritorio.
15. Lo que hay que pedirle al cliente
sin completar
Usuarios de Instagram, TikTok, Facebook y YouTube.
sin completar
Instagram como cuenta profesional (Empresa o Creador) y acceso a Meta para generar el token.
sin completar
Precios reales o rangos por servicio (¿por m² o monto fijo?).
sin completar
Fotos o renders de 6 a 10 proyectos reales, con nombre, ubicación, m² y año.
sin completar
Días de atención exactos.
sin completar
Número de carné CFIA (si lo quiere mostrar; da confianza).
sin completar
Logo en vector (SVG, AI o PDF), si lo tiene.
sin completar
Dominio que quiere usar.