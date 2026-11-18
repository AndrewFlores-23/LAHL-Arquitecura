import { Link } from "react-router-dom";
import { servicios } from "../data/servicios";
import { precioTexto } from "../data/precios";
import { Arrow, PageHeading, Photo } from "../components/UI";
export default function Services() {
  return (
    <>
      <PageHeading
        label="Servicios"
        title="Tu proyecto, de principio a fin."
        text="Diseño, documentación y acompañamiento. Elegí el servicio que necesitás o conversemos para definir el alcance."
      />
      <section className="container section services-index">
        {servicios.map((s, i) => (
          <Link
            to={`/servicios/${s.slug}`}
            key={s.slug}
            className="service-row"
          >
            <Photo name={s.imagen} alt="" />
            <div className="service-row-text">
              <span className="service-row-step">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2>{s.nombre}</h2>
              <p>{s.beneficio}</p>
              <ul>
                {s.entregables.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
              <div className="service-row-foot">
                <small>{precioTexto(s.precio)}</small>
                <span className="text-link">
                  Ver el servicio <Arrow />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}
