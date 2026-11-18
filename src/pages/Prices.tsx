import { Link } from "react-router-dom";
import Packages from "../components/Packages";
import { Arrow, PageHeading } from "../components/UI";
import { servicios } from "../data/servicios";
import { precioTexto } from "../data/precios";
export default function Prices() {
  return (
    <>
      <PageHeading
        label="Precios y paquetes"
        title="Planificá tu inversión."
        text="Desde el primer concepto hasta el acompañamiento de obra. Definimos el alcance que tu proyecto necesita."
      />
      <section className="paper section">
        <div className="container">
          <Packages />
        </div>
      </section>
      <section className="container section prices-single">
        <h2>También podemos ayudarte por etapas.</h2>
        <div>
          <div
            className="price-table"
            role="table"
            aria-label="Precios de servicios"
          >
            <div className="price-row price-table-head" role="row">
              <span role="columnheader">Servicio</span>
              <span role="columnheader">Inversión</span>
            </div>
            {servicios.map((s) => (
              <div className="price-row" role="row" key={s.slug}>
                <Link role="cell" to={`/servicios/${s.slug}`}>
                  {s.nombre}
                  <Arrow />
                </Link>
                <span role="cell">{precioTexto(s.precio)}</span>
              </div>
            ))}
          </div>
          <p className="scope-note">
            Montos y alcance por confirmar con el estudio para la versión final.
          </p>
        </div>
      </section>
    </>
  );
}
