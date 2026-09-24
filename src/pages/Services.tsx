import { Link } from 'react-router-dom'
import { servicios } from '../data/servicios'
import { precioTexto } from '../data/precios'
import { Arrow, PageHeading, Photo } from '../components/UI'
export default function Services() { return <><PageHeading label="Servicios" title="Tu proyecto, de principio a fin." text="Diseño, documentación y acompañamiento. Elegí el servicio que necesitás o conversemos para definir el alcance."/><section className="container section services-index">{servicios.map((s,i) => <Link to={`/servicios/${s.slug}`} key={s.slug} className="service-row"><span className="eyebrow">0{i+1}</span><Photo name={s.imagen} alt={`Referencia conceptual: ${s.nombre}`}/><div><h2>{s.nombre}</h2><p>{s.beneficio}</p><small>{precioTexto(s.precio)}</small></div><Arrow diagonal/></Link>)}</section></> }
