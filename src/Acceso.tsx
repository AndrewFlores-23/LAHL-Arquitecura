import { Suspense, lazy, useEffect, useState } from "react";
import { acceso } from "./data/acceso";

// La propuesta completa solo se descarga si el acceso está abierto.
const App = lazy(() => import("./App"));

type Estado = "verificando" | "abierto" | "bloqueado";

const CLAVE_LOCAL = "lahl-llave";
const cierre = new Date(acceso.cierre).getTime();
const base = import.meta.env.BASE_URL;

async function sha256(texto: string) {
  const datos = new TextEncoder().encode(texto);
  const hash = await crypto.subtle.digest("SHA-256", datos);
  return [...new Uint8Array(hash)]
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function leerLocal() {
  try {
    return localStorage.getItem(CLAVE_LOCAL);
  } catch {
    return null;
  }
}

function guardarLocal(valor: string) {
  try {
    localStorage.setItem(CLAVE_LOCAL, valor);
  } catch {
    /* sin almacenamiento: el enlace con llave sigue funcionando */
  }
}

async function esPropietario() {
  const url = new URL(window.location.href);
  const deUrl = url.searchParams.get("llave");
  if (deUrl) {
    url.searchParams.delete("llave");
    window.history.replaceState(null, "", url.pathname + url.search + url.hash);
  }
  for (const llave of [deUrl, leerLocal()]) {
    if (!llave || !crypto?.subtle) continue;
    if ((await sha256(llave)) === acceso.llaveSha256) {
      guardarLocal(llave);
      return true;
    }
  }
  return false;
}

// Diferencia entre el reloj del servidor y el del equipo, para que cambiar
// la hora del dispositivo no reabra el acceso.
async function desfaseServidor() {
  try {
    const r = await fetch(`${base}favicon.svg?t=${Date.now()}`, {
      method: "HEAD",
      cache: "no-store",
    });
    const fecha = r.headers.get("date");
    if (fecha) return new Date(fecha).getTime() - Date.now();
  } catch {
    /* sin red: se usa el reloj local */
  }
  return 0;
}

export default function Acceso() {
  const [estado, setEstado] = useState<Estado>("verificando");

  useEffect(() => {
    let activo = true;
    let desfase = 0;
    let revisar: number | undefined;
    const vencido = () => Date.now() + desfase >= cierre;
    const comprobar = () => {
      if (vencido()) {
        setEstado("bloqueado");
        window.clearInterval(revisar);
      }
    };

    (async () => {
      if (await esPropietario()) {
        if (activo) setEstado("abierto");
        return;
      }
      desfase = await desfaseServidor();
      if (!activo) return;
      if (vencido()) return setEstado("bloqueado");
      setEstado("abierto");
      revisar = window.setInterval(comprobar, 15_000);
      document.addEventListener("visibilitychange", comprobar);
    })();

    return () => {
      activo = false;
      window.clearInterval(revisar);
      document.removeEventListener("visibilitychange", comprobar);
    };
  }, []);

  if (estado === "verificando") return <div className="acceso-espera" />;
  if (estado === "bloqueado") return <Bloqueo />;
  return (
    <Suspense
      fallback={<div className="page-loading" aria-label="Cargando página" />}
    >
      <App />
    </Suspense>
  );
}

function Bloqueo() {
  useEffect(() => {
    document.title = "Acceso restringido | AW-RiseCR";
    document.documentElement.classList.add("con-bloqueo");
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bloqueo" aria-labelledby="bloqueo-titulo">
      <div className="bloqueo-reticula" aria-hidden="true" />
      <div className="bloqueo-contenido">
        <p className="bloqueo-sello">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <rect x="5" y="11" width="14" height="10" rx="1.5" />
            <path d="M8 11V8a4 4 0 0 1 8 0v3" />
          </svg>
          Acceso restringido
        </p>
        <img
          className="bloqueo-logo"
          src={`${base}${acceso.logo}`}
          alt="AW-RiseCR"
          width={720}
          height={575}
        />
        <h1 id="bloqueo-titulo">
          Acceso a contenido creado para <span>LAHL</span> restringido y
          bloqueado por <span>AW-RiseCR</span>
        </h1>
        <p className="bloqueo-nota">
          El enlace de revisión estuvo disponible hasta las{" "}
          {acceso.cierreTexto}. Para volver a verlo, solicitá acceso a
          AW-RiseCR.
        </p>
      </div>
      <p className="bloqueo-pie">
        Propuesta demostrativa · LAHL Arquitectura • Diseño
      </p>
    </main>
  );
}
