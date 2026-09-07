"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

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
    <div className="border-b border-linea">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-start justify-between py-6 text-left gap-6 group"
      >
        <span className="text-lg font-medium text-espuma leading-snug group-hover:text-agua transition-colors">
          {q}
        </span>
        <Plus
          aria-hidden="true"
          className={`w-5 h-5 mt-0.5 flex-shrink-0 text-bruma transition-transform duration-300 ${
            isOpen ? "rotate-45 text-agua" : ""
          }`}
        />
      </button>
      {/* Respuesta siempre en el DOM (visible para crawlers/LLMs);
          se colapsa solo visualmente con grid-rows. */}
      <div
        aria-hidden={!isOpen}
        className={`grid transition-all duration-300 overflow-hidden ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0">
          <p className="text-bruma leading-relaxed pb-6 max-w-2xl">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-28 border-t border-linea">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-start">
          <div className="lg:sticky lg:top-28">
            <h2 className="text-[clamp(2rem,3.6vw,3rem)] font-bold text-espuma tracking-[-0.03em] leading-[1.08] mb-6">
              Preguntas que suelen aparecer antes de empezar
            </h2>
            <p className="text-bruma leading-relaxed max-w-md">
              Si tienes una pregunta que no está aquí, escríbenos directamente.
              Respondemos en menos de 24h hábiles.
            </p>
          </div>

          <div className="border-t border-linea">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                q={faq.q}
                a={faq.a}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}