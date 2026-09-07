"use client";

import { ExternalLink } from "lucide-react";
import Image from "next/image";

interface Project {
  name: string;
  category: string;
  problem: string;
  what: string;
  stack: string[];
  url: string;
  image: string;
  alt: string;
}

const projects: Project[] = [
  {
    name: "MesaDigital",
    category: "SaaS B2B · Restaurantes y deliveries",
    problem:
      "Restaurantes operando con planillas, WhatsApp y caja manual. Sin visibilidad real del negocio.",
    what: "Analytics en tiempo real y gestión de menú en una sola plataforma.",
    stack: ["Next.js", "TypeScript", "Supabase", "MercadoPago", "React Native"],
    url: "https://www.mesadigital.cl",
    image: "/portfolio-mesadigital-full.png",
    alt: "Vista completa de la plataforma MesaDigital",
  },
  {
    name: "Y4 Platform",
    category: "SaaS · Presencia digital profesional",
    problem:
      "Profesionales y empresas usando 5–7 herramientas para gestionar su presencia digital.",
    what: "Linktree + Calendly + WeTransfer + Analytics + QR en una sola plataforma. Tu negocio completo en un link.",
    stack: ["Next.js", "TypeScript", "Supabase", "OAuth"],
    url: "https://y4.cl",
    image: "/portfolio-y4-full.png",
    alt: "Vista completa de la plataforma Y4",
  },
];

function Caso({ project, invertido }: { project: Project; invertido: boolean }) {
  return (
    <article
      className={`grupo-caso grid lg:grid-cols-2 gap-10 lg:gap-14 items-center ${
        invertido ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Screenshot completo dentro de una ventana; al hover recorre la página. */}
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Ver ${project.name} en una nueva pestaña`}
        className="marco block relative h-[380px] lg:h-[460px] overflow-hidden rounded-xl border border-linea bg-tinta-2 shadow-2xl shadow-black/40"
      >
        <Image
          src={project.image}
          alt={project.alt}
          width={1265}
          height={4748}
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="recorre absolute inset-x-0 top-0 w-full h-auto"
        />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-tinta to-transparent pointer-events-none" />
      </a>

      <div>
        <div className="flex items-center gap-2 text-sm text-bruma mb-4">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-agua opacity-60 animate-ping" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-agua" />
          </span>
          En producción — {project.url.replace("https://", "")}
        </div>

        <h3 className="text-3xl lg:text-4xl font-bold text-espuma tracking-[-0.02em] mb-1">
          {project.name}
        </h3>
        <p className="text-bruma text-sm mb-8">{project.category}</p>

        <div className="space-y-6 mb-8 max-w-lg">
          <div>
            <div className="text-xs text-humo mb-1.5">El problema</div>
            <p className="text-espuma/90 leading-relaxed">
              {project.problem}
            </p>
          </div>
          <div>
            <div className="text-xs text-humo mb-1.5">Lo que construimos</div>
            <p className="text-espuma/90 leading-relaxed">{project.what}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.stack.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs text-bruma border border-linea rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-agua hover:text-agua-viva transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
          Ver {project.name} en vivo
        </a>
      </div>
    </article>
  );
}

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-28 border-t border-linea">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 items-end mb-16 lg:mb-24">
          <h2 className="text-[clamp(2rem,3.6vw,3rem)] font-bold text-espuma tracking-[-0.03em] leading-[1.08]">
            Productos en producción
          </h2>
          <p className="text-bruma leading-relaxed lg:pb-2 max-w-md lg:justify-self-end">
            No solo entregamos código: operamos productos reales. Estas
            plataformas tienen clientes activos hoy.
          </p>
        </div>

        <div className="space-y-24 lg:space-y-32">
          {projects.map((p, i) => (
            <Caso key={p.name} project={p} invertido={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}