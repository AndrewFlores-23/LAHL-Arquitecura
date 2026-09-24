import { Link } from "react-router-dom";
import { asset, negocio } from "../data/negocio";
import { servicios } from "../data/servicios";
import { proyectos } from "../data/proyectos";
import { pasos } from "../data/contenido";
import { precioTexto } from "../data/precios";
import { Arrow, Button, Photo, SectionTitle } from "../components/UI";
import ContactForm from "../components/ContactForm";
import Packages from "../components/Packages";
import FeedRedes from "../components/FeedRedes";
import ProjectCard from "../components/ProjectCard";
export default function Home() {
  return (
    <>
      <section className="hero">
        <img
          className="hero-image"
          src={asset("images/hero.webp")}
          alt="Visualización conceptual de una casa tropical de concreto, madera y vidrio al atardecer"
          width="2400"
          height="1350"
          fetchPriority="high"
        />
        <div className="hero-shade" />
        <div className="hero-content container">
          <p className="eyebrow">Arquitectura que nace de tu forma de vivir</p>
          <h1>
            Diseñamos, planificamos
            <br className="desktop-break" /> y tramitamos
            <br />
            tu proyecto.
          </h1>
          <div className="hero-bottom">
            <div>
              <p>
                Estudio de arquitectura de {negocio.arquitecto} · Costa Rica
              </p>
              <div className="hero-actions">
                <Button>Cotizar por WhatsApp</Button>
                <Button to="/portafolio" secondary>
                  Ver proyectos
                </Button>
              </div>
            </div>
            <div className="hero-reference">
              <span>01 — VISIÓN LAHL</span>
              <p>El paisaje como punto de partida.</p>
              <small>Imagen conceptual</small>
            </div>
          </div>
        </div>
        <a
          href="#servicios"
          className="hero-scroll"
          aria-label="Descubrir servicios"
        >
          Descubrí más <span>↓</span>
        </a>
      </section>
      <div className="contact-strip">
        <div className="container">
          <span>Diseño con intención. Arquitectura a tu medida.</span>
          <a href={`tel:${negocio.tel}`}>{negocio.telefono}</a>
          <a href={`mailto:${negocio.correo}`}>{negocio.correo}</a>
        </div>
      </div>
      <section className="container section" id="servicios">
        <SectionTitle
          number="01"
          label="Servicios"
          title="De la primera idea al espacio que habitás."
        >
          <Link className="text-link" to="/servicios">
            Todos los servicios <Arrow diagonal />
          </Link>
        </SectionTitle>
        <div className="services-grid">
          {servicios.map((s, i) => (
            <Link
              className="service-card"
              to={`/servicios/${s.slug}`}
              key={s.slug}
            >
              <Photo name={s.imagen} alt={`Referencia visual de ${s.nombre}`} />
              <div className="service-content">
                <div className="service-title">
                  <span>0{i + 1}</span>
                  <h3>{s.nombre}</h3>
                  <Arrow diagonal />
                </div>
                <p>{s.beneficio}</p>
                <small>{precioTexto(s.precio)}</small>
              </div>
            </Link>
          ))}
          <Link to="/contacto" className="service-question">
            <p className="eyebrow">Tu punto de partida</p>
            <h3>
              ¿Tenés una idea
              <br />
              en mente?
            </h3>
            <p>
              Encontramos juntos
              <br />
              el siguiente paso.
            </p>
            <span className="text-link">
              Conversemos <Arrow diagonal />
            </span>
          </Link>
        </div>
      </section>
      <section className="portfolio-section section blueprint">
        <div className="container">
          <SectionTitle
            number="02"
            label="Portafolio conceptual"
            title="Espacios que imaginamos."
          >
            <Link className="text-link" to="/portafolio">
              Ver todo el portafolio <Arrow diagonal />
            </Link>
          </SectionTitle>
          <p className="portfolio-disclaimer">
            Una muestra de la dirección visual. Estos conceptos se reemplazarán
            por los proyectos reales del estudio.
          </p>
          <div className="editorial-grid">
            {proyectos.slice(0, 4).map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>
      <section className="container section">
        <SectionTitle
          number="03"
          label="Inversión"
          title="Un alcance claro. Un buen comienzo."
        >
          <p className="heading-note">
            Elegí el acompañamiento
            <br />
            que necesita tu proyecto.
          </p>
        </SectionTitle>
        <Packages />
      </section>
      <FeedRedes />
      <section className="process-section section blueprint">
        <div className="container">
          <SectionTitle
            number="05"
            label="Cómo trabajamos"
            title="Paso a paso, con vos."
          />
          <div className="process-grid">
            {pasos.map(([title, text], i) => (
              <article key={title}>
                <span className="process-number">0{i + 1}</span>
                <div className="dimension" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="container section" id="contacto">
        <ContactForm />
      </section>
    </>
  );
}
