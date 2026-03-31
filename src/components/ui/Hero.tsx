"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Button from "./Button";

const stackItems = ["Next.js 15", "TypeScript", "Supabase", "React 19"];

function ProductPreview() {
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="bg-bg-secondary border border-border rounded-2xl p-5 shadow-2xl"
      >
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
            <span className="text-xs text-text-muted font-medium">
              MesaDigital — en producción
            </span>
          </div>
          <span className="text-xs text-text-muted">mesadigital.cl ↗</span>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-4">
          {[
            { value: "15+", label: "Restaurantes", color: "text-text-primary" },
            { value: "+200%", label: "Crecimiento", color: "text-success" },
            { value: "99.9%", label: "Uptime", color: "text-accent-blue" },
          ].map((m) => (
            <div
              key={m.label}
              className="bg-bg-tertiary rounded-xl p-3 text-center"
            >
              <div className={`text-xl font-bold font-jakarta ${m.color}`}>
                {m.value}
              </div>
              <div className="text-xs text-text-muted mt-0.5">{m.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-bg-tertiary rounded-xl p-3">
          <div className="text-xs text-text-muted mb-2">Stack</div>
          <div className="flex flex-wrap gap-1.5">
            {["Next.js", "TypeScript", "Supabase", "PWA", "React Native"].map(
              (tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 bg-primary/10 text-primary border border-primary/20 rounded text-xs"
                >
                  {tag}
                </span>
              ),
            )}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute -bottom-4 -left-6 bg-bg-secondary border border-border rounded-xl px-4 py-3 shadow-xl"
      >
        <div className="text-xs text-text-muted">
          Proyectos propios en producción
        </div>
        <div className="text-sm font-bold text-text-primary font-jakarta mt-0.5">
          MesaDigital · Y4
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute -top-3 -right-4 bg-primary text-bg-primary rounded-full px-3 py-1.5 text-xs font-bold shadow-lg"
      >
        Santiago, Chile
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="min-h-screen bg-bg-primary relative overflow-hidden flex items-center pt-16"
    >
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#14B8A6 1px, transparent 1px), linear-gradient(90deg, #14B8A6 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 rounded-full px-4 py-1.5 text-sm font-medium mb-8"
            >
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              Agencia de desarrollo B2B · Santiago, Chile
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-[56px] font-extrabold text-text-primary leading-[1.1] tracking-tight mb-6 font-jakarta"
            >
              Diseñamos y desarrollamos software B2B{" "}
              <span className="text-gradient-teal">
                listo para operar y escalar.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg text-text-secondary leading-relaxed mb-10 max-w-lg"
            >
              Creamos productos, MVPs y plataformas con Next.js, TypeScript y
              Supabase para empresas que necesitan lanzar rápido, validar con
              usuarios reales y crecer sin rehacer todo en seis meses.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 mb-8"
            >
              <Button
                variant="primary"
                size="lg"
                icon={ArrowRight}
                onClick={() => scrollTo("contacto")}
              >
                Agendar llamada
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => scrollTo("portfolio")}
              >
                Ver proyectos
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-text-muted"
            >
              {stackItems.map((item, i) => (
                <span key={item} className="flex items-center gap-2">
                  {i > 0 && <span className="text-border">·</span>}
                  {item}
                </span>
              ))}
            </motion.div>
          </div>

          <div className="hidden lg:block">
            <ProductPreview />
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5 text-text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
