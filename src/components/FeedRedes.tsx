import { useEffect, useRef, useState } from "react";
import { asset } from "../data/negocio";
import { Arrow, SectionTitle } from "./UI";
type Post = {
  red: string;
  url: string;
  miniatura: string;
  titulo: string;
  fecha: string;
  tipo: string;
  ejemplo?: boolean;
};
function youtubeId(url: string) {
  try {
    const u = new URL(url);
    if (u.hostname === "youtu.be")
      return u.pathname.slice(1).match(/^[\w-]{11}$/)?.[0];
    if (["youtube.com", "www.youtube.com"].includes(u.hostname))
      return u.searchParams.get("v")?.match(/^[\w-]{11}$/)?.[0];
  } catch {
    return null;
  }
  return null;
}
function safeRemote(url: string) {
  try {
    return new URL(url).protocol === "https:";
  } catch {
    return false;
  }
}
export default function FeedRedes() {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [selected, setSelected] = useState<Post | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const controller = new AbortController();
    fetch(asset("data/redes.json"), { signal: controller.signal })
      .then((r) => {
        if (!r.ok) throw new Error("Feed no disponible");
        return r.json();
      })
      .then((data) => {
        setPosts(
          Array.isArray(data)
            ? data
                .filter(
                  (p) =>
                    typeof p.titulo === "string" &&
                    typeof p.miniatura === "string" &&
                    (p.miniatura.startsWith("images/") ||
                      safeRemote(p.miniatura)) &&
                    (p.ejemplo || safeRemote(p.url)),
                )
                .slice(0, 8)
            : [],
        );
      })
      .catch(() => {
        if (!controller.signal.aborted) setPosts([]);
      });
    return () => controller.abort();
  }, []);
  useEffect(() => {
    if (selected) {
      dialog.current?.showModal();
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previous;
      };
    }
  }, [selected]);
  if (posts?.length === 0) return null;
  function close() {
    dialog.current?.close();
    setSelected(null);
  }
  return (
    <section className="section social-section">
      <div className="container">
        <SectionTitle
          number="04"
          label="Desde el estudio"
          title="Ideas, detalles y proceso."
        >
          <p className="heading-note">
            Una mirada al contenido
            <br />
            que compartiremos con vos.
          </p>
        </SectionTitle>
        <p className="social-disclaimer">
          Vista de muestra · Las publicaciones reales aparecerán al conectar las
          redes del estudio.
        </p>
        <div className="social-grid">
          {posts
            ? posts.map((p, i) => (
                <article className="social-card" key={`${p.url}-${i}`}>
                  <img
                    src={
                      p.miniatura.startsWith("images/")
                        ? asset(p.miniatura)
                        : p.miniatura
                    }
                    loading="lazy"
                    width="400"
                    height="600"
                    alt={p.titulo}
                  />
                  <div className="social-shade" />
                  <span className="social-network">{p.red}</span>
                  <div className="social-copy">
                    <small>
                      {p.ejemplo
                        ? "VISTA DE MUESTRA"
                        : new Date(p.fecha).toLocaleDateString("es-CR")}
                    </small>
                    <h3>{p.titulo}</h3>
                  </div>
                  {p.ejemplo || (p.red === "YouTube" && youtubeId(p.url)) ? (
                    <button
                      className="social-open"
                      onClick={() => setSelected(p)}
                      aria-label={`Ver ${p.ejemplo ? "muestra" : "video"}: ${p.titulo}`}
                    >
                      <Arrow diagonal />
                    </button>
                  ) : (
                    <a
                      className="social-open"
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Abrir ${p.titulo} en ${p.red}`}
                    >
                      <Arrow diagonal />
                    </a>
                  )}
                </article>
              ))
            : Array.from({ length: 6 }, (_, i) => (
                <div
                  className="social-skeleton"
                  key={i}
                  aria-label="Cargando contenido"
                />
              ))}
        </div>
      </div>
      <dialog
        ref={dialog}
        className="social-dialog"
        onCancel={() => setSelected(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
        aria-label={selected?.titulo || "Vista de publicación"}
      >
        <button
          className="dialog-close"
          onClick={close}
          aria-label="Cerrar publicación"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="m6 6 12 12M18 6 6 18"
              stroke="currentColor"
              strokeWidth="1.4"
            />
          </svg>
        </button>
        {selected && (
          <>
            {selected.ejemplo ? (
              <>
                <img
                  src={
                    selected.miniatura.startsWith("images/")
                      ? asset(selected.miniatura)
                      : selected.miniatura
                  }
                  alt={selected.titulo}
                />
                <div className="dialog-caption">
                  <p className="eyebrow">Ejemplo de contenido</p>
                  <h3>{selected.titulo}</h3>
                  <p>
                    Esta imagen ilustra la presentación de las redes. No es una
                    publicación real del estudio.
                  </p>
                </div>
              </>
            ) : (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${youtubeId(selected.url)}?autoplay=1`}
                title={selected.titulo}
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            )}
          </>
        )}
      </dialog>
    </section>
  );
}
