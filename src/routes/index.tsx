import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { FadeUp } from "@/components/FadeUp";
import heroImg from "@/assets/hero.png";
import cuadro1 from "@/assets/cuadro-1.jpg";
import cuadro2 from "@/assets/cuadro-2.jpg";
import cuadro3 from "@/assets/cuadro-3.jpg";
import cuadro4 from "@/assets/cuadro-4.jpg";
import cuadro5 from "@/assets/cuadro-5.jpg";
import cuadro6 from "@/assets/cuadro-6.jpg";
import cuadro7 from "@/assets/cuadro-7.jpg";
import cuadro8 from "@/assets/cuadro-8.jpg";
import cuadro9 from "@/assets/cuadro-9.jpg";
import cuadro10 from "@/assets/cuadro-10.jpg";
import cuadro11 from "@/assets/cuadro-11.jpg";
import cuadro12 from "@/assets/cuadro-12.jpg";
import cuadro13 from "@/assets/cuadro-13.jpg";
import cuadro14 from "@/assets/cuadro-14.jpg";
import cuadro15 from "@/assets/cuadro-15.jpg";
import cuadro16 from "@/assets/cuadro-16.jpg";
import cuadro17 from "@/assets/cuadro-17.jpg";
import cuadro18 from "@/assets/cuadro-18.jpg";
import cuadro19 from "@/assets/cuadro-19.jpg";
import cuadro20 from "@/assets/cuadro-20.jpg";
import cuadro21 from "@/assets/cuadro-21.jpg";

export const Route = createFileRoute("/")({
  component: Landing,
});

