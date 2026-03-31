"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Mail, Clock, Send } from "lucide-react";
import Button from "./Button";

const stages = [
  "Tengo una idea",
  "Quiero un MVP",
  "Tengo producto, necesito escalar",
  "Migración / refactor",
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    stage: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contacto" className="py-24 bg-bg-primary">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            Contacto
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary mb-4 font-jakarta">
            Empecemos a construir algo real
          </h2>
          <p className="text-text-secondary max-w-xl leading-relaxed">
            Cuéntanos dónde estás y qué necesitas. Respondemos dentro de 24h
            hábiles.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            {sent ? (
              <div className="bg-bg-secondary border border-success/30 rounded-2xl p-12 text-center">
                <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-5 h-5 text-success" />
                </div>
                <h3 className="text-xl font-bold text-text-primary font-jakarta mb-2">
                  Mensaje recibido
                </h3>
                <p className="text-text-secondary text-sm">
                  Te respondemos en menos de 24h hábiles.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-bg-secondary border border-border rounded-2xl p-8 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-text-secondary mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      placeholder="Tu nombre"
                      className="w-full bg-bg-tertiary border border-border rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-text-secondary mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      placeholder="tu@empresa.com"
                      className="w-full bg-bg-tertiary border border-border rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-text-secondary mb-2">
                    Empresa (opcional)
                  </label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) =>
                      setForm({ ...form, company: e.target.value })
                    }
                    placeholder="Nombre de tu empresa"
                    className="w-full bg-bg-tertiary border border-border rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm text-text-secondary mb-3">
                    ¿En qué etapa estás?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {stages.map((stage) => (
                      <button
                        key={stage}
                        type="button"
                        onClick={() => setForm({ ...form, stage })}
                        className={`px-3 py-1.5 rounded-full text-sm border transition-colors ${
                          form.stage === stage
                            ? "bg-primary/10 text-primary border-primary/40"
                            : "border-border text-text-muted hover:border-primary/30 hover:text-text-secondary"
                        }`}
                      >
                        {stage}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-text-secondary mb-2">
                    ¿Qué necesitas?
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="Cuéntanos sobre tu proyecto, idea o problema..."
                    className="w-full bg-bg-tertiary border border-border rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  />
                </div>

                <Button variant="primary" size="lg" type="submit" icon={Send}>
                  Solicitar diagnóstico
                </Button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <a
              href="https://wa.me/56930023354"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-bg-secondary border border-border rounded-2xl p-6 hover:border-success/40 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-success/10 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-success" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-text-primary">
                    WhatsApp
                  </div>
                  <div className="text-xs text-text-muted">
                    Respuesta rápida
                  </div>
                </div>
              </div>
              <div className="text-sm text-text-secondary group-hover:text-text-primary transition-colors">
                +56 9 3002 3354
              </div>
            </a>

            <a
              href="mailto:william.rehel@gmail.com"
              className="group bg-bg-secondary border border-border rounded-2xl p-6 hover:border-accent-blue/40 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-accent-blue/10 rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 text-accent-blue" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-text-primary">
                    Email
                  </div>
                  <div className="text-xs text-text-muted">
                    Para conversaciones formales
                  </div>
                </div>
              </div>
              <div className="text-sm text-text-secondary group-hover:text-text-primary transition-colors">
                william.rehel@gmail.com
              </div>
            </a>

            <div className="bg-bg-secondary border border-border rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div className="text-sm font-semibold text-text-primary">
                  Tiempo de respuesta
                </div>
              </div>
              <p className="text-sm text-text-secondary">
                Respondemos en{" "}
                <span className="text-text-primary font-medium">
                  menos de 24h hábiles
                </span>
                . Si es urgente, WhatsApp es la vía más rápida.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
