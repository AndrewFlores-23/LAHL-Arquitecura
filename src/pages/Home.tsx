import { Link } from "react-router-dom";
import { asset, negocio } from "../data/negocio";
import { proyectos } from "../data/proyectos";
import { pasos } from "../data/contenido";
import { Arrow, Button, Field, SectionTitle } from "../components/UI";
import ContactForm from "../components/ContactForm";
import Packages from "../components/Packages";
import FeedRedes from "../components/FeedRedes";
import ProjectCard from "../components/ProjectCard";
import ServiceShowcase from "../components/ServiceShowcase";
import Logo from "../components/Logo";
const titular = ["Diseñamos,", "planificamos", "y tramitamos", "tu proyecto."];
export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-frame">
          <picture>
            <source
              media="(max-width: 600px)"
              srcSet={asset("images/hero-mobile.webp")}
            />
            <img
              className="hero-image"
              src={asset("images/hero.webp")}
              alt="Casa contemporánea de dos plantas con aleros de madera, jardín y piscina"
              width="2200"
              height="1240"
              {...{ fetchpriority: "high" }}
            />
          </picture>
          <div className="hero-shade" />
          <h1 aria-label={titular.join(" ")}>
            {titular.map((linea, i) => (
              <span className="hero-line" key={linea} aria-hidden="true">
                <span style={{ ["--i" as string]: i }}>{linea}</span>
              </span>
            ))}
          </h1>
          <p className="hero-credit">Fotografía de referencia</p>
        </div>
        <aside className="titleblock hero-titleblock" aria-label="Datos del estudio">
          <div className="titleblock-head">
            <Logo />
            <p>
              Estudio de arquitectura
              <br />
              de {negocio.arquitecto}
            </p>
          </div>
          <dl>
            <Field label="Proyecto">Tu casa, tu local o tu remodelación</Field>
            <Field label="Alcance">Del diseño a los permisos y la obra</Field>
            <Field label="Ubicación">Costa Rica</Field>
            <Field label="Escala">A tu medida</Field>
          </dl>
          <div className="titleblock-actions">
            <Button>Cotizar por WhatsApp</Button>
            <Link className="text-link" to="/portafolio">
              Ver proyectos <Arrow />
            </Link>
          </div>
        </aside>
      </section>

      <section className="container section" id="servicios">
        <SectionTitle
          title="De la primera idea al espacio que habitás."
          text="Siete servicios que podés contratar juntos o por etapas, en el orden en que avanza un proyecto."
        >
          <Link className="text-link" to="/servicios">
            Ver todos los servicios <Arrow />
          </Link>
        </SectionTitle>
        <ServiceShowcase />
      </section>

      <section className="container section portfolio-section">
        <SectionTitle
          title="Espacios para imaginar el tuyo."
          text="Fotografías de referencia que muestran cómo se presentará el portafolio. Se reemplazan por las obras del estudio."
        >
          <Link className="text-link" to="/portafolio">
            Ver todo el portafolio <Arrow />
          </Link>
        </SectionTitle>
        <div className="editorial-grid">
          {proyectos.slice(0, 5).map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      <section className="paper section">
        <div className="container">
          <SectionTitle
            title="Un alcance claro desde el inicio."
            text="Tres formas de trabajar juntos, según la etapa en la que esté tu proyecto."
          />
          <Packages />
        </div>
      </section>

      <FeedRedes />

      <section className="container section process-section">
        <SectionTitle title="Paso a paso, con vos." />
        <ol className="process-grid">
          {pasos.map(([title, text], i) => (
            <li key={title}>
              <span className="process-number">{i + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="container section" id="contacto">
        <ContactForm />
      </section>
    </>
  );
}