const navLinks = [
  { href: "#galeria", label: "Galería" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#sobre", label: "Sobre Cvall" },
  { href: "#contacto", label: "Contacto" },
];

const Logo = ({ className = "" }: { className?: string }) => (
  <img src="/assets/logo.svg" alt="Cvall" className={className} />
);

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-cream/95 backdrop-blur shadow-[0_1px_0_rgba(44,44,44,0.06)]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <a href="#top" className={scrolled ? "text-charcoal" : "text-cream"}>
          <Logo className="h-10 w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-[0.78rem] tracking-[0.18em] uppercase transition-colors hover:text-terracotta ${
                scrolled ? "text-charcoal" : "text-cream"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <button
          aria-label="Menú"
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden flex flex-col gap-1.5 ${scrolled ? "text-charcoal" : "text-cream"}`}
        >
          <span className="block w-6 h-px bg-current" />
          <span className="block w-6 h-px bg-current" />
          <span className="block w-4 h-px bg-current ml-auto" />
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-cream border-t border-charcoal/10 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm tracking-[0.18em] uppercase text-charcoal"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full grain overflow-hidden">
      <img
        src={heroImg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1280}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/85 via-charcoal-deep/40 to-charcoal-deep/30" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 min-h-screen flex flex-col justify-end pb-24 pt-40">
        <FadeUp>
          <Logo className="h-16 sm:h-20 w-auto mb-8 brightness-0 invert" />
        </FadeUp>
        <FadeUp>
          <p className="eyebrow text-terracotta mb-6">
            Samborombón, Buenos Aires
          </p>
        </FadeUp>
        <FadeUp delay={150}>
          <h1 className="text-cream font-serif text-5xl sm:text-6xl lg:text-8xl leading-[0.95] max-w-4xl">
            El arte no debería<br />quedarse quieto.
          </h1>
        </FadeUp>
        <FadeUp delay={300}>
          <p className="text-cream/85 mt-8 text-lg lg:text-xl max-w-xl font-light leading-relaxed">
            Obras que circulan. Hogares que cambian. Huellas que quedan.
          </p>
        </FadeUp>
        <FadeUp delay={450}>
          <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6">
            <a
              href="#suscripcion"
              className="inline-flex items-center justify-center bg-terracotta hover:bg-terracotta-dark text-cream px-8 py-4 text-sm tracking-[0.18em] uppercase rounded-[2px] transition-colors"
            >
              Quiero una obra en mi hogar
            </a>
            <a
              href="#galeria"
              className="text-cream underline underline-offset-4 decoration-cream/40 hover:decoration-cream text-sm tracking-wide"
            >
              Ver la galería →
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

function Concept() {
  return (
    <section className="bg-cream-deep py-28 lg:py-40">
      <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
        <FadeUp>
          <h2 className="text-charcoal font-serif text-4xl lg:text-6xl leading-tight mb-12">
            Nada de lo que pinto existe.<br />Por eso te obliga a crear algo adentro tuyo.
          </h2>
        </FadeUp>
        <FadeUp delay={150}>
          <div className="text-charcoal/85 text-lg lg:text-xl font-light leading-relaxed space-y-6">
            <p>
              El arte abstracto no te muestra el mundo.<br />
              Te muestra lo que vos sos cuando lo mirás.
            </p>
            <p>
              Cvall nació de una convicción simple: el arte no debería vivir<br />
              en depósitos ni en galerías que poca gente visita.<br />
              Debería circular. Entrar a casas. Cambiar paredes. Moverse.
            </p>
            <p>
              Una obra en residencia en tu hogar durante 6 meses.<br />
              Después llega otra. Y la que se va, visita a alguien más.
            </p>
            <p>
              Así es como algo hecho en un atelier de campo termina dejando<br />
              huella en lugares que nunca imaginé.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

const steps = [
  {
    n: "01",
    title: "Elegís",
    body: "Entrás a la galería y seleccionás la obra que algo te dice que es tuya por ahora.",
  },
  {
    n: "02",
    title: "Llega",
    body: "La enviamos protegida en su caja. Lista para colgar. Sin vueltas.",
  },
  {
    n: "03",
    title: "Convivís",
    body: "Seis meses con esa obra en tu pared. Mirándola de día, de noche, sola, acompañada. Dejando que haga lo suyo.",
  },
  {
    n: "04",
    title: "Circula",
    body: "Coordinamos la devolución y viene la siguiente. La que se va sigue viajando.",
  },
];

function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-cream py-28 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <FadeUp>
          <p className="eyebrow mb-6">El proceso</p>
          <h2 className="text-charcoal text-4xl lg:text-6xl max-w-2xl">Tan simple como debe ser.</h2>
        </FadeUp>
        <div className="mt-20 grid md:grid-cols-4 gap-14 lg:gap-20">
          {steps.map((s, i) => (
            <FadeUp key={s.n} delay={i * 120}>
              <div className="border-t border-charcoal/15 pt-8">
                <div className="text-terracotta text-5xl lg:text-6xl mb-8 font-sans">{s.n}</div>
                <h3 className="text-charcoal text-2xl lg:text-3xl mb-4">{s.title}</h3>
                <p className="text-charcoal/70 font-light leading-relaxed">{s.body}</p>
              </div>
            </FadeUp>
          ))}
        </div>
        <FadeUp>
          <p className="text-center text-charcoal/55 italic text-sm mt-16">
            Todo incluido. USD $29 por mes.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="suscripcion" className="bg-cream-deep py-28 lg:py-40">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <FadeUp>
          <p className="eyebrow mb-6">Membresía</p>
          <h2 className="text-charcoal font-serif text-4xl lg:text-6xl leading-tight">Una obra original en tu espacio. 
            Por menos de lo que cuesta una salida al teatro.</h2>
        </FadeUp>
        <div className="mt-16">
          <FadeUp className="mx-auto max-w-[600px]">
            <div className="bg-cream border-2 border-terracotta p-10 lg:p-12 h-full flex flex-col">
              <p className="eyebrow mb-6 text-terracotta">MEMBRESÍA CVALL</p>
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-6xl lg:text-7xl text-charcoal">USD $29</span>
                <span className="text-charcoal/60">/ mes</span>
              </div>
              <ul className="mt-10 space-y-4 text-charcoal/85 font-light">
                {[
                  "Una obra original cada 6 meses",
                  "Envío incluido, ida y vuelta",
                  "Caja de transporte reutilizable",
                ].map((f, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-terracotta mt-1">·</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-terracotta italic font-light">
                ✦ Pagá los 6 meses de una y el sexto te lo regalamos — USD $145 por período.
              </p>
              <a
                href="#contacto"
                className="mt-10 inline-flex items-center justify-center bg-terracotta hover:bg-terracotta-dark text-cream px-8 py-4 text-sm tracking-[0.18em] uppercase rounded-[2px] transition-colors"
              >
                QUIERO SUSCRIBIRME
              </a>
            </div>
          </FadeUp>
        </div>
        <FadeUp className="mt-12 text-center">
          <div className="bg-cream/60 border border-charcoal/10 p-6 rounded-[2px] mx-auto max-w-[600px]">
            <p className="text-charcoal/85 font-light mb-1">¿Tenés una empresa, estudio u oficina?</p>
            <p className="text-charcoal/85 font-light mb-1">Para múltiples obras tenemos condiciones especiales.</p>
            <p className="text-charcoal/85 font-light mb-4">Escribinos y lo charlamos.</p>
            <a
              href="https://wa.me/5492223464934"
              target="_blank"
              rel="noreferrer"
              className="text-terracotta hover:text-terracotta-dark text-sm tracking-[0.18em] uppercase transition-colors"
            >
              Contactanos →
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

const obras = [
  { img: cuadro1, title: "Alegria", dim: "50 x 60 cm", series: "Serie 1-10", technique: "Acrílico", status: "available" },
  { img: cuadro2, title: "El diablo viste a la moda", dim: "50 x 60 cm", series: "Serie 1-10", technique: "Acrílico", status: "available" },
  { img: cuadro3, title: "El diablo viste a la moda", dim: "50 x 60 cm", series: "Serie 2-10", technique: "Acrílico", status: "available" },
  { img: cuadro4, title: "Alegria", dim: "40 x 50 cm", series: "Serie 4-10", technique: "Acrílico", status: "available" },
  { img: cuadro5, title: "Caos", dim: "50 x 60 cm", series: null, technique: "Acrílico", status: "available" },
  { img: cuadro6, title: "Alegria", dim: "50 x 60 cm", series: "Serie 6-10", technique: "Acrílico", status: "available" },
  { img: cuadro7, title: "Alegria", dim: "40 x 50 cm", series: "Serie 2-10", technique: "Acrílico", status: "available" },
  { img: cuadro8, title: "Sin título", dim: null, series: null, technique: "Acrílico", status: "available" },
  { img: cuadro9, title: "El diablo viste a la moda", dim: "50 x 50 cm", series: "Serie 3-10", technique: "Acrílico", status: "available" },
  { img: cuadro10, title: "El diablo viste a la moda", dim: "50 x 50 cm", series: "Serie 4-10", technique: "Acrílico", status: "available" },
  { img: cuadro11, title: "Señales", dim: "30 x 70 cm", series: "Díptico 1", technique: "Acrílico", status: "available" },
  { img: cuadro12, title: "Señales", dim: "30 x 70 cm", series: "Díptico 2", technique: "Acrílico", status: "available" },
  { img: cuadro13, title: "Alegria", dim: "40 x 50 cm", series: "Serie 4-10", technique: "Acrílico", status: "available" },
  { img: cuadro14, title: "Alegria", dim: "40 x 50 cm", series: "Serie 5-10", technique: "Acrílico", status: "available" },
  { img: cuadro15, title: "Alegria", dim: "60 x 60 cm", series: "Serie 8-10", technique: "Aerosografía", status: "available" },
  { img: cuadro16, title: "El diablo viste a la moda", dim: "60 x 80 cm", series: "Serie 5-10", technique: "Acrílico", status: "available" },
  { img: cuadro17, title: "Profundidad", dim: "50 x 70 cm", series: null, technique: "Acrílico y aerosografía", status: "available" },
  { img: cuadro18, title: "Alegria", dim: "50 x 60 cm", series: "Serie 7-10", technique: "Acrílico", status: "available" },
  { img: cuadro19, title: "Alegria", dim: "60 x 60 cm", series: "Serie 8-10", technique: "Acrílico y aerosografía", status: "available" },
  { img: cuadro20, title: "Coronado", dim: "50 x 60 cm", series: null, technique: "Acrílico", status: "available" },
  { img: cuadro21, title: "Plumaje Real", dim: "50 x 60 cm", series: null, technique: "Acrílico", status: "available" },
];

function Gallery({ onSelectObra }: { onSelectObra: (obra: typeof obras[0]) => void }) {
  return (
    <section id="galeria" className="bg-cream py-28 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <FadeUp>
          <p className="eyebrow mb-6">Galería</p>
          <h2 className="text-charcoal text-4xl lg:text-6xl">Obras disponibles</h2>
        </FadeUp>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {obras.map((w, i) => (
            <FadeUp key={i} delay={(i % 3) * 100}>
              <figure className="group cursor-pointer" onClick={() => onSelectObra(w)}>
                <div className="relative overflow-hidden bg-cream-deep aspect-[4/5]">
                  <img
                    src={w.img}
                    alt={w.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-charcoal-deep/0 group-hover:bg-charcoal-deep/40 transition-colors duration-500 flex items-end p-6">
                    <span className="text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-sm tracking-[0.18em] uppercase">
                      Ver obra →
                    </span>
                  </div>
                </div>
                <figcaption className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-2xl text-charcoal leading-tight">{w.title}</h3>
                    <p className="text-charcoal/55 text-sm mt-1">
                      {w.dim && `${w.dim} · `}
                      {w.technique}
                      {w.series && ` · ${w.series}`}
                    </p>
                  </div>
                  <span
                    className={`shrink-0 mt-1 text-[0.65rem] tracking-[0.18em] uppercase px-3 py-1 rounded-full ${
                      w.status === "available"
                        ? "bg-olive/15 text-olive"
                        : "bg-terracotta/15 text-terracotta-dark"
                    }`}
                  >
                    {w.status === "available" ? "Disponible" : "En rotación activa"}
                  </span>
                </figcaption>
              </figure>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

function Lightbox({ obra, onClose }: { obra: typeof obras[0]; onClose: () => void }) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] bg-charcoal-deep/95 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 md:top-8 md:right-8 text-cream hover:text-terracotta transition-colors"
        aria-label="Cerrar"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
      <div
        className="max-w-5xl w-full bg-cream rounded-[2px] overflow-hidden flex flex-col lg:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="lg:w-2/3 bg-cream-deep flex items-center justify-center p-4">
          <img
            src={obra.img}
            alt={obra.title}
            className="max-h-[70vh] w-auto h-auto object-contain"
          />
        </div>
        <div className="lg:w-1/3 p-6 lg:p-8 flex flex-col">
          <div className="flex items-start justify-between gap-4 mb-6">
            <h2 className="font-serif text-3xl lg:text-4xl text-charcoal leading-tight">
              {obra.title}
            </h2>
            <span
              className={`shrink-0 text-[0.65rem] tracking-[0.18em] uppercase px-3 py-1 rounded-full ${
                obra.status === "available"
                  ? "bg-olive/15 text-olive"
                  : "bg-terracotta/15 text-terracotta-dark"
              }`}
            >
              {obra.status === "available" ? "Disponible" : "En rotación activa"}
            </span>
          </div>
          <div className="space-y-3 text-charcoal/85 font-light">
            {obra.dim && <p>Medidas: {obra.dim}</p>}
            {obra.series && <p>Serie: {obra.series}</p>}
            <p>Técnica: {obra.technique}</p>
          </div>
          <div className="mt-auto pt-8">
            <a
              href="#contacto"
              onClick={onClose}
              className="inline-flex items-center justify-center bg-terracotta hover:bg-terracotta-dark text-cream px-6 py-3 text-sm tracking-[0.18em] uppercase rounded-[2px] transition-colors"
            >
              Contactar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="sobre" className="bg-charcoal text-cream py-28 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <FadeUp className="order-2 lg:order-1">
          <p className="eyebrow mb-6">La artista</p>
          <h2 className="text-cream text-4xl lg:text-6xl leading-tight">
            Nací en Brandsen.<br />
            Pinto en Samborombón.<br />
            Y hace un tiempo entendí que mis cuadros necesitaban salir.
          </h2>
          <div className="mt-10 space-y-6 text-cream/80 font-light text-lg leading-relaxed max-w-xl">
            <p>
              Soy artista plástica, docente, madre de cinco.<br />
              Trabajo con acrílico, aerosoles y arte fluido en mi atelier<br />
              rodeado de campo y silencio.
            </p>
            <p>
              Siempre pinté en abstracto porque el abstracto no miente.<br />
              No representa nada que ya exista — te obliga a traer<br />
              algo tuyo para completarlo.
            </p>
            <p>
              Cvall no es una galería. No es una tienda.<br />
              Es mi forma de dejar algo en el mundo más allá de lo que ya dejé.
            </p>
          </div>
          <p className="mt-10 italic text-terracotta">
            Ya que estamos de paso, dejemos huellas bonitas.
          </p>
          <p className="mt-4 text-cream/85 font-light">
            — Valeria Luciana Candiago
          </p>
        </FadeUp>
        <FadeUp delay={150} className="order-1 lg:order-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-end">
            <img
              src="/assets/cvall-imagen.png"
              alt="Valeria Candiago en su atelier"
              loading="lazy"
              className="w-full aspect-[3/4] object-cover"
            />
            <img
              src="/assets/atardecer.jpg"
              alt="Atardecer desde el atelier de campo"
              loading="lazy"
              className="w-full aspect-[4/3] object-cover"
            />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contacto" className="bg-terracotta text-cream py-28 lg:py-40">
      <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
        <FadeUp>
          <h2 className="font-serif text-4xl lg:text-6xl leading-tight text-cream">
            Hay una obra esperando<br />
            las paredes de<br />
            tu casa.
          </h2>
          <p className="mt-6 text-cream/85 text-lg font-light">
            No para siempre.<br />
            Solo por un tiempo.<br />
            Que es exactamente como funciona todo lo que vale la pena.
          </p>
        </FadeUp>
        <FadeUp delay={150}>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5492223464934"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center bg-cream text-charcoal hover:bg-cream/90 px-8 py-4 text-sm tracking-[0.18em] uppercase rounded-[2px] transition-colors"
              aria-label="WhatsApp"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.096.544 4.084 1.488 5.824L0 24l6.264-1.624A11.916 11.916 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm6.584 16.912c-.28.788-1.576 1.492-2.184 1.512-.376.012-.86.016-1.396-.092-.316-.064-.724-.184-1.244-.36-2.196-.74-3.64-2.436-3.756-2.556-.116-.12-.96-1.244-.96-2.38 0-1.132.492-1.68.672-1.912.18-.232.396-.288.528-.288.132 0 .264.004.38.02.124.016.324-.048.504.372.2.48.684 1.656.744 1.776.06.12.1.256.016.408-.084.152-.132.252-.264.384-.132.132-.272.3-.388.404-.136.124-.276.26-.124.512.152.256 0 0 .68.38 0 0 2.096.98 3.364 1.208.268.048.536.072.756.072.664 0 1.668-.252 2.068-1.544.4-1.296.4-2.412.288-2.66-.112-.248-.932-.572-1.928-1.088-1.364-.712-2.34-1.16-2.544-1.36-.204-.2-.644-.484-1.012-.484-.896 0-1.584.748-1.584 1.856 0 1.108.412 1.564.504 1.68.092.116 1.068 1.62 1.164 2.068.092.436.184.372.52.228.336-.144 1.184-.484 1.964-.968.776-.48 1.356-.624 1.564-.604.208.02.328.128.4.312.072.184.072 1.024-.212 1.812z"/>
              </svg>
              Escribir por WhatsApp
            </a>
            <a
              href="mailto:candiagovaleria@gmail.com"
              className="inline-flex items-center justify-center border border-cream text-cream hover:bg-cream/10 px-8 py-4 text-sm tracking-[0.18em] uppercase rounded-[2px] transition-colors"
              aria-label="Email"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mr-2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              Enviar un mail
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-charcoal-deep text-cream/70 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-3 gap-12 items-start">
        <div>
          <Logo className="h-10 w-auto text-cream" />
          <p className="italic text-sm mt-4 text-cream/60">
            Valeria Candiago · Atelier de Campo · Samborombón, Buenos Aires, Argentina
          </p>
        </div>
        <nav className="flex flex-col gap-3 md:items-center">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm tracking-[0.16em] uppercase hover:text-terracotta transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="md:text-right">
        </div>
      </div>
      <div className="mt-16 text-center text-xs text-cream/40 tracking-wider">
        Ya que estamos de paso, dejemos huellas bonitas.
      </div>
      <div className="mt-4 text-center text-xs text-cream/40 tracking-wider">
        © 2025 Cvall · Arte original · Buenos Aires, Argentina
      </div>
    </footer>
  );
}

function Landing() {
  const [obraSeleccionada, setObraSeleccionada] = useState<typeof obras[0] | null>(null);

  return (
    <div className="bg-cream text-charcoal">
      <Nav />
      <main>
        <Hero />
        <Concept />
        <HowItWorks />
        <Pricing />
        <Gallery onSelectObra={setObraSeleccionada} />
        <About />
        <Contact />
      </main>
      <Footer />
      {obraSeleccionada && (
        <Lightbox
          obra={obraSeleccionada}
          onClose={() => setObraSeleccionada(null)}
        />
      )}
    </div>
  );
}
