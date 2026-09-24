import { useState } from "react";
import type { FormEvent } from "react";
import { negocio, whatsapp } from "../data/negocio";
import { servicios } from "../data/servicios";
import { Arrow } from "./UI";
export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [link, setLink] = useState("");
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const text = `Hola, soy ${data.get("nombre")}. Me gustaría conversar sobre mi proyecto.\nTeléfono: ${data.get("telefono")}\nServicio: ${data.get("servicio")}\nTipo de proyecto: ${data.get("tipo")}\nUbicación: ${data.get("ubicacion")}\nMensaje: ${data.get("mensaje")}`;
    const url = whatsapp(text);
    setLink(url);
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  }
  return (
    <div className="contact-grid">
      <div>
        <p className="eyebrow">Empecemos una conversación</p>
        <h2>
          Contanos
          <br />
          tu idea.
        </h2>
        <p className="intro">
          Cada proyecto empieza por escucharte.
          <br />
          Hablemos del espacio que imaginás.
        </p>
        <div className="contact-details">
          <a href={`tel:${negocio.tel}`}>{negocio.telefono}</a>
          <a href={`mailto:${negocio.correo}`}>{negocio.correo}</a>
          <p>
            {negocio.horario}
            <br />
            <small>Días de atención por confirmar</small>
          </p>
        </div>
      </div>
      <form onSubmit={submit}>
        <div className="form-fields">
          <label>
            Tu nombre
            <input
              name="nombre"
              autoComplete="name"
              required
              placeholder="¿Cómo te llamás?"
              maxLength={100}
            />
          </label>
          <label>
            Teléfono
            <input
              type="tel"
              name="telefono"
              autoComplete="tel"
              required
              placeholder="+506"
              maxLength={30}
            />
          </label>
          <label>
            Servicio
            <select name="servicio" required defaultValue="">
              <option value="" disabled>
                ¿En qué te ayudamos?
              </option>
              {servicios.map((s) => (
                <option key={s.slug}>{s.nombre}</option>
              ))}
              <option>Necesito orientación</option>
            </select>
          </label>
          <label>
            Tipo de proyecto
            <select name="tipo" defaultValue="" required>
              <option value="" disabled>
                Seleccioná una opción
              </option>
              <option>Residencial</option>
              <option>Comercial</option>
              <option>Remodelación</option>
              <option>Otro</option>
            </select>
          </label>
          <label className="full-width">
            Ubicación
            <input
              name="ubicacion"
              required
              placeholder="Provincia, cantón o zona"
              maxLength={150}
            />
          </label>
          <label className="full-width">
            Un poco sobre tu proyecto
            <textarea
              name="mensaje"
              rows={3}
              placeholder="Tu idea, área aproximada o cualquier detalle que querás compartir…"
              maxLength={2000}
            />
          </label>
        </div>
        <div className="form-bottom">
          <small>
            Se abrirá WhatsApp con tus datos.
            <br />
            Vos decidís cuándo enviar el mensaje.
          </small>
          <button className="button" type="submit">
            Conversar por WhatsApp <Arrow diagonal />
          </button>
        </div>
        {sent && (
          <p role="status" className="form-status">
            Tu mensaje está preparado. Si no se abrió WhatsApp,{" "}
            <a href={link} target="_blank" rel="noreferrer">
              abrilo aquí
            </a>
            .
          </p>
        )}
      </form>
    </div>
  );
}
