import { useEffect, useState } from "react";
import { asset } from "../data/negocio";
export default function DemoPost({
  title,
  thumbnail,
  video,
}: {
  title: string;
  thumbnail: string;
  video: boolean;
}) {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (!playing) return;
    const timer = window.setInterval(
      () => setProgress((value) => (value + 1) % 13),
      1000,
    );
    return () => window.clearInterval(timer);
  }, [playing]);
  return (
    <>
      <div className={`demo-media ${playing ? "is-playing" : ""}`}>
        <img
          src={thumbnail.startsWith("images/") ? asset(thumbnail) : thumbnail}
          alt={title}
        />
        {video && (
          <>
            <span className="demo-tag">Video simulado · sin audio</span>
            <div className="demo-controls">
              <button
                type="button"
                onClick={() => setPlaying(!playing)}
                aria-label={
                  playing ? "Pausar demostración" : "Reproducir demostración"
                }
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                  {playing ? (
                    <path d="M6 4h4v16H6zm8 0h4v16h-4z" />
                  ) : (
                    <path d="m7 4 13 8-13 8z" />
                  )}
                </svg>
              </button>
              <span>0:{String(progress).padStart(2, "0")} / 0:12</span>
              <progress
                value={progress}
                max={12}
                aria-label="Progreso de la demostración"
              />
            </div>
          </>
        )}
      </div>
      <div className="dialog-caption">
        <p className="eyebrow">
          {video
            ? "Ejemplo de video de YouTube"
            : "Ejemplo de publicación de Instagram"}
        </p>
        <h3>{title}</h3>
        <p>
          {video
            ? "Simulación visual para mostrar cómo se verá un video del estudio. No es un video real."
            : "Así se presentarán las publicaciones del estudio. Esta imagen es una muestra del diseño."}
        </p>
      </div>
    </>
  );
}
