import { negocio } from "../data/negocio";
import { Button, PageHeading, Photo } from "../components/UI";
export default function Studio() {
  return (
    <>
      <PageHeading
        label="El estudio"
        title="Arquitectura a tu medida."
        text="Un espacio bien pensado empieza por entender a quien lo va a habitar."
      />
      <section className="container section studio-grid">
        <Photo
          name="diseno.webp"
          alt="Mesa de diseño arquitectónico conceptual con maqueta y bocetos"
        />
        <div>
          <p className="eyebrow">LAHL Arquitectura • Diseño</p>
          <h2>{negocio.arquitecto}</h2>
          <p className="intro">{negocio.frase}</p>
          <p className="intro">
            Conversamos sobre tu idea, el lugar y lo que necesitás. A partir de
            ahí, definimos juntos el alcance del proyecto.
          </p>
          <p className="studio-location">Costa Rica</p>
          <Button>Conversemos sobre tu idea</Button>
        </div>
      </section>
      <section className="container studio-note">
        <p>
          Imagen de referencia para la propuesta. La fotografía y reseña del
          arquitecto se incorporarán con su aprobación.
        </p>
      </section>
    </>
  );
}
