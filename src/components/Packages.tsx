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
            {p.destacado && <p className="package-flag">El más completo</p>}
            <h3>{p.nombre}</h3>
            <p className="package-phrase">{p.frase}</p>
            <ul>
              {p.incluye.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="package-price">{precioTexto(p.precio)}</div>
            <Button
              dark
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
