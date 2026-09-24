# LAHL Arquitectura • Diseño

Propuesta navegable para presentar al cliente. React + Vite + TypeScript + Tailwind CSS, con contenido en español de Costa Rica.

**Vista pública:** https://andrewflores-23.github.io/LAHL-Arquitecura/

## Trabajar localmente

Node.js 24 y npm.

```sh
npm ci
npm run dev
npm run lint
npm run build
npm run preview
```

## Contenido

- `src/data/negocio.ts`: datos reales, teléfono, correo y pendientes.
- `src/data/servicios.ts`: siete servicios y preguntas frecuentes.
- `src/data/precios.ts`: paquetes y montos (`null` hasta confirmarlos).
- `src/data/proyectos.ts`: ocho conceptos, todos con `placeholder: true`.
- `src/data/contenido.ts`: navegación y pasos del proceso.
- `src/data/seo.ts`: metadatos y URL de esta propuesta.
- `public/data/redes.json`: seis publicaciones de muestra (`ejemplo: true`).
- `public/images/`: imágenes conceptuales WebP generadas con IA y variantes ligeras.

## Publicación

Cada push a `main` ejecuta `.github/workflows/pages.yml`: instala, verifica lint, construye y despliega en GitHub Pages. En GitHub, Settings → Pages → Source debe ser **GitHub Actions**.

El build de Actions usa `/LAHL-Arquitecura/` como base. `scripts/static-pages.mjs` genera un documento HTML para cada ruta, además de `404.html` y `sitemap.xml`; los enlaces directos y recargas no dependen de un servidor con rewrites.

## Estado de propuesta

Las imágenes no representan proyectos realizados por LAHL. Los montos, ubicaciones, áreas y años no se inventaron. El formulario abre WhatsApp con los datos escritos y **no envía automáticamente**. El feed es ilustrativo y no hay sincronización social activa. La propuesta lleva `noindex` para no posicionarla como el sitio definitivo.

Consultá `NOTAS.md`, `docs/PLAN-original.md` y `docs/prompts-imagenes.md` para decisiones y próximos pasos.
