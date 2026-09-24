import { paquetes, precioTexto } from "../data/precios";
import { Button } from "./UI";
export default function Packages() {
  return (
    <>
      <div className="packages">
        {paquetes.map((p) => (
          <article
            key={p.nombre}
            className={`package ${p.destacado ? "featured-package" : ""}`}
          >
            <div className="package-top">
              <span>{p.numero}</span>
              {p.destacado && <span>Una solución integral</span>}
            </div>
            <h3>{p.nombre}</h3>
            <p>{p.frase}</p>
            <div className="package-price">{precioTexto(p.precio)}</div>
            <ul>
              {p.incluye.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Button
              secondary={!p.destacado}
              message={`Hola, me interesa el paquete ${p.nombre}. ¿Podemos conversar sobre mi proyecto?`}
            >
              Consultar paquete
            </Button>
          </article>
        ))}
      </div>
      <p className="pricing-note">
        Cada proyecto se cotiza según área y alcance.
      </p>
    </>
  );
}
