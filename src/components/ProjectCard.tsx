import { Link } from 'react-router-dom'
import { proyectos } from '../data/proyectos'
import { Arrow, Photo } from './UI'
export default function ProjectCard({ project, index = 0 }: { project: typeof proyectos[number]; index?: number }) { return <Link className="project-card" to={`/portafolio/${project.slug}`}><div className="project-image"><Photo name={project.imagen} alt={`Concepto de ${project.nombre}; imagen de referencia generada`}/><span className="project-example">Concepto · imagen de referencia</span><span className="project-open"><Arrow diagonal/></span></div><div className="project-caption"><span className="project-number">0{index+1}</span><div><h3>{project.nombre}</h3><p>{project.tipo} <span> / </span> Propuesta conceptual</p></div><Arrow diagonal/></div></Link> }
