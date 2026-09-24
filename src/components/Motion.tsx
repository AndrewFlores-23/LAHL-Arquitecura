import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Lenis from "lenis";
import Logo from "./Logo";
import { navegacion } from "../data/contenido";
export default function Motion() {
  const reduce = useReducedMotion();
  const { pathname } = useLocation();
  const previous = useRef(pathname);
  const [transition, setTransition] = useState(false);
  const [loading, setLoading] = useState(() => {
    try {
      const seen = sessionStorage.getItem("lahl-visto");
      sessionStorage.setItem("lahl-visto", "si");
      return !seen;
    } catch {
      return false;
    }
  });
  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), reduce ? 0 : 1350);
    return () => clearTimeout(timer);
  }, [reduce]);
  useEffect(() => {
    if (pathname !== previous.current) {
      previous.current = pathname;
      setTransition(true);
      window.scrollTo({ top: 0, behavior: "instant" });
      window.setTimeout(
        () =>
          document.getElementById("contenido")?.focus({ preventScroll: true }),
        100,
      );
    }
    const timer = window.setTimeout(() => setTransition(false), 400);
    return () => clearTimeout(timer);
  }, [pathname]);
  useEffect(() => {
    if (reduce) return;
    const lenis = new Lenis({
      autoRaf: true,
      duration: 0.85,
      anchors: true,
      prevent: (node) => node.closest(".menu-overlay,dialog") !== null,
    });
    const parallax = () => {
      const hero = document.querySelector<HTMLElement>(".hero-image");
      if (hero && window.scrollY < window.innerHeight)
        hero.style.transform = `translateY(${window.scrollY * 0.12}px) scale(1.03)`;
    };
    lenis.on("scroll", parallax);
    return () => {
      lenis.off("scroll", parallax);
      lenis.destroy();
    };
  }, [reduce]);
  useEffect(() => {
    if (reduce) return;
    let observer: IntersectionObserver;
    const timer = window.setTimeout(() => {
      observer = new IntersectionObserver(
        (entries) =>
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("revealed");
              observer.unobserve(entry.target);
            }
          }),
        { threshold: 0.08 },
      );
      document
        .querySelectorAll(".section-heading,.process-grid article,.dimension")
        .forEach((el) => {
          if (el.getBoundingClientRect().top > window.innerHeight * 0.85) {
            el.classList.add("will-reveal");
            observer.observe(el);
          }
        });
    }, 200);
    return () => {
      clearTimeout(timer);
      observer?.disconnect();
      document
        .querySelectorAll(".will-reveal")
        .forEach((el) => el.classList.remove("will-reveal"));
    };
  }, [pathname, reduce]);
  useEffect(() => {
    if (reduce || !window.matchMedia("(pointer:fine)").matches) return;
    const move = (event: MouseEvent) => {
      const element = (event.target as Element).closest<HTMLElement>(
        ".button:not(.button-secondary)",
      );
      if (!element) return;
      const rect = element.getBoundingClientRect();
      element.style.translate = `${(event.clientX - rect.left - rect.width / 2) * 0.035}px ${(event.clientY - rect.top - rect.height / 2) * 0.07}px`;
    };
    const out = (event: MouseEvent) => {
      const el = (event.target as Element).closest<HTMLElement>(".button");
      if (el) el.style.translate = "0px 0px";
    };
    document.addEventListener("mousemove", move);
    document.addEventListener("mouseout", out);
    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseout", out);
    };
  }, [reduce]);
  const title =
    navegacion.find(([, path]) => pathname.startsWith(path))?.[0] || "LAHL";
  return (
    <>
      <AnimatePresence>
        {loading && !reduce && (
          <motion.div
            className="intro-loader"
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            aria-hidden="true"
          >
            <Logo />
            <span>ARQUITECTURA A TU MEDIDA</span>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {transition && !reduce && (
          <motion.div
            key={pathname}
            className="route-curtain"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.2, ease: [0.76, 0, 0.24, 1] }}
            aria-hidden="true"
          >
            <span>{title}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
