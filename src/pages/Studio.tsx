import { negocio } from "../data/negocio";
import { Button, Field, PageHeading, Photo } from "../components/UI";
export default function Studio() {
  return (
    <>
      <PageHeading
        label="El estudio"
        title="Arquitectura a tu medida."
        text="Un espacio bien pensado empieza por entender a quien lo va a habitar."
      />
      <section className="container section studio-grid">
        <figure>
          <Photo
            name="estudio.webp"
            alt="Mesa de dibujo con planos y una lámpara de brazo"
          />
          <figcaption>
            Fotografía de referencia. La foto y la reseña del arquitecto se
            incorporan con su aprobación.
          </figcaption>
        </figure>
        <div>
          <h2>{negocio.arquitecto}</h2>
          <p className="intro">{negocio.frase}</p>
          <p className="intro">
            Conversamos sobre tu idea, el lugar y lo que necesitás. A partir de
            ahí, definimos juntos el alcance del proyecto.
          </p>
          <dl className="studio-data">
            <Field label="Estudio">LAHL Arquitectura • Diseño</Field>
            <Field label="Ubicación">Costa Rica</Field>
            <Field label="Horario">{negocio.horario}</Field>
          </dl>
          <Button>Conversemos sobre tu idea</Button>
        </div>
      </section>
    </>
  );
}
