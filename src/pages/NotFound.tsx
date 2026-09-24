import { Button, PageHeading } from "../components/UI";
export default function NotFound() {
  return (
    <>
      <PageHeading
        label="404 / Fuera del plano"
        title="Este espacio todavía no existe."
        text="La página que buscás no está disponible. Volvé al inicio para encontrar tu camino."
      />
      <section className="container section">
        <Button to="/">Volver al inicio</Button>
      </section>
    </>
  );
}
