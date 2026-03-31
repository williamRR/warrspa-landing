"use client";

import { motion } from "framer-motion";
import { Code, TrendingUp, Zap, ArrowRight } from "lucide-react";
import { FC } from "react";

interface ServiceProps {
  icon: FC<{ className?: string }>;
  title: string;
  description: string;
  outcome: string;
  features: string[];
  iconBg: string;
  index: number;
}

function ServiceCard({
  icon: Icon,
  title,
  description,
  outcome,
  features,
  iconBg,
  index,
}: ServiceProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-bg-secondary border border-border rounded-2xl p-7 hover:border-primary/30 transition-colors duration-300"
    >
      <div
        className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${iconBg}`}
      >
        <Icon className="w-5 h-5 text-white" />
      </div>

      <h3 className="text-xl font-bold text-text-primary mb-3 font-jakarta">
        {title}
      </h3>
      <p className="text-text-secondary mb-5 leading-relaxed text-sm">
        {description}
      </p>

      <div className="bg-bg-tertiary border border-border rounded-xl p-4 mb-5">
        <div className="text-xs text-text-muted mb-1">Resultado esperado</div>
        <div className="text-sm text-text-primary font-medium">{outcome}</div>
      </div>

      <ul className="space-y-2">
        {features.map((f) => (
          <li
            key={f}
            className="flex items-center gap-2 text-sm text-text-secondary"
          >
            <ArrowRight className="w-3 h-3 text-primary flex-shrink-0" />
            {f}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

const services = [
  {
    icon: Code,
    title: "Custom Development",
    description:
      "Desarrollo a medida con stack moderno. Arquitectura pensada para durar, no solo para entregar.",
    outcome:
      "Producto en producción, sin deuda técnica que frene el siguiente sprint.",
    features: [
      "Web & mobile apps",
      "APIs y backend",
      "Diseño de base de datos",
      "Optimización de performance",
    ],
    iconBg: "bg-primary",
  },
  {
    icon: TrendingUp,
    title: "SaaS Consulting",
    description:
      "Te ayudamos a diseñar, validar y construir productos SaaS con modelo de revenue recurrente.",
    outcome:
      "Modelo de negocio validado y producto con primeros usuarios pagando.",
    features: [
      "Estrategia de producto",
      "Modelos de monetización",
      "Growth engineering",
      "Validación de mercado",
    ],
    iconBg: "bg-accent-blue",
  },
  {
    icon: Zap,
    title: "MVP to Scale",
    description:
      "De prototipo funcional a plataforma estable. Iteramos sobre lo que aprende el usuario real.",
    outcome: "Roadmap técnico claro para pasar de MVP a producto con tracción.",
    features: [
      "Prototipado rápido",
      "User testing",
      "Planificación de escalabilidad",
      "Gestión de deuda técnica",
    ],
    iconBg: "bg-success",
  },
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-24 bg-bg-primary">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            Servicios
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary mb-4 font-jakarta">
            Lo que construimos
          </h2>
          <p className="text-text-secondary max-w-xl leading-relaxed">
            Cada servicio está orientado a un resultado de negocio concreto. No
            vendemos horas, construimos producto.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.title} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
