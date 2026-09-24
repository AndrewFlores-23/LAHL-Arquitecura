import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { pageMeta, siteUrl, shareImage } from "../data/seo";
import { negocio } from "../data/negocio";
export default function SEO() {
  const { pathname } = useLocation();
  const meta = pageMeta(pathname);
  const title = `${meta.title} | LAHL Arquitectura • Diseño`;
  const url = `${siteUrl}${pathname}`;
  return (
    <Helmet>
      <html lang="es-CR" />
      <title>{title}</title>
      <meta name="description" content={meta.description} />
      <meta name="robots" content="noindex, nofollow" />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="es_CR" />
      <meta
        property="og:site_name"
        content="LAHL Arquitectura • Diseño — Propuesta"
      />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${siteUrl}/images/${shareImage.archivo}`} />
      <meta property="og:image:width" content={String(shareImage.ancho)} />
      <meta property="og:image:height" content={String(shareImage.alto)} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:alt" content={shareImage.alt} />
      <meta name="twitter:image" content={`${siteUrl}/images/${shareImage.archivo}`} />
      <meta name="twitter:image:alt" content={shareImage.alt} />
      <meta name="twitter:card" content="summary_large_image" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: `${negocio.marca} ${negocio.subtitulo}`,
          description: negocio.frase,
          telephone: negocio.tel,
          email: negocio.correo,
          areaServed: { "@type": "Country", name: "Costa Rica" },
          image: `${siteUrl}/images/hero.webp`,
        })}
      </script>
    </Helmet>
  );
}
