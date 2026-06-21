import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { FadeUp } from "@/components/FadeUp";
import heroImg from "@/assets/hero.jpg";
import portraitReal from "@/assets/cvall-portrait.png.asset.json";
import atelierReal from "@/assets/atelier-real.jpg.asset.json";
import art1 from "@/assets/art1.jpg";
import art2 from "@/assets/art2.jpg";
import art3 from "@/assets/art3.jpg";
import art4 from "@/assets/art4.jpg";
import art5 from "@/assets/art5.jpg";
import art6 from "@/assets/art6.jpg";

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
            Arte original · Buenos Aires, Argentina
          </p>
        </FadeUp>
        <FadeUp delay={150}>
          <h1 className="text-cream font-serif text-5xl sm:text-6xl lg:text-8xl leading-[0.95] max-w-4xl">
            Arte que visita<br />tu hogar
          </h1>
        </FadeUp>
        <FadeUp delay={300}>
          <p className="text-cream/85 mt-8 text-lg lg:text-xl max-w-xl font-light leading-relaxed">
            Suscribite y recibí una obra original de Cvall cada 6 meses.
            Envío incluido. Sin compromisos.
          </p>
        </FadeUp>
        <FadeUp delay={450}>
          <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6">
            <a
              href="#suscripcion"
              className="inline-flex items-center justify-center bg-terracotta hover:bg-terracotta-dark text-cream px-8 py-4 text-sm tracking-[0.18em] uppercase rounded-[2px] transition-colors"
            >
              Quiero suscribirme
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

const steps = [
  {
    n: "01",
    title: "Elegís una obra",
    body: "Explorá la galería y seleccioná la obra que quieras tener en tu hogar por los próximos 6 meses.",
  },
  {
    n: "02",
    title: "La recibís en tu casa",
    body: "Enviamos el cuadro en su caja de transporte reutilizable, protegido y listo para colgar. El envío corre por nuestra cuenta.",
  },
  {
    n: "03",
    title: "A los 6 meses, rotamos",
    body: "Te contactamos para coordinar la devolución y elegís tu próxima obra. La caja viene de vuelta con el nuevo cuadro.",
  },
];

function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-cream py-28 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <FadeUp>
          <p className="eyebrow mb-6">El proceso</p>
          <h2 className="text-charcoal text-4xl lg:text-6xl max-w-2xl">Así funciona</h2>
        </FadeUp>
        <div className="mt-20 grid md:grid-cols-3 gap-14 lg:gap-20">
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
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="suscripcion" className="bg-cream-deep py-28 lg:py-40">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <FadeUp>
          <p className="eyebrow mb-6">Suscripción</p>
          <h2 className="text-charcoal text-4xl lg:text-6xl max-w-2xl">Simple y transparente</h2>
        </FadeUp>
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <FadeUp>
            <div className="bg-cream border-2 border-terracotta p-10 lg:p-12 h-full flex flex-col">
              <p className="eyebrow mb-6">Suscripción</p>
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-6xl lg:text-7xl text-charcoal">USD $29</span>
                <span className="text-charcoal/60">/ mes</span>
              </div>
              <p className="text-charcoal/60 text-sm mt-2">Facturado como USD $174 cada 6 meses</p>
              <ul className="mt-10 space-y-4 text-charcoal/85 font-light">
                {[
                  "1 obra original cada 6 meses",
                  "Envío incluido (ida y vuelta)",
                  "Caja de transporte reutilizable",
                  "20% de descuento para comprar la obra",
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
                Suscribirme
              </a>
            </div>
          </FadeUp>
          <FadeUp delay={120}>
            <div className="border border-charcoal/30 p-10 lg:p-12 h-full flex flex-col">
              <p className="eyebrow text-charcoal/70 mb-6">Compra directa</p>
              <h3 className="font-serif text-4xl text-charcoal">Comprá una obra</h3>
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
              <p className="text-charcoal/60 text-sm mt-8 leading-relaxed">
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
        <p className="text-charcoal/55 italic text-sm text-center mt-10 max-w-xl mx-auto">
          Los precios se actualizan por período. El pago se coordina directamente con Cvall.
        </p>
      </div>
    </section>
  );
}

const works = [
  { img: art1, title: "Mediodía en el patio", dim: "70 × 90 cm · acrílico", status: "available" },
  { img: art2, title: "Horizonte ocre", dim: "60 × 60 cm · acrílico", status: "circulating" },
  { img: art3, title: "Campo en silencio", dim: "80 × 100 cm · acrílico", status: "available" },
  { img: art4, title: "Gesto rojo", dim: "50 × 50 cm · acrílico", status: "available" },
  { img: art5, title: "Capas de tierra", dim: "70 × 100 cm · acrílico", status: "circulating" },
  { img: art6, title: "Luna sobre el monte", dim: "65 × 80 cm · acrílico", status: "available" },
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
          {works.map((w, i) => (
            <FadeUp key={w.title} delay={(i % 3) * 100}>
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
                    <p className="text-charcoal/55 text-sm mt-1">{w.dim}</p>
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
            La mente detrás<br />de Cvall
          </h2>
          <div className="mt-10 space-y-6 text-cream/80 font-light text-lg leading-relaxed max-w-xl">
            <p>
              Valeria Candiago crea en su taller de campo en Brandsen, Buenos Aires. Cada obra nace en el silencio del campo y termina colgada en un hogar.
            </p>
            <p>
              Cvall no tiene una galería tradicional. Crea una forma de que el arte circule, de que las paredes cambien, de que la belleza no se quede quieta.
            </p>
          </div>
          <p className="mt-10 italic text-terracotta">
            Atelier de Campo — Brandsen, Argentina
          </p>
        </FadeUp>
        <FadeUp delay={150} className="order-1 lg:order-2">
          <div className="space-y-6">
            <img
              src={portraitReal.url}
              alt="Valeria Candiago en su atelier"
              loading="lazy"
              className="w-full aspect-[4/5] object-cover"
            />
            <img
              src={atelierReal.url}
              alt="Atardecer desde el atelier de campo"
              loading="lazy"
              className="w-2/3 ml-auto aspect-[4/3] object-cover"
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
            ¿Querés una obra de Cvall en tu hogar?
          </h2>
          <p className="mt-6 text-cream/85 text-lg font-light">
            Escribinos y te contamos todo.
          </p>
        </FadeUp>
        <FadeUp delay={150}>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5491100000000"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center bg-cream text-charcoal hover:bg-cream/90 px-8 py-4 text-sm tracking-[0.18em] uppercase rounded-[2px] transition-colors"
            >
              Escribir por WhatsApp
            </a>
            <a
              href="mailto:contacto@cvall.art"
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
            Valeria Candiago | Atelier de Campo
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
