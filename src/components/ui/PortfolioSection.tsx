"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Button from "./Button";

interface Project {
  name: string;
  category: string;
  problem: string;
  what: string;
  stack: string[];
  metrics: { value: string; label: string; color: string }[];
  url?: string;
  status: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    name: "MesaDigital",
    category: "SaaS B2B · Restaurantes y deliveries",
    problem:
      "Restaurantes operando con planillas, WhatsApp y caja manual. Sin visibilidad real del negocio.",
    what: "POS completo, gestión de inventario, analytics en tiempo real y app móvil para deliveries en una sola plataforma.",
    stack: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "MercadoPago",
      "PWA",
      "React Native",
    ],
    metrics: [
      {
        value: "15+",
        label: "Restaurantes activos",
        color: "text-text-primary",
      },
      { value: "+200%", label: "Crecimiento", color: "text-success" },
      { value: "99.9%", label: "Uptime", color: "text-accent-blue" },
    ],
    url: "https://www.mesadigital.cl",
    status: "En producción",
    featured: true,
  },
  {
    name: "Y4 Platform",
    category: "SaaS · Presencia digital profesional",
    problem:
      "Profesionales y empresas usando 5–7 herramientas para gestionar su presencia digital.",
    what: "Linktree + Calendly + WeTransfer + Analytics + QR en una sola plataforma. Tu negocio completo en un link.",
    stack: ["Next.js", "TypeScript", "Supabase", "OAuth multi-provider"],
    metrics: [
      { value: "Freemium", label: "Modelo", color: "text-text-primary" },
      { value: "4 planes", label: "Desde gratis", color: "text-accent-blue" },
      { value: "Prod.", label: "En y4.cl", color: "text-success" },
    ],
    url: "https://y4.cl",
    status: "En producción",
  },
];

function FeaturedProject({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-bg-secondary border border-border rounded-2xl overflow-hidden"
    >
      <div className="grid lg:grid-cols-2">
        <div className="bg-bg-tertiary p-10 flex flex-col justify-center min-h-56 relative">
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
            <span className="text-xs text-text-muted">{project.status}</span>
          </div>
          <div className="text-7xl font-extrabold text-primary/10 font-jakarta mb-4 leading-none">
            MD
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.stack.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 bg-primary/10 text-primary border border-primary/20 rounded text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="p-8">
          <div className="text-xs text-text-muted font-medium mb-2 uppercase tracking-wider">
            {project.category}
          </div>
          <h3 className="text-2xl font-extrabold text-text-primary mb-5 font-jakarta">
            {project.name}
          </h3>

          <div className="mb-4">
            <div className="text-xs text-text-muted mb-1">Problema</div>
            <p className="text-sm text-text-secondary leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="mb-6">
            <div className="text-xs text-text-muted mb-1">Qué construimos</div>
            <p className="text-sm text-text-secondary leading-relaxed">
              {project.what}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-6">
            {project.metrics.map((m) => (
              <div
                key={m.label}
                className="bg-bg-tertiary rounded-xl p-3 text-center"
              >
                <div className={`text-lg font-bold font-jakarta ${m.color}`}>
                  {m.value}
                </div>
                <div className="text-xs text-text-muted mt-0.5">{m.label}</div>
              </div>
            ))}
          </div>

          {project.url && (
            <Button
              variant="outline"
              size="sm"
              icon={ExternalLink}
              onClick={() => window.open(project.url, "_blank")}
            >
              Ver sitio
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function SecondaryProject({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-bg-secondary border border-border rounded-2xl p-7 hover:border-primary/30 transition-colors"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="text-xs text-text-muted mb-1">{project.category}</div>
          <h3 className="text-xl font-bold text-text-primary font-jakarta">
            {project.name}
          </h3>
        </div>
        <div className="flex items-center gap-1.5 flex-shrink-0">
          <div className="w-1.5 h-1.5 bg-success rounded-full" />
          <span className="text-xs text-text-muted">{project.status}</span>
        </div>
      </div>

      <p className="text-sm text-text-secondary leading-relaxed mb-5">
        {project.what}
      </p>

      <div className="grid grid-cols-3 gap-2 mb-5">
        {project.metrics.map((m) => (
          <div
            key={m.label}
            className="bg-bg-tertiary rounded-lg p-2.5 text-center"
          >
            <div className={`text-base font-bold font-jakarta ${m.color}`}>
              {m.value}
            </div>
            <div className="text-xs text-text-muted mt-0.5">{m.label}</div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-1.5">
        {project.stack.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 bg-bg-tertiary text-text-muted border border-border rounded text-xs"
          >
            {tag}
          </span>
        ))}
      </div>

      {project.url && (
        <div className="mt-5">
          <Button
            variant="outline"
            size="sm"
            icon={ExternalLink}
            onClick={() => window.open(project.url, "_blank")}
          >
            Ver sitio
          </Button>
        </div>
      )}
    </motion.div>
  );
}

export default function PortfolioSection() {
  const featured = projects.filter((p) => p.featured);
  const secondary = projects.filter((p) => !p.featured);

  return (
    <section id="portfolio" className="py-24 bg-bg-primary">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            Casos de éxito
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary mb-4 font-jakarta">
            Productos en producción
          </h2>
          <p className="text-text-secondary max-w-xl leading-relaxed">
            No solo entregamos código — operamos productos reales. Estas
            plataformas sirven a clientes activos hoy.
          </p>
        </motion.div>

        <div className="space-y-6">
          {featured.map((p) => (
            <FeaturedProject key={p.name} project={p} />
          ))}
          {secondary.length > 0 && (
            <div className="grid md:grid-cols-2 gap-6">
              {secondary.map((p, i) => (
                <SecondaryProject key={p.name} project={p} index={i} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
