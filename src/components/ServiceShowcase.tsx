import { useState } from "react";
import { Link } from "react-router-dom";
import { asset } from "../data/negocio";
import { servicios } from "../data/servicios";
import { precioTexto } from "../data/precios";
import { Arrow } from "./UI";
// Lista de servicios: al pasar por cada fila cambia la fotografía de la derecha.
// En el celular cada fila lleva su propia miniatura.
export default function ServiceShowcase() {
  const [active, setActive] = useState(0);
  return (
    <div className="showcase">
      <ol className="showcase-list">
        {servicios.map((s, i) => (
          <li key={s.slug}>
            <Link
              to={`/servicios/${s.slug}`}
              className={i === active ? "is-active" : ""}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
            >
              <img
                className="showcase-thumb"
                src={asset(`images/${s.imagen.replace(".webp", "-small.webp")}`)}
                alt=""
                width="800"
                height="500"
                loading="lazy"
              />
              <span className="showcase-step">{String(i + 1).padStart(2, "0")}</span>
              <span className="showcase-text">
                <span className="showcase-name">{s.nombre}</span>
                <span className="showcase-benefit">{s.beneficio}</span>
              </span>
              <Arrow />
            </Link>
          </li>
        ))}
      </ol>
      <div className="showcase-stage" aria-hidden="true">
        {servicios.map((s, i) => (
          <img
            key={s.slug}
            className={i === active ? "is-active" : ""}
            src={asset(`images/${s.imagen}`)}
            alt=""
            width="1600"
            height="1000"
            loading="lazy"
          />
        ))}
        <div className="showcase-tag">
          <span>{servicios[active].nombre}</span>
          <span>{precioTexto(servicios[active].precio)}</span>
        </div>
      </div>
    </div>
  );
}
