"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Button from "./Button";

/**
 * El momento de marca: la W se dibuja a un solo trazo y el punto cae
 * como gota con una onda. Es la única animación orquestada del sitio.
 */
function WMark() {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <svg
        viewBox="0 0 118 50"
        fill="none"
        aria-hidden="true"
        className="h-12 w-auto"
      >
        <path
          d="M4 6 L24 44 L46 12 L68 44 L88 6"
          stroke="var(--espuma)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="110" cy="6" r="5" fill="var(--agua)" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 118 50"
      fill="none"
      aria-hidden="true"
      className="h-12 w-auto"
    >
      <motion.path
        d="M4 6 L24 44 L46 12 L68 44 L88 6"
        stroke="var(--espuma)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1], delay: 0.2 }}
      />
      <motion.circle
        cx="110"
        cy="6"
        r="5"
        fill="var(--agua)"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          delay: 1.05,
          type: "spring",
          stiffness: 500,
          damping: 22,
        }}
        style={{ transformOrigin: "110px 6px" }}
      />
      {/* La onda de la gota al tocar el agua. */}
      <motion.circle
        cx="110"
        cy="6"
        r="5"
        stroke="var(--agua)"
        fill="none"
        initial={{ scale: 1, opacity: 0 }}
        animate={{ scale: [1, 3.4], opacity: [0.6, 0] }}
        transition={{ delay: 1.15, duration: 0.9, ease: "easeOut" }}
        style={{ transformOrigin: "110px 6px" }}
      />
    </svg>
  );
}

/** Marco de navegador con la identidad del producto, no adornos. */
function MarcoProducto({
  nombre,
  url,
  children,
  className = "",
}: {
  nombre: string;
  url: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-tinta-2 border border-linea rounded-xl overflow-hidden shadow-2xl shadow-black/40 ${className}`}
    >
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-linea">
        <span className="text-xs text-bruma">
          <span className="text-espuma font-medium">{nombre}</span> — {url}
        </span>
        <span className="flex items-center gap-1.5 text-xs text-bruma">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-agua opacity-60 animate-ping" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-agua" />
          </span>
          En producción
        </span>
      </div>
      {children}
    </div>
  );
}

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const revelar = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: {
            duration: 0.7,
            delay,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
          },
        };

  return (
    <section
      id="inicio"
      className="relative overflow-hidden flex items-center pt-16 min-h-screen"
    >
      {/* Una sola caída de luz sobre el agua. Nada más. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% -10%, rgba(53, 212, 199, 0.07), transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-12 items-center">
          <div>
            <motion.div {...revelar(0)} className="mb-8">
              <WMark />
            </motion.div>

            <motion.h1
              {...revelar(0.25)}
              className="text-[clamp(2.5rem,5.4vw,4.25rem)] font-bold leading-[1.04] tracking-[-0.03em] text-espuma mb-7 max-w-[13ch]"
            >
              Diseñamos y desarrollamos software a medida listo para operar y
              escalar
              <span className="text-agua">.</span>
            </motion.h1>

            <motion.p
              {...revelar(0.4)}
              className="text-lg text-bruma leading-relaxed mb-10 max-w-lg"
            >
              MVPs, SaaS y plataformas B2B con Next.js, TypeScript y Supabase.
              Para empresas que necesitan lanzar rápido, validar con usuarios
              reales y crecer sin rehacer todo en seis meses. Desde Santiago de
              Chile.
            </motion.p>

            <motion.div
              {...revelar(0.55)}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Button
                variant="primary"
                size="lg"
                icon={ArrowRight}
                href="#contacto"
              >
                Agendar llamada
              </Button>
              <Button variant="secondary" size="lg" href="#portfolio">
                Ver proyectos
              </Button>
            </motion.div>
          </div>

          {/* Los productos reales, no una maqueta. */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: reduceMotion ? 0 : 0.6,
              ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            }}
            className="hidden lg:block relative pb-10"
          >
            <MarcoProducto nombre="MesaDigital" url="mesadigital.cl">
              <div className="h-[340px] overflow-hidden">
                <Image
                  src="/portfolio-mesadigital-full.png"
                  alt="Plataforma MesaDigital"
                  width={632}
                  height={2374}
                  priority
                  className="w-full h-auto"
                />
              </div>
            </MarcoProducto>

            <div className="absolute -bottom-0 -left-10 w-[46%]">
              <MarcoProducto nombre="Y4" url="y4.cl">
                <div className="h-[120px] overflow-hidden">
                  <Image
                    src="/portfolio-y4-full.png"
                    alt="Plataforma Y4"
                    width={280}
                    height={1122}
                    className="w-full h-auto"
                  />
                </div>
              </MarcoProducto>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}