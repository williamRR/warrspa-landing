"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Entendemos tu negocio, usuarios y restricciones antes de escribir una línea de código. Sin esta fase, todo lo demás es improvisación.",
    duration: "1–2 semanas",
  },
  {
    number: "02",
    title: "Arquitectura",
    description:
      "Definimos stack, modelo de datos, flujos y criterios de éxito. La planificación exhaustiva evita reescrituras costosas.",
    duration: "1 semana",
  },
  {
    number: "03",
    title: "Build iterativo",
    description:
      "Entregamos funcionalidad real cada semana. Tú ves el progreso, pruebas con usuarios reales y el producto aprende.",
    duration: "Ciclos semanales",
  },
  {
    number: "04",
    title: "Deploy & Scale",
    description:
      "Lanzamos con monitoreo, métricas y un plan de crecimiento. El producto está vivo, no archivado.",
    duration: "Continuo",
  },
];

export default function ProcessSection() {
  return (
    <section
      id="proceso"
      className="py-24 bg-bg-secondary border-y border-border"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            Cómo trabajamos
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary mb-4 font-display">
            Planificación en cascada,{" "}
            <br className="hidden md:block" />
            ejecución iterativa.
          </h2>
          <p className="text-text-secondary max-w-xl leading-relaxed">
            No improvisamos ni nos perdemos en burocracia. Cada proyecto parte
            con un plan exhaustivo y avanza en ciclos cortos con entregables
            reales.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="text-4xl font-extrabold text-primary/15 font-display mb-4 leading-none">
                {step.number}
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-3 font-display">
                {step.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                {step.description}
              </p>
              <div className="inline-flex items-center text-xs text-text-muted border border-border rounded-full px-3 py-1">
                {step.duration}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
