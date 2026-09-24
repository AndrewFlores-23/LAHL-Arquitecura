import { negocio } from "./negocio";
import { servicios } from "./servicios";
import { proyectos } from "./proyectos";
export const siteUrl = "https://andrewflores-23.github.io/LAHL-Arquitecura";
export function pageMeta(path: string) {
  const route = path.replace(/\/$/, "") || "/";
  const service = servicios.find((s) => route === `/servicios/${s.slug}`);
  const project = proyectos.find((p) => route === `/portafolio/${p.slug}`);
  if (service)
    return {
      title: service.nombre,
      description: service.beneficio,
      image: service.imagen,
    };
  if (project)
    return {
      title: project.nombre,
      description: `Propuesta conceptual: ${project.descripcion}`,
      image: project.imagen,
    };
  const pages: Record<string, [string, string]> = {
    "/": ["Arquitectura a tu medida en Costa Rica", negocio.frase],
    "/servicios": [
      "Servicios de arquitectura",
      "Diseño, planos, trámites, renders, presupuestos e inspección de obras en Costa Rica.",
    ],
    "/portafolio": [
      "Portafolio conceptual",
      "Una muestra de la dirección visual propuesta para LAHL Arquitectura • Diseño.",
    ],
    "/precios": [
      "Precios y paquetes",
      "Definí el alcance de tu proyecto con los paquetes de LAHL Arquitectura • Diseño.",
    ],
    "/estudio": ["Luis Alejandro Herrera · El estudio", negocio.frase],
    "/contacto": [
      "Hablemos de tu proyecto",
      "Contactá a LAHL Arquitectura • Diseño por WhatsApp o correo para conversar sobre tu proyecto.",
    ],
  };
  const [title, description] = pages[route] || [
    "Página no encontrada",
    "Volvé al inicio para explorar el sitio de LAHL Arquitectura • Diseño.",
  ];
  return { title, description, image: "hero.webp" };
}

export const shareImage = {
  archivo: "lahl-compartir-v1.jpg",
  ancho: 1200,
  alto: 630,
  alt: "LAHL Arquitectura • Diseño. Arquitectura a tu medida, por Luis Alejandro Herrera en Costa Rica. Imagen arquitectónica conceptual.",
};
