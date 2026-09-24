export const precios = {
  diseno: null,
  planos: null,
  cfia: null,
  municipal: null,
  renders: null,
  inspeccion: null,
  presupuesto: null,
} as const;
export const precioTexto = (precio: number | null) =>
  precio === null
    ? "Precio por confirmar"
    : `Desde ₡${precio.toLocaleString("es-CR")}`;
export const paquetes = [
  {
    nombre: "Anteproyecto",
    numero: "01",
    frase: "Dale forma a tu idea.",
    incluye: ["Diseño arquitectónico", "Modelado 3D", "Renders del proyecto"],
    precio: null,
    destacado: false,
  },
  {
    nombre: "Proyecto completo",
    numero: "02",
    frase: "De la idea a los planos.",
    incluye: [
      "Diseño arquitectónico",
      "Planos constructivos",
      "Tramitología CFIA",
      "Trámites municipales",
    ],
    precio: null,
    destacado: true,
  },
  {
    nombre: "Acompañamiento de obra",
    numero: "03",
    frase: "Construí con una guía técnica.",
    incluye: ["Presupuesto constructivo", "Inspección de obras"],
    precio: null,
    destacado: false,
  },
];
