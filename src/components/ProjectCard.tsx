import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { proyectos } from "../data/proyectos";
import { Arrow, Photo } from "./UI";
export default function ProjectCard({
  project,
}: {
  project: (typeof proyectos)[number];
  index?: number;
}) {
  const reduced = useReducedMotion();
  return (
    <Link className="project-card" to={`/portafolio/${project.slug}`}>
      <motion.div
        layoutId={reduced ? undefined : `project-${project.slug}`}
        className="project-image"
      >
        <Photo
          name={project.imagen}
          alt={`${project.nombre}: ${project.alt}. Fotografía de referencia, no es una obra de LAHL.`}
        />
        <span className="project-open">
          <Arrow diagonal />
        </span>
      </motion.div>
      <div className="project-caption">
        <h3>{project.nombre}</h3>
        <p>{project.tipo}</p>
      </div>
    </Link>
  );
}
