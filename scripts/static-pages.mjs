import { readFile, writeFile, mkdir } from "node:fs/promises";
// Single-source content, transpiled by Vite's SSR loader for route metadata.
import { createServer } from "vite";
const server = await createServer({
  server: { middlewareMode: true, hmr: false, ws: false },
});
try {
  const { servicios } = await server.ssrLoadModule("/src/data/servicios.ts");
  const { proyectos } = await server.ssrLoadModule("/src/data/proyectos.ts");
  const { pageMeta, siteUrl, shareImage } = await server.ssrLoadModule("/src/data/seo.ts");
  const routes = [
    "/",
    "/servicios",
    "/portafolio",
    "/precios",
    "/estudio",
    "/contacto",
    ...servicios.map((s) => `/servicios/${s.slug}`),
    ...proyectos.map((p) => `/portafolio/${p.slug}`),
  ];
  const template = await readFile("dist/index.html", "utf8");
  const escape = (s) =>
    s
      .replaceAll("&", "&amp;")
      .replaceAll('"', "&quot;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;");
  for (const route of routes) {
    const meta = pageMeta(route);
    const title = escape(`${meta.title} | LAHL Arquitectura • Diseño`);
    let html = template
      .replace(
        /<title[^>]*>.*?<\/title>/,
        `<title data-rh="true">${title}</title>`,
      )
      .replace(
        /(<meta\s+name="description"\s+content=")[^"]*/,
        `$1${escape(meta.description)}`,
      )
      .replace(/(<meta\s+property="og:title"\s+content=")[^"]*/, `$1${title}`)
      .replace(
        /(<meta\s+property="og:description"\s+content=")[^"]*/,
        `$1${escape(meta.description)}`,
      )
      .replace(
        /(<meta\s+property="og:image"\s+content=")[^"]*/,
        `$1${siteUrl}/images/${shareImage.archivo}`,
      );
    html = html.replace(
      "</head>",
      `<link data-rh="true" rel="canonical" href="${siteUrl}${route}"/><meta data-rh="true" property="og:url" content="${siteUrl}${route}"/></head>`,
    );
    if (route !== "/")
      html = html.replace(/<link[^>]*rel="preload"[^>]*>/g, "");
    const directory = route === "/" ? "dist" : `dist${route}`;
    await mkdir(directory, { recursive: true });
    await writeFile(`${directory}/index.html`, html);
  }
  await writeFile("dist/404.html", template);
  await writeFile("dist/.nojekyll", "");
  await writeFile(
    "dist/sitemap.xml",
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes.map((route) => `<url><loc>${siteUrl}${route}</loc></url>`).join("")}</urlset>`,
  );
  console.log(
    `Páginas estáticas: ${routes.length}. Enlaces directos listos para GitHub Pages.`,
  );
} finally {
  await server.close();
}
