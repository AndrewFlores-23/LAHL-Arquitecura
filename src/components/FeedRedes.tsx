import { useEffect, useRef, useState } from "react";
import DemoPost from "./DemoPost";
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
  const track = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({
    start: true,
    end: false,
    index: 0,
  });
  function updatePosition() {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(".social-card");
    const step = (card?.offsetWidth || 1) + 20;
    setPosition({
      start: el.scrollLeft < 2,
      end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 2,
      index: Math.round(el.scrollLeft / step),
    });
  }
  function move(direction: number) {
    const el = track.current;
    if (!el) return;
    const width =
      el.querySelector<HTMLElement>(".social-card")?.offsetWidth ||
      el.clientWidth;
    el.scrollBy({
      left: direction * (width + 20),
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  }
  useEffect(() => {
    const el = track.current;
    if (!el) return;
    updatePosition();
    const observer = new ResizeObserver(updatePosition);
    observer.observe(el);
    return () => observer.disconnect();
  }, [posts]);
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
        <div className="social-carousel-toolbar">
          <span>Instagram / YouTube</span>
          <div>
            <span className="carousel-count" aria-live="polite">
              {String(position.index + 1).padStart(2, "0")} /{" "}
              {String(posts?.length || 6).padStart(2, "0")}
            </span>
            <button
              type="button"
              aria-label="Publicaciones anteriores"
              aria-controls="redes-carrusel"
              disabled={position.start}
              onClick={() => move(-1)}
            >
              <Arrow direction="left" />
            </button>
            <button
              type="button"
              aria-label="Siguientes publicaciones"
              aria-controls="redes-carrusel"
              disabled={position.end}
              onClick={() => move(1)}
            >
              <Arrow />
            </button>
          </div>
        </div>
        <div
          className="social-grid social-carousel"
          id="redes-carrusel"
          ref={track}
          onScroll={updatePosition}
          role="region"
          aria-roledescription="carrusel"
          aria-label="Publicaciones de muestra del estudio"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.target !== event.currentTarget) return;
            if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
              event.preventDefault();
              move(event.key === "ArrowLeft" ? -1 : 1);
            }
          }}
        >
          {posts
            ? posts.map((p, i) => (
                <article
                  className="social-card"
                  key={`${p.url}-${i}`}
                  aria-label={`${i + 1} de ${posts.length}: ${p.titulo}`}
                >
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
                  <span className="social-network">
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.4"
                    >
                      {p.red === "YouTube" ? (
                        <>
                          <rect x="2" y="5" width="20" height="14" rx="4" />
                          <path
                            d="m10 9 5 3-5 3z"
                            fill="currentColor"
                            stroke="none"
                          />
                        </>
                      ) : (
                        <>
                          <rect x="3" y="3" width="18" height="18" rx="5" />
                          <circle cx="12" cy="12" r="4" />
                          <circle
                            cx="17.5"
                            cy="6.5"
                            r=".8"
                            fill="currentColor"
                          />
                        </>
                      )}
                    </svg>
                    {p.red}
                  </span>
                  <span className="social-format">
                    {p.tipo === "video" ? "Video de muestra" : "Publicación"}
                  </span>
                  {p.tipo === "video" && (
                    <span className="social-play" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="m8 5 11 7-11 7z" />
                      </svg>
                    </span>
                  )}
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
              <DemoPost
                key={selected.titulo}
                title={selected.titulo}
                thumbnail={selected.miniatura}
                video={selected.tipo === "video"}
              />
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
