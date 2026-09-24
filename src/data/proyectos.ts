export const tipos = ['Todos', 'Residencial', 'Comercial', 'Renders', 'Remodelación'] as const
export const proyectos = [
  ['casa-horizonte', 'Casa Horizonte', 'Residencial', 'hero.webp', 'Una exploración de la relación entre el paisaje tropical, la luz y los espacios abiertos.'],
  ['refugio-bosque', 'Refugio del bosque', 'Residencial', 'montana.webp', 'Madera, concreto y una forma de habitar en diálogo con el bosque.'],
  ['patio-comercial', 'Patio abierto', 'Comercial', 'comercial.webp', 'Un espacio comercial que se abre a la luz y a la vegetación.'],
  ['interior-calido', 'Habitar la calma', 'Remodelación', 'interior.webp', 'Una propuesta de interiores que explora materiales naturales y luz cálida.'],
  ['casa-del-pacifico', 'Casa del Pacífico', 'Renders', 'playa.webp', 'Estudio conceptual de una vivienda abierta hacia el paisaje.'],
  ['casa-patio', 'Casa patio', 'Residencial', 'patio.webp', 'Una vivienda conceptual organizada alrededor de un patio tropical.'],
  ['espacio-natural', 'Espacio natural', 'Remodelación', 'cocina.webp', 'Exploración de una cocina integrada y una nueva relación con el jardín.'],
  ['estudio-luz', 'Estudio de luz', 'Renders', 'renders.webp', 'Del modelo a la imagen: una exploración visual del proyecto.'],
].map(([slug, nombre, tipo, imagen, descripcion]) => ({ slug, nombre, tipo, imagen, descripcion, ubicacion: '[PENDIENTE]', area: '[PENDIENTE]', ano: '[PENDIENTE]', placeholder: true, servicios: ['Diseño arquitectónico', 'Modelado 3D y renders'] }))
