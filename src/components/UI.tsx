import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { asset, whatsapp } from "../data/negocio";
export function Arrow({
  diagonal = false,
  direction = "right",
}: {
  diagonal?: boolean;
  direction?: "right" | "left" | "up" | "down";
}) {
  const rotation = diagonal
    ? -45
    : { right: 0, down: 90, left: 180, up: -90 }[direction];
  return (
    <span aria-hidden="true" className="arrow">
      <svg viewBox="0 0 24 24" fill="none" focusable="false">
        <path
          d="M5 12h14m-6-6 6 6-6 6"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          transform={`rotate(${rotation} 12 12)`}
        />
      </svg>
    </span>
  );
}
// Botón tipo píldora: el texto a la izquierda y la flecha dentro de un nodo redondo.
export function Button({
  children,
  to,
  secondary = false,
  dark = false,
  message,
}: {
  children: ReactNode;
  to?: string;
  secondary?: boolean;
  dark?: boolean;
  message?: string;
}) {
  const cls = `button${secondary ? " button-secondary" : ""}${dark ? " button-dark" : ""}`;
  const inner = (
    <>
      <span className="button-label">{children}</span>
      <span className="button-badge">
        <Arrow diagonal={!to} />
      </span>
    </>
  );
  return to ? (
    <Link className={cls} to={to}>
      {inner}
    </Link>
  ) : (
    <a
      className={cls}
      href={whatsapp(message)}
      target="_blank"
      rel="noreferrer"
    >
      {inner}
    </a>
  );
}
export function SectionTitle({
  title,
  text,
  children,
}: {
  title: ReactNode;
  text?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="section-heading">
      <h2>{title}</h2>
      {(text || children) && (
        <div className="section-heading-side">
          {text && <p>{text}</p>}
          {children}
        </div>
      )}
    </div>
  );
}
export function Photo({
  name,
  alt,
  className = "",
  eager = false,
}: {
  name: string;
  alt: string;
  className?: string;
  eager?: boolean;
}) {
  return (
    <div className={`photo ${className}`}>
      <img
        src={asset(`images/${name}`)}
        alt={alt}
        srcSet={`${asset(`images/${name.replace(".webp", "-small.webp")}`)} 800w, ${asset(`images/${name}`)} ${name === "hero.webp" ? "2200" : "1600"}w`}
        sizes={
          eager
            ? "100vw"
            : "(max-width: 600px) 92vw, (max-width: 1000px) 48vw, 50vw"
        }
        loading={eager ? "eager" : "lazy"}
        {...{ fetchpriority: eager ? "high" : "auto" }}
        width="1600"
        height="1000"
        onLoad={(e) => e.currentTarget.classList.add("loaded")}
      />
    </div>
  );
}
export function PageHeading({
  label,
  title,
  text,
}: {
  label: string;
  title: string;
  text?: string;
}) {
  return (
    <header className="page-heading container">
      <p className="crumb">
        <Link to="/">LAHL</Link>
        <span aria-hidden="true">/</span>
        {label}
      </p>
      <h1>{title}</h1>
      {text && <p className="intro">{text}</p>}
    </header>
  );
}
// Fila de cajetín de plano: rótulo y valor.
export function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="field">
      <dt>{label}</dt>
      <dd>{children}</dd>
    </div>
  );
}
