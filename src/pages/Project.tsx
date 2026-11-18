import { motion, useReducedMotion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { proyectos } from "../data/proyectos";
import { Arrow, Button, Field, PageHeading, Photo } from "../components/UI";
import NotFound from "./NotFound";
export default function Project() {
  const reduced = useReducedMotion();
  const { slug } = useParams();
  const index = proyectos.findIndex((p) => p.slug === slug);
  const p = proyectos[index];
  if (!p) return <NotFound />;
  const next = proyectos[(index + 1) % proyectos.length];
  return (
    <>
      <PageHeading
        label={`Portafolio / ${p.tipo}`}
        title={p.nombre}
        text={p.descripcion}
      />
      <motion.figure
        layoutId={reduced ? undefined : `project-${p.slug}`}
        className="project-main-image container"
      >
        <Photo
          name={p.imagen}
          alt={`${p.nombre}: ${p.alt}. Fotografía de referencia, no es una obra de LAHL.`}
          eager
        />
        <figcaption>
          Fotografía de referencia (Unsplash). No es una obra del estudio.
        </figcaption>
      </motion.figure>
      <section className="container section project-data">
        <div>
          <h2>Así se presentará cada proyecto.</h2>
          <p className="intro">
            Esta ficha es un ejemplo. Los datos y las fotografías de las obras
            de LAHL se incorporan cuando el estudio las entregue.
          </p>
          <Button
            message={`Hola, vi el ejemplo ${p.nombre} en su sitio y me gustaría conversar sobre mi proyecto.`}
          >
            Hablemos de tu proyecto
          </Button>
        </div>
        <div className="titleblock">
          <div className="titleblock-head">
            <p>LAHL Arquitectura • Diseño</p>
            <p>
              Lámina {String(index + 1).padStart(2, "0")} de{" "}
              {String(proyectos.length).padStart(2, "0")}
            </p>
          </div>
          <dl>
            <Field label="Proyecto">{p.nombre}</Field>
            <Field label="Tipo">{p.tipo}</Field>
            <Field label="Ubicación">Por confirmar</Field>
            <Field label="Área m²">Por confirmar</Field>
            <Field label="Año">Por confirmar</Field>
            <Field label="Servicios">{p.servicios.join(", ")}</Field>
            <Field label="Estado">Ficha de ejemplo</Field>
          </dl>
        </div>
      </section>
      <nav className="container next-project" aria-label="Más proyectos">
        <Link to="/portafolio" className="text-link">
          <Arrow direction="left" /> Todo el portafolio
        </Link>
        <Link to={`/portafolio/${next.slug}`} className="next-project-link">
          <small>Siguiente</small>
          <span>
            {next.nombre}
            <Arrow />
          </span>
        </Link>
      </nav>
    </>
  );
}
