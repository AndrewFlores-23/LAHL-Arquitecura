import { precios } from "./precios";
const base = [
  [
    "diseno-arquitectonico",
    "Diseño arquitectónico",
    "Espacios pensados para tu forma de vivir.",
    "diseno",
    "diseno.webp",
    [
      "Propuesta de distribución",
      "Concepto arquitectónico",
      "Revisión del diseño con vos",
    ],
    [
      "Tenés un lote y querés construir tu casa.",
      "Buscás diseñar un espacio comercial.",
    ],
    [
      "Conocemos tu idea y tu lote",
      "Exploramos la distribución",
      "Afinamos el diseño",
    ],
  ],
  [
    "planos-constructivos",
    "Planos constructivos",
    "Tu proyecto, definido para dar el siguiente paso.",
    "planos",
    "planos.webp",
    [
      "Plantas, fachadas y cortes",
      "Coordinación de especialidades",
      "Alcance estructural, eléctrico y mecánico por confirmar",
    ],
    [
      "Ya tenés un diseño y necesitás desarrollarlo.",
      "Querés planificar tu construcción.",
    ],
    [
      "Revisamos el anteproyecto",
      "Desarrollamos los planos",
      "Coordinamos la documentación",
    ],
  ],
  [
    "tramitologia-cfia",
    "Tramitología de planos constructivos",
    "Acompañamiento en la revisión de tus planos.",
    "cfia",
    "cfia.webp",
    [
      "Revisión de documentación",
      "Gestión de planos en APC / CFIA",
      "Seguimiento de observaciones",
    ],
    [
      "Necesitás presentar los planos de tu proyecto.",
      "Buscás apoyo con la documentación.",
    ],
    ["Revisamos el alcance", "Preparamos la presentación", "Damos seguimiento"],
  ],
  [
    "tramites-municipales",
    "Trámites municipales",
    "Orientación para gestionar tu proyecto ante la municipalidad.",
    "municipal",
    "municipal.webp",
    [
      "Revisión de la gestión requerida",
      "Preparación de documentación acordada",
      "Seguimiento del trámite",
    ],
    [
      "Vas a construir o ampliar.",
      "Querés conocer las gestiones para tu lote.",
    ],
    [
      "Identificamos la municipalidad",
      "Revisamos la documentación",
      "Acompañamos la gestión",
    ],
  ],
  [
    "modelado-3d-y-renders",
    "Modelado 3D y renders",
    "Visualizá tu espacio antes de construir.",
    "renders",
    "renders.webp",
    [
      "Modelo tridimensional",
      "Vistas del proyecto acordadas",
      "Exploración de materiales y luz",
    ],
    [
      "Querés entender cómo se verá tu casa.",
      "Necesitás presentar un proyecto.",
    ],
    ["Recibimos el diseño", "Modelamos el espacio", "Preparamos las vistas"],
  ],
  [
    "inspeccion-de-obras",
    "Inspección de obras",
    "Una mirada técnica durante la construcción.",
    "inspeccion",
    "inspeccion.webp",
    [
      "Visitas según alcance contratado",
      "Revisión respecto de los planos",
      "Observaciones técnicas de la obra",
    ],
    [
      "Tu obra está por comenzar.",
      "Necesitás acompañamiento técnico durante la construcción.",
    ],
    [
      "Conocemos los planos",
      "Acordamos el seguimiento",
      "Inspeccionamos y documentamos",
    ],
  ],
  [
    "presupuestos",
    "Presupuestos constructivos",
    "Conocé el alcance de tu inversión.",
    "presupuesto",
    "presupuesto.webp",
    [
      "Estimación de materiales",
      "Desglose de mano de obra",
      "Presupuesto según documentación disponible",
    ],
    [
      "Querés estimar tu inversión antes de construir.",
      "Necesitás comparar el alcance de la obra.",
    ],
    [
      "Revisamos la información",
      "Cuantificamos el alcance",
      "Presentamos el presupuesto",
    ],
  ],
] as const;
export const servicios = base.map(
  ([
    slug,
    nombre,
    beneficio,
    clave,
    imagen,
    entregables,
    situaciones,
    proceso,
  ]) => ({
    slug,
    nombre,
    beneficio,
    imagen,
    entregables,
    situaciones,
    proceso,
    precio: precios[clave],
    alcance: "[PENDIENTE: confirmar alcance con el arquitecto]",
    preguntas: [
      {
        pregunta: "¿Cómo empezamos?",
        respuesta:
          "Escribinos por WhatsApp y contanos qué querés hacer, dónde está el proyecto y con qué información contás.",
      },
      {
        pregunta: "¿Cuánto cuesta?",
        respuesta:
          "La cotización depende del área, la ubicación y el alcance. Revisamos tu proyecto para preparar una propuesta.",
      },
      {
        pregunta: "¿Cuánto tarda?",
        respuesta:
          "Definimos un cronograma según el proyecto. Los tiempos de revisión de terceros pueden variar.",
      },
    ],
  }),
);
