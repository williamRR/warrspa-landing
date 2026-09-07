"use client";

import { Code, TrendingUp, Zap } from "lucide-react";
import { FC } from "react";

interface Service {
  icon: FC<{ className?: string }>;
  title: string;
  description: string;
  outcome: string;
  features: string[];
}

const services: Service[] = [
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
  },
];

function FilaServicio({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <div className="group grid lg:grid-cols-12 gap-6 lg:gap-10 py-12 border-t border-linea transition-colors duration-300 hover:bg-tinta-2/40">
      <div className="lg:col-span-4">
        <div className="flex items-start gap-4">
          <Icon className="w-5 h-5 text-agua mt-2 flex-shrink-0" />
          <h3 className="text-2xl lg:text-[28px] font-bold text-espuma tracking-[-0.02em] leading-snug">
            {service.title}
          </h3>
        </div>
      </div>

      <div className="lg:col-span-5">
        <p className="text-bruma leading-relaxed mb-6">
          {service.description}
        </p>
        <div className="border-l-2 border-agua pl-4">
          <div className="text-xs text-humo mb-1">Resultado</div>
          <p className="text-espuma text-[15px] font-medium leading-relaxed">
            {service.outcome}
          </p>
        </div>
      </div>

      <ul className="lg:col-span-3">
        {service.features.map((f) => (
          <li
            key={f}
            className="text-sm text-bruma py-2.5 border-b border-linea/70 first:pt-0 last:border-0"
          >
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-28 border-t border-linea">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 items-end mb-16 lg:mb-6">
          <h2 className="text-[clamp(2rem,3.6vw,3rem)] font-bold text-espuma tracking-[-0.03em] leading-[1.08]">
            Lo que construimos
          </h2>
          <p className="text-bruma leading-relaxed lg:pb-2 max-w-md lg:justify-self-end">
            Cada servicio apunta a un resultado de negocio concreto. No vendemos
            horas: construimos producto que queda operando.
          </p>
        </div>

        <div className="border-b border-linea">
          {services.map((s) => (
            <FilaServicio key={s.title} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
}