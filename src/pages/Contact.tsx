import ContactForm from "../components/ContactForm";
import { PageHeading } from "../components/UI";
export default function Contact() {
  return (
    <>
      <PageHeading label="Contacto" title="Hagamos espacio para tu idea." />
      <section className="container section">
        <ContactForm />
      </section>
    </>
  );
}
