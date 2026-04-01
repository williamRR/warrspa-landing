"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Button from "./Button";

interface Project {
  name: string;
  category: string;
  problem: string;
  what: string;
  stack: { name: string; icon?: string }[];
  url?: string;
  status: string;
  image: string;
}

const projects: Project[] = [
  {
    name: "MesaDigital",
    category: "SaaS B2B · Restaurantes y deliveries",
    problem:
      "Restaurantes operando con planillas, WhatsApp y caja manual. Sin visibilidad real del negocio.",
    what: "POS completo, gestión de inventario, analytics en tiempo real y app móvil para deliveries en una sola plataforma.",
    stack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Supabase" },
      { name: "MercadoPago" },
      { name: "React Native" },
    ],
    url: "https://www.mesadigital.cl",
    status: "En producción",
    image: "/portfolio-mesadigital.png",
  },
  {
    name: "Y4 Platform",
    category: "SaaS · Presencia digital profesional",
    problem:
      "Profesionales y empresas usando 5–7 herramientas para gestionar su presencia digital.",
    what: "Linktree + Calendly + WeTransfer + Analytics + QR en una sola plataforma. Tu negocio completo en un link.",
    stack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Supabase" },
      { name: "OAuth" },
    ],
    url: "https://y4.cl",
    status: "En producción",
    image: "/portfolio-y4.png",
  },
  {
    name: "Klypt",
    category: "Utilidad · Gestor de notas flotante",
    problem:
      "Necesidad de acceso rápido a notas y historial de portapapeles sin cambiar de ventana.",
    what: "App de escritorio flotante always-on-top para notas rápidas e historial de portapapeles con búsqueda fuzzy.",
    stack: [
      { name: "Tauri 2" },
      { name: "Rust" },
      { name: "TypeScript" },
      { name: "SQLite" },
    ],
    url: "https://y4.cl/l/klypt",
    status: "En desarrollo",
    image: "/portfolio-klypt.png",
  },
  {
    name: "WarrGate",
    category: "Infraestructura · Auth multi-tenant",
    problem:
      "Cada proyecto necesita construir autenticación desde cero: JWT, refresh tokens, roles, multi-tenant, seguridad.",
    what: "Plataforma de autenticación multi-tenant lista para producción. Registro, login, refresh tokens, gestión de roles y aislamiento por tenant en una sola API.",
    stack: [
      { name: "Node.js" },
      { name: "TypeScript" },
      { name: "Fastify" },
      { name: "PostgreSQL" },
      { name: "GCP" },
    ],
    status: "En desarrollo",
    image: "/portfolio-warrgate.png",
  },
  {
    name: "WarrGraph MCP",
    category: "Infraestructura · AI & Code Intelligence",
    problem:
      "Los LLMs suelen perder contexto en repositorios grandes o consumen demasiados tokens al leer archivos completos.",
    what: "Servidor MCP de alto rendimiento que utiliza grafos de inteligencia (RIG) y búsqueda semántica para proporcionar a la IA solo el contexto exacto que necesita.",
    stack: [
      { name: "TypeScript" },
      { name: "SQLite" },
      { name: "AST Parsing" },
      { name: "MCP SDK" },
    ],
    status: "Código abierto",
    image: "/WARRGRAPH.png",
  },
  {
    name: "ChatLLM Hub",
    category: "AI Infrastructure · Orquestador multi-modelo",
    problem:
      "La dependencia de proveedores únicos de IA y la dificultad de mantener contexto persistente y privado en conversaciones complejas.",
    what: "Plataforma unificada que permite alternar entre modelos locales (Ollama) y cloud, con optimización de contexto dinámica y extracción de perfiles para una IA con memoria a largo plazo.",
    stack: [
      { name: "React" },
      { name: "Node.js" },
      { name: "Supabase" },
      { name: "Ollama" },
      { name: "Tailwind" },
    ],
    url: "https://chat.warrspa.com",
    status: "En desarrollo",
    image: "/chatllm.png",
  },
  {
    name: "Umbral",
    category: "Juego · Estrategia multiplayer en tiempo real",
    problem:
      "Juegos de cartas físicos limitados por ubicación geográfica y tiempo. Sin modo online para jugar a distancia.",
    what: "Juego de cartas async y realtime donde 2-4 jugadores gestionan sistemas de una nave espacial, juegan cartas de ataque, defensa y acciones especiales.",
    stack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Socket.IO" },
      { name: "Tailwind" },
    ],
    url: "https://bacterias.vercel.app",
    status: "En producción",
    image: "/portfolio-placeholder.svg",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-bg-secondary border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-colors group"
    >
      {/* Screenshot preview */}
      <div className="relative h-52 overflow-hidden bg-bg-tertiary">
        <Image
          src={project.image}
          alt={`${project.name} landing`}
          fill
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg-secondary/90" />
          <div className="absolute bottom-3 left-4 flex items-center gap-1.5">
          <div
            className={`w-1.5 h-1.5 rounded-full ${
              project.status === "En producción"
                ? "bg-success animate-pulse"
                : project.status === "Código abierto"
                ? "bg-accent-blue"
                : "bg-yellow-400"
            }`}
          />
          <span className="text-xs text-text-muted">{project.status}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-7">
        <div className="text-xs text-text-muted font-medium mb-1 uppercase tracking-wider">
          {project.category}
        </div>
        <h3 className="text-xl font-bold text-text-primary font-jakarta mb-4">
          {project.name}
        </h3>

        <div className="space-y-3 mb-5">
          <div>
            <div className="text-xs text-text-muted mb-1">Problema</div>
            <p className="text-sm text-text-secondary leading-relaxed">
              {project.problem}
            </p>
          </div>
          <div>
            <div className="text-xs text-text-muted mb-1">Solución</div>
            <p className="text-sm text-text-secondary leading-relaxed">
              {project.what}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.stack.map((tag) => (
            <span
              key={tag.name}
              className="px-2 py-0.5 bg-bg-tertiary text-text-muted border border-border rounded text-xs"
            >
              {tag.name}
            </span>
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
    </motion.div>
  );
}

export default function PortfolioSection() {
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

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
