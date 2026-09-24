import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { asset, whatsapp } from "../data/negocio";
export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <span aria-hidden="true" className="arrow">
      {diagonal ? "↗" : "→"}
    </span>
  );
}
export function Button({
  children,
  to,
  secondary = false,
  message,
}: {
  children: ReactNode;
  to?: string;
  secondary?: boolean;
  message?: string;
}) {
  const cls = `button ${secondary ? "button-secondary" : ""}`;
  return to ? (
    <Link className={cls} to={to}>
      {children}
      <Arrow />
    </Link>
  ) : (
    <a
      className={cls}
      href={whatsapp(message)}
      target="_blank"
      rel="noreferrer"
    >
      {children}
      <Arrow diagonal />
    </a>
  );
}
export function SectionTitle({
  number,
  label,
  title,
  children,
}: {
  number: string;
  label: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">
          {number} / {label}
        </p>
        <h2>{title}</h2>
      </div>
      {children}
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
        srcSet={`${asset(`images/${name.replace(".webp", "-small.webp")}`)} 800w, ${asset(`images/${name}`)} ${name === "hero.webp" ? "2400" : "1440"}w`}
        sizes={
          eager
            ? "100vw"
            : "(max-width: 600px) 90vw, (max-width: 1000px) 48vw, 50vw"
        }
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
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
      <p className="eyebrow">LAHL / {label}</p>
      <h1>{title}</h1>
      {text && <p className="intro">{text}</p>}
      <div className="dimension" />
    </header>
  );
}
