"use client";

import { useState } from "react";
import { MessageCircle, Mail, Clock, Send } from "lucide-react";
import Button from "./Button";

const stages = [
  "Tengo una idea",
  "Quiero un MVP",
  "Tengo producto, necesito escalar",
  "Migración / refactor",
];

const inputClase =
  "w-full bg-claro-2 border border-linea-clara rounded-lg px-4 py-3 text-[15px] text-tinta-clara placeholder:text-bruma-clara focus:outline-none focus:border-profundo transition-colors";

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
    // Sin backend por ahora: el envío se hace vía cliente de correo con el
    // mensaje prellenado. Reemplazar por un endpoint real cuando exista.
    const subject = encodeURIComponent(
      `Consulta desde warrspa.com — ${form.name}${form.company ? ` (${form.company})` : ""}`,
    );
    const body = encodeURIComponent(
      [
        `Nombre: ${form.name}`,
        `Email: ${form.email}`,
        form.company ? `Empresa: ${form.company}` : null,
        form.stage ? `Etapa: ${form.stage}` : null,
        "",
        form.message,
      ]
        .filter((l) => l !== null)
        .join("\n"),
    );
    window.location.href = `mailto:hola@warrspa.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section
      id="contacto"
      className="superficie bg-claro text-tinta-clara py-24 lg:py-32"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 items-end mb-14">
          <h2 className="text-[clamp(2rem,3.6vw,3rem)] font-bold tracking-[-0.03em] leading-[1.08]">
            Empecemos a construir algo real
          </h2>
          <p className="text-bruma-clara leading-relaxed max-w-md lg:justify-self-end lg:pb-2">
            Cuéntanos dónde estás y qué necesitas. Respondemos dentro de 24h
            hábiles.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            {sent ? (
              <div className="bg-claro-2 border border-linea-clara rounded-2xl p-12 text-center">
                <div className="w-12 h-12 bg-profundo/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-5 h-5 text-profundo" />
                </div>
                <h3 className="text-xl font-bold mb-2">Casi listo</h3>
                <p className="text-bruma-clara text-[15px] leading-relaxed max-w-sm mx-auto">
                  Abrimos tu cliente de correo con el mensaje prellenado — solo
                  envía el email y te respondemos en menos de 24h hábiles. Si
                  prefieres, escríbenos directo por WhatsApp.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-claro-2 border border-linea-clara rounded-2xl p-8 space-y-6"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="c-nombre" className="block text-sm mb-2">
                      Nombre
                    </label>
                    <input
                      id="c-nombre"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      placeholder="Tu nombre"
                      className={inputClase}
                    />
                  </div>
                  <div>
                    <label htmlFor="c-email" className="block text-sm mb-2">
                      Email
                    </label>
                    <input
                      id="c-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      placeholder="tu@empresa.com"
                      className={inputClase}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="c-empresa" className="block text-sm mb-2">
                    Empresa <span className="text-bruma-clara">(opcional)</span>
                  </label>
                  <input
                    id="c-empresa"
                    type="text"
                    value={form.company}
                    onChange={(e) =>
                      setForm({ ...form, company: e.target.value })
                    }
                    placeholder="Nombre de tu empresa"
                    className={inputClase}
                  />
                </div>

                <fieldset>
                  <legend className="text-sm mb-3">
                    ¿En qué etapa estás?
                  </legend>
                  <div className="flex flex-wrap gap-2">
                    {stages.map((stage) => (
                      <button
                        key={stage}
                        type="button"
                        aria-pressed={form.stage === stage}
                        onClick={() => setForm({ ...form, stage })}
                        className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                          form.stage === stage
                            ? "bg-profundo text-white border-profundo"
                            : "border-linea-clara text-bruma-clara hover:border-tinta-clara/40 hover:text-tinta-clara"
                        }`}
                      >
                        {stage}
                      </button>
                    ))}
                  </div>
                </fieldset>

                <div>
                  <label htmlFor="c-mensaje" className="block text-sm mb-2">
                    ¿Qué necesitas?
                  </label>
                  <textarea
                    id="c-mensaje"
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="Cuéntanos sobre tu proyecto, idea o problema..."
                    className={`${inputClase} resize-none`}
                  />
                </div>

                <Button variant="solido" size="lg" type="submit" icon={Send}>
                  Solicitar diagnóstico
                </Button>
              </form>
            )}
          </div>

          <div className="lg:col-span-2 flex flex-col gap-4">
            <a
              href="https://wa.me/56930023354"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-claro-2 border border-linea-clara rounded-2xl p-6 hover:border-profundo/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-profundo/10 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-profundo" />
                </div>
                <div>
                  <div className="text-[15px] font-semibold">WhatsApp</div>
                  <div className="text-xs text-bruma-clara">
                    Respuesta rápida
                  </div>
                </div>
              </div>
              <div className="text-[15px] group-hover:text-profundo transition-colors">
                +56 9 3002 3354
              </div>
            </a>

            <a
              href="mailto:hola@warrspa.com"
              className="group bg-claro-2 border border-linea-clara rounded-2xl p-6 hover:border-profundo/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-profundo/10 rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 text-profundo" />
                </div>
                <div>
                  <div className="text-[15px] font-semibold">Email</div>
                  <div className="text-xs text-bruma-clara">
                    Para conversaciones formales
                  </div>
                </div>
              </div>
              <div className="text-[15px] group-hover:text-profundo transition-colors">
                hola@warrspa.com
              </div>
            </a>

            <div className="bg-claro-2 border border-linea-clara rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-profundo/10 rounded-xl flex items-center justify-center">
                  <Clock className="w-5 h-5 text-profundo" />
                </div>
                <div className="text-[15px] font-semibold">
                  Tiempo de respuesta
                </div>
              </div>
              <p className="text-[15px] text-bruma-clara leading-relaxed">
                Respondemos en{" "}
                <span className="text-tinta-clara font-medium">
                  menos de 24h hábiles
                </span>
                . Si es urgente, WhatsApp es la vía más rápida.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}