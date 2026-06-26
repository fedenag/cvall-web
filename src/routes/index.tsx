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
              Así es como algo hecho en un taller de campo termina dejando<br />
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
    title: "Rota",
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
                <div className="text-terracotta font-serif text-5xl lg:text-6xl mb-8">{s.n}</div>
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
          <h2 className="text-charcoal text-4xl lg:text-6xl max-w-2xl">Una obra en tu hogar. Por menos de lo que cuesta una cena afuera.</h2>
        </FadeUp>
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <FadeUp>
            <div className="bg-cream border-2 border-terracotta p-10 lg:p-12 h-full flex flex-col">
              <p className="eyebrow mb-6">Membresía Cvall</p>
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-6xl lg:text-7xl text-charcoal">USD $29</span>
                <span className="text-charcoal/60">/ mes</span>
              </div>
              <ul className="mt-10 space-y-4 text-charcoal/85 font-light">
                {[
                  "Una obra original cada 6 meses",
                  "Envío incluido, ida y vuelta",
                  "Caja de transporte reutilizable",
                  "20% de descuento si decidís quedártela para siempre",
                ].map((f) => (
                  <li key={f} className="flex gap-3">
                    <span className="text-terracotta mt-1">·</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contacto"
                className="mt-12 inline-flex items-center justify-center bg-terracotta hover:bg-terracotta-dark text-cream px-8 py-4 text-sm tracking-[0.18em] uppercase rounded-[2px] transition-colors"
              >
                Quiero suscribirme
              </a>
            </div>
          </FadeUp>
          <FadeUp delay={120}>
            <div className="border border-charcoal/30 p-10 lg:p-12 h-full flex flex-col">
              <p className="eyebrow text-charcoal/70 mb-6">Compra directa</p>
              <h3 className="font-serif text-4xl text-charcoal">Comprá una obra</h3>
              <p className="text-charcoal/85 text-sm mt-4 font-light">
                Las obras también están disponibles para compra directa.
              </p>
              <ul className="mt-8 space-y-4 text-charcoal/85 font-light">
                <li className="flex justify-between border-b border-charcoal/10 pb-3">
                  <span>Obras pequeñas</span><span className="text-charcoal/60">desde USD $150</span>
                </li>
                <li className="flex justify-between border-b border-charcoal/10 pb-3">
                  <span>Obras medianas</span><span className="text-charcoal/60">desde USD $300</span>
                </li>
                <li className="flex justify-between border-b border-charcoal/10 pb-3">
                  <span>Obras grandes</span><span className="text-charcoal/60">desde USD $500</span>
                </li>
              </ul>
              <p className="text-charcoal/55 italic text-sm mt-8 leading-relaxed">
                Suscriptores activos tienen 20% de descuento automático.
              </p>
              <a
                href="#galeria"
                className="mt-auto pt-12 inline-flex"
              >
                <span className="inline-flex items-center justify-center border border-charcoal text-charcoal hover:bg-charcoal hover:text-cream px-8 py-4 text-sm tracking-[0.18em] uppercase rounded-[2px] transition-colors">
                  Ver galería
                </span>
              </a>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

const obras = [
  { img: cuadro1, title: "Alegria (Serie 1-10)", dim: "40 x 50 cm", technique: "Acrílico", status: "available" },
  { img: cuadro2, title: "El diablo viste a la moda (Serie 1-10)", dim: "50 x 60 cm", technique: "Acrílico", status: "available" },
  { img: cuadro3, title: "El diablo viste a la moda (Serie 2-10)", dim: "50 x 60 cm", technique: "Acrílico", status: "available" },
  { img: cuadro4, title: "Alegria (Serie 4-10)", dim: "40 x 50 cm", technique: "Acrílico", status: "available" },
  { img: cuadro5, title: "Caos", dim: "50 x 60 cm", technique: "Acrílico", status: "available" },
  { img: cuadro6, title: "Sin título", dim: "A confirmar", technique: "Acrílico", status: "available" },
  { img: cuadro7, title: "Alegria (Serie 2-10)", dim: "40 x 50 cm", technique: "Acrílico", status: "available" },
  { img: cuadro8, title: "Sin título", dim: "A confirmar", technique: "Acrílico", status: "available" },
  { img: cuadro9, title: "El diablo viste a la moda (Serie 3-10)", dim: "50 x 50 cm", technique: "Acrílico", status: "available" },
  { img: cuadro10, title: "El diablo viste a la moda (Serie 4-10)", dim: "50 x 50 cm", technique: "Acrílico", status: "available" },
  { img: cuadro11, title: "Señales (Díptico 1)", dim: "30 x 70 cm", technique: "Acrílico", status: "available" },
  { img: cuadro12, title: "Señales (Díptico 2)", dim: "30 x 70 cm", technique: "Acrílico", status: "available" },
  { img: cuadro13, title: "Alegria (Serie 4-10)", dim: "40 x 50 cm", technique: "Acrílico", status: "available" },
  { img: cuadro14, title: "Alegria (Serie 5-10)", dim: "40 x 50 cm", technique: "Acrílico", status: "available" },
];

function Gallery() {
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
              <figure className="group cursor-pointer">
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
                    <p className="text-charcoal/55 text-sm mt-1">{w.dim} · {w.technique}</p>
                  </div>
                  <span
                    className={`shrink-0 mt-1 text-[0.65rem] tracking-[0.18em] uppercase px-3 py-1 rounded-full ${
                      w.status === "available"
                        ? "bg-olive/15 text-olive"
                        : "bg-terracotta/15 text-terracotta-dark"
                    }`}
                  >
                    {w.status === "available" ? "Disponible" : "En circulación"}
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
            >
              Escribir por WhatsApp
            </a>
            <a
              href="mailto:candiagovaleria@gmail.com"
              className="inline-flex items-center justify-center border border-cream text-cream hover:bg-cream/10 px-8 py-4 text-sm tracking-[0.18em] uppercase rounded-[2px] transition-colors"
            >
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
            Valeria Candiago · Atelier de Campo · Samborombón, Buenos Aires
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
          <p className="text-sm tracking-[0.18em] uppercase mb-4">Seguinos</p>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="inline-flex items-center justify-center w-10 h-10 border border-cream/30 rounded-full hover:border-terracotta hover:text-terracotta transition-colors md:ml-auto"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
            </svg>
          </a>
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
  return (
    <div className="bg-cream text-charcoal">
      <Nav />
      <main>
        <Hero />
        <Concept />
        <HowItWorks />
        <Pricing />
        <Gallery />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
