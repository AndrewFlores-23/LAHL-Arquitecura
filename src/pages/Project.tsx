import { motion, useReducedMotion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { proyectos } from "../data/proyectos";
import { Arrow, Button, PageHeading, Photo } from "../components/UI";
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
        label={`Concepto / ${p.tipo}`}
        title={p.nombre}
        text={p.descripcion}
      />
      <motion.figure
        layoutId={reduced ? undefined : `project-${p.slug}`}
        className="project-main-image container"
      >
        <Photo
          name={p.imagen}
          alt={`Visualización conceptual de ${p.nombre}, no es una obra construida de LAHL`}
          eager
        />
        <figcaption>
          Imagen conceptual generada para la propuesta del sitio.
        </figcaption>
      </motion.figure>
      <section className="container section project-data">
        <div>
          <p className="eyebrow">Ficha de proyecto / Referencia</p>
          <h2>
            Una idea,
            <br />
            muchas posibilidades.
          </h2>
          <p className="intro">
            Este ejemplo muestra cómo se presentarán los proyectos del estudio.
            La información y las fotografías reales se incorporarán después de
            la aprobación.
          </p>
          <Button
            message={`Hola, vi el concepto ${p.nombre} en su sitio y me gustaría conversar sobre mi proyecto.`}
          >
            Hablemos de tu proyecto
          </Button>
        </div>
        <dl className="drawing-titleblock">
          <div className="titleblock-brand">
            LAHL <span>ARQUITECTURA • DISEÑO</span>
          </div>
          {[
            ["Proyecto", p.nombre],
            ["Tipo", p.tipo],
            ["Ubicación", "Por confirmar"],
            ["Área m²", "Por confirmar"],
            ["Año", "Por confirmar"],
            ["Servicios", p.servicios.join(" · ")],
            ["Estado", "Concepto de muestra"],
          ].map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
          <div className="titleblock-bottom">
            LÁMINA 0{index + 1} <span>SIN ESCALA / PROPUESTA</span>
          </div>
        </dl>
      </section>
      <nav className="container next-project" aria-label="Más proyectos">
        <Link to="/portafolio" className="text-link">
          <Arrow direction="left" /> Todo el portafolio
        </Link>
        <Link to={`/portafolio/${next.slug}`}>
          <small>Siguiente concepto</small>
          <h2>
            {next.nombre}
            <Arrow diagonal />
          </h2>
        </Link>
      </nav>
    </>
  );
}
