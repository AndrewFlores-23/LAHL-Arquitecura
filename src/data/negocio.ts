export const negocio = {
  marca: "LAHL",
  subtitulo: "ARQUITECTURA • DISEÑO",
  arquitecto: "Luis Alejandro Herrera",
  telefono: "+506 8633-3293",
  tel: "+50686333293",
  whatsapp: "https://wa.me/50686333293",
  correo: "arqherreralara@gmail.com",
  horario: "9:00 a. m. – 6:00 p. m.",
  dias: "[PENDIENTE]",
  frase:
    "Creamos proyectos arquitectónicos funcionales, estéticos y a la medida, desde el diseño hasta la tramitología.",
  redes: {
    Instagram: "[PENDIENTE]",
    TikTok: "[PENDIENTE]",
    Facebook: "[PENDIENTE]",
    YouTube: "[PENDIENTE]",
  },
  dominio: "[PENDIENTE]",
  cfia: "[PENDIENTE]",
  propuesta: true,
};
export const whatsapp = (
  mensaje = "Hola, me gustaría cotizar mi proyecto con LAHL Arquitectura.",
) => `${negocio.whatsapp}?text=${encodeURIComponent(mensaje)}`;
export const asset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

export const creditoDesarrollo = {
  nombre: "AW-RiseCR",
  logo: "images/aw-risecr.webp",
  descripcion: "Trabajo demostrativo para LAHL Arquitectura • Diseño.",
};
