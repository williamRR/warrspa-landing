"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "¿Cuánto tiempo toma lanzar un MVP?",
    a: "Depende de la complejidad, pero la mayoría de los MVPs salen en 6–10 semanas. Empezamos con un discovery de 1–2 semanas para definir exactamente qué se va a construir antes de estimar tiempos.",
  },
  {
    q: "¿Cómo es el proceso de trabajo?",
    a: "Planificación exhaustiva al inicio (discovery, arquitectura, criterios de éxito), luego ejecución en ciclos semanales con entregables reales. Tú tienes visibilidad completa del avance en todo momento.",
  },
  {
    q: "¿Qué pasa después del lanzamiento?",
    a: "El lanzamiento es el inicio, no el fin. Ofrecemos continuidad: monitoreo, iteración basada en feedback real de usuarios y planificación del roadmap de crecimiento.",
  },
  {
    q: "¿Trabajan con contrato?",
    a: "Sí, siempre. El contrato define el alcance, los entregables, los plazos y el ownership del código — que es tuyo desde el primer día. Sin contrato no empezamos.",
  },
  {
    q: "¿Puedo escalar el equipo si el proyecto crece?",
    a: "Absolutamente. Nuestra arquitectura está diseñada para escalar tanto en usuarios como en equipo técnico. Si el producto crece, definimos juntos cómo evoluciona el equipo y el stack.",
  },
  {
    q: "¿Qué stack usan?",
    a: "Next.js 15, TypeScript, Supabase y TailwindCSS como base. Integramos MercadoPago, Stripe, React Native y otras herramientas según el proyecto. No usamos tecnologías experimentales sin haberlas probado en producción primero.",
  },
];

function FAQItem({
  q,
  a,
  isOpen,
  onToggle,
}: {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left gap-6"
      >
        <span className="text-base font-medium text-text-primary">{q}</span>
        <span className="flex-shrink-0 text-primary">
          {isOpen ? (
            <Minus className="w-4 h-4" />
          ) : (
            <Plus className="w-4 h-4" />
          )}
        </span>
      </button>
      {/* Respuesta siempre en el DOM (visible para crawlers/LLMs);
          se colapsa solo visualmente con grid-rows. */}
      <div
        aria-hidden={!isOpen}
        className={`grid transition-all duration-200 overflow-hidden ${
          isOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0">
          <p className="text-text-secondary text-sm leading-relaxed pb-5">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-bg-secondary border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              Preguntas frecuentes
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary mb-4 font-display">
              Preguntas que suelen aparecer antes de empezar
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Si tienes una pregunta que no está aquí, escríbenos directamente.
              Respondemos en menos de 24h hábiles.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                q={faq.q}
                a={faq.a}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
