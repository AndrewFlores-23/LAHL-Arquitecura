// Acceso temporal a la propuesta. Después de `cierre`, solo entra quien tenga la llave
// del propietario (?llave=...). Aquí solo se guarda su SHA-256, nunca la llave.
// Abierta al público desde el 10 de noviembre de 2026; para cerrarla, poner aquí una fecha real.
export const acceso = {
  cierre: "2099-12-31T23:59:59-06:00",
  cierreTexto: "31 de diciembre de 2099",
  llaveSha256: "c1ad0f318005cf70e76f2b889068fc1f038f91eda1436bb337d5b446ddf1a466",
  logo: "images/aw-logo-bloqueo.webp",
};
