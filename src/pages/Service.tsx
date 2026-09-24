import { Link, useParams } from "react-router-dom";
import { servicios } from "../data/servicios";
import { proyectos } from "../data/proyectos";
import { precioTexto } from "../data/precios";
import { Arrow, Button, Photo, SectionTitle } from "../components/UI";
import ProjectCard from "../components/ProjectCard";
import NotFound from "./NotFound";
export default function Service() {
  const { slug } = useParams();
  const index = servicios.findIndex((s) => s.slug === slug);
  const s = servicios[index];
  if (!s) return <NotFound />;
  const previous = servicios[(index + servicios.length - 1) % servicios.length];
  const next = servicios[(index + 1) % servicios.length];
  return (
    <>
      <section className="service-hero">
        <Photo name={s.imagen} alt={`Imagen conceptual de ${s.nombre}`} eager />
        <div className="service-hero-shade" />
        <div className="container">
          <Link className="eyebrow" to="/servicios">
            Servicios / 0{index + 1}
          </Link>
          <h1>{s.nombre}</h1>
          <p>{s.beneficio}</p>
          <Button
            message={`Hola, me interesa el servicio de ${s.nombre}. ¿Me pueden dar información?`}
          >
            Consultar este servicio
          </Button>
        </div>
      </section>
      <section className="container section service-info">
        <div>
          <p className="eyebrow">01 / Qué recibís</p>
          <h2>
            Claridad en
            <br />
            cada entrega.
          </h2>
        </div>
        <div>
          <ul className="deliverables">
            {s.entregables.map((item, i) => (
              <li key={item}>
                <span>0{i + 1}</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="scope-note">
            Alcance propuesto, sujeto a confirmación con el arquitecto.
          </p>
        </div>
      </section>
      <section className="surface section">
        <div className="container service-info">
          <div>
            <p className="eyebrow">02 / Para quién es</p>
            <h2>
              ¿Es lo que
              <br />
              necesitás?
            </h2>
          </div>
          <div className="situations">
            {s.situaciones.map((item) => (
              <p key={item}>
                <Arrow diagonal />
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>
      <section className="container section">
        <SectionTitle
          number="03"
          label="Proceso"
          title="Así lo desarrollamos."
        />
        <div className="service-process">
          {s.proceso.map((item, i) => (
            <article key={item}>
              <span className="process-number">0{i + 1}</span>
              <div className="dimension" />
              <h3>{item}</h3>
            </article>
          ))}
        </div>
      </section>
      <section className="container service-price">
        <div>
          <p className="eyebrow">04 / Inversión</p>
          <h2>{precioTexto(s.precio)}</h2>
          <p>
            El alcance y las entregas se acuerdan en la cotización.
            <br />
            Cada proyecto se valora según área y complejidad.
          </p>
        </div>
        <Button message={`Hola, quisiera una cotización de ${s.nombre}.`}>
          Solicitar cotización
        </Button>
      </section>
      <section className="container section">
        <SectionTitle
          number="05"
          label="Referencias conceptuales"
          title="Ideas para tu proyecto."
        />
        <div className="related-grid">
          {proyectos.slice(index % 3, (index % 3) + 2).map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>
      <section className="container section faq-section">
        <div>
          <p className="eyebrow">06 / Preguntas frecuentes</p>
          <h2>
            Antes de
            <br />
            comenzar.
          </h2>
        </div>
        <div className="faq-list">
          {s.preguntas.map((f) => (
            <details key={f.pregunta}>
              <summary>
                {f.pregunta}
                <span>+</span>
              </summary>
              <p>{f.respuesta}</p>
            </details>
          ))}
        </div>
      </section>
      <section className="section surface">
        <div className="container final-cta">
          <p className="eyebrow">Conversemos sobre tu proyecto</p>
          <h2>
            El siguiente paso
            <br />
            empieza acá.
          </h2>
          <Button
            message={`Hola, me interesa el servicio de ${s.nombre}. ¿Me pueden dar información?`}
          >
            Escribir por WhatsApp
          </Button>
        </div>
      </section>
      <nav
        className="container service-pagination"
        aria-label="Otros servicios"
      >
        <Link to={`/servicios/${previous.slug}`}>
          <small>← Servicio anterior</small>
          <span>{previous.nombre}</span>
        </Link>
        <Link to={`/servicios/${next.slug}`}>
          <small>Siguiente servicio →</small>
          <span>{next.nombre}</span>
        </Link>
      </nav>
      <div className="container complementary">
        <p className="eyebrow">Servicios que se complementan</p>
        {servicios
          .filter((_, i) => [0, 1, 2, 5].includes(i) && i !== index)
          .map((item) => (
            <Link key={item.slug} to={`/servicios/${item.slug}`}>
              {item.nombre} <Arrow diagonal />
            </Link>
          ))}
      </div>
    </>
  );
}
