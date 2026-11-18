import { Link, useParams } from "react-router-dom";
import { servicios } from "../data/servicios";
import { proyectos } from "../data/proyectos";
import { precioTexto } from "../data/precios";
import { Arrow, Button, Field, Photo, SectionTitle } from "../components/UI";
import ProjectCard from "../components/ProjectCard";
import NotFound from "./NotFound";
export default function Service() {
  const { slug } = useParams();
  const index = servicios.findIndex((s) => s.slug === slug);
  const s = servicios[index];
  if (!s) return <NotFound />;
  const previous = servicios[(index + servicios.length - 1) % servicios.length];
  const next = servicios[(index + 1) % servicios.length];
  const mensaje = `Hola, me interesa el servicio de ${s.nombre}. ¿Me pueden dar información?`;
  return (
    <>
      <section className="service-hero container">
        <div className="service-hero-text">
          <p className="crumb">
            <Link to="/servicios">Servicios</Link>
            <span aria-hidden="true">/</span>
            {String(index + 1).padStart(2, "0")} de{" "}
            {String(servicios.length).padStart(2, "0")}
          </p>
          <h1>{s.nombre}</h1>
          <p className="intro">{s.beneficio}</p>
          <Button message={mensaje}>Consultar este servicio</Button>
        </div>
        <Photo name={s.imagen} alt="" eager />
      </section>

      <section className="container section service-info">
        <h2>Qué recibís</h2>
        <div>
          <ul className="deliverables">
            {s.entregables.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="scope-note">
            Alcance propuesto, sujeto a confirmación con el arquitecto.
          </p>
        </div>
      </section>

      <section className="container service-info service-for">
        <h2>Para quién es</h2>
        <div className="situations">
          {s.situaciones.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      <section className="container section">
        <SectionTitle title="Así lo desarrollamos." />
        <ol className="process-grid process-three">
          {s.proceso.map((item, i) => (
            <li key={item}>
              <span className="process-number">{i + 1}</span>
              <h3>{item}</h3>
            </li>
          ))}
        </ol>
      </section>

      <section className="container">
        <div className="titleblock service-price">
          <dl>
            <Field label="Servicio">{s.nombre}</Field>
            <Field label="Inversión">{precioTexto(s.precio)}</Field>
            <Field label="Se cotiza según">Área, ubicación y complejidad</Field>
          </dl>
          <Button message={`Hola, quisiera una cotización de ${s.nombre}.`}>
            Solicitar cotización
          </Button>
        </div>
      </section>

      <section className="container section">
        <SectionTitle
          title="Ideas para tu proyecto."
          text="Fotografías de referencia, no son obras del estudio."
        />
        <div className="related-grid">
          {proyectos.slice(index % 3, (index % 3) + 2).map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      <section className="container section faq-section">
        <h2>Antes de comenzar</h2>
        <div className="faq-list">
          {s.preguntas.map((f) => (
            <details key={f.pregunta}>
              <summary>
                {f.pregunta}
                <span aria-hidden="true" />
              </summary>
              <p>{f.respuesta}</p>
            </details>
          ))}
        </div>
      </section>

      <nav
        className="container service-pagination"
        aria-label="Otros servicios"
      >
        <Link to={`/servicios/${previous.slug}`}>
          <small>
            <Arrow direction="left" /> Servicio anterior
          </small>
          <span>{previous.nombre}</span>
        </Link>
        <Link to={`/servicios/${next.slug}`}>
          <small>
            Siguiente servicio <Arrow />
          </small>
          <span>{next.nombre}</span>
        </Link>
      </nav>
    </>
  );
}
