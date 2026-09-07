"use client";

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
    <section id="proceso" className="py-28 border-t border-linea">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 items-end mb-16 lg:mb-20">
          <h2 className="text-[clamp(2rem,3.6vw,3rem)] font-bold text-espuma tracking-[-0.03em] leading-[1.08]">
            Planificación en cascada,
            <br />
            ejecución iterativa.
          </h2>
          <p className="text-bruma leading-relaxed lg:pb-2 max-w-md lg:justify-self-end">
            No improvisamos ni nos perdemos en burocracia. Cada proyecto parte
            con un plan exhaustivo y avanza en ciclos cortos con entregables
            reales.
          </p>
        </div>

        <ol className="relative grid md:grid-cols-4 gap-10 md:gap-8">
          {/* La línea que conecta la secuencia. */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-[4.5px] left-0 right-0 h-px bg-linea"
          />
          {steps.map((step) => (
            <li key={step.number} className="relative">
              <span
                aria-hidden="true"
                className="hidden md:block absolute top-0 left-0 w-[9px] h-[9px] rounded-full bg-agua"
              />
              <div className="md:pt-10">
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="text-sm text-agua font-semibold font-display">
                    {step.number}
                  </span>
                  <h3 className="text-lg font-bold text-espuma tracking-[-0.01em]">
                    {step.title}
                  </h3>
                </div>
                <p className="text-sm text-bruma leading-relaxed mb-4">
                  {step.description}
                </p>
                <span className="text-xs text-humo">{step.duration}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}