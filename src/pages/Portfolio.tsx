import { useSearchParams } from "react-router-dom";
import { proyectos, tipos } from "../data/proyectos";
import { PageHeading } from "../components/UI";
import ProjectCard from "../components/ProjectCard";
export default function Portfolio() {
  const [params, setParams] = useSearchParams();
  const selected = params.get("tipo") || "Todos";
  const current = tipos.includes(selected as (typeof tipos)[number])
    ? selected
    : "Todos";
  const filtered = proyectos.filter(
    (p) => current === "Todos" || p.tipo === current,
  );
  return (
    <>
      <PageHeading
        label="Portafolio"
        title="Distintas formas de habitar."
        text="Fichas de ejemplo con fotografías de referencia: muestran cómo se presentará el portafolio. No son obras realizadas por el estudio."
      />
      <section className="container section portfolio-index">
        <div
          className="portfolio-filters"
          aria-label="Filtrar proyectos por tipo"
        >
          {tipos.map((t) => (
            <button
              key={t}
              aria-pressed={current === t}
              onClick={() =>
                setParams(t === "Todos" ? {} : { tipo: t }, { replace: true })
              }
            >
              {t}
              {t === "Todos" && <span>{proyectos.length}</span>}
            </button>
          ))}
        </div>
        <p className="sr-only" role="status">
          {filtered.length} proyectos de ejemplo
        </p>
        <div className="portfolio-grid">
          {filtered.map((p) => (
            <ProjectCard project={p} key={p.slug} />
          ))}
        </div>
      </section>
    </>
  );
}
