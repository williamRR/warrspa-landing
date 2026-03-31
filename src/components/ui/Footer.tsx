"use client";

import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-bg-secondary border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
          <div className="max-w-xs">
            <div className="text-xl font-bold text-text-primary font-jakarta mb-3">
              Warr<span className="text-primary">SPA</span>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">
              Desarrollo de software B2B desde Santiago, Chile.
              <br />
              Equipo pequeño, ejecución senior.
            </p>
          </div>

          <div className="flex gap-12">
            <div>
              <div className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-4">
                Servicios
              </div>
              <ul className="space-y-2.5">
                {["Custom Development", "SaaS Consulting", "MVP to Scale"].map(
                  (l) => (
                    <li key={l}>
                      <button
                        onClick={() => scrollTo("servicios")}
                        className="text-sm text-text-muted hover:text-text-secondary transition-colors"
                      >
                        {l}
                      </button>
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div>
              <div className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-4">
                Empresa
              </div>
              <ul className="space-y-2.5">
                {[
                  { label: "Portfolio", id: "portfolio" },
                  { label: "Proceso", id: "proceso" },
                  { label: "Contacto", id: "contacto" },
                ].map((l) => (
                  <li key={l.id}>
                    <button
                      onClick={() => scrollTo(l.id)}
                      className="text-sm text-text-muted hover:text-text-secondary transition-colors"
                    >
                      {l.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-border">
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} WarrSPA · Santiago, Chile
          </p>
          <div className="flex items-center gap-2">
            {[
              {
                icon: Github,
                href: "https://github.com/williamRR",
                label: "GitHub",
              },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Twitter, href: "#", label: "Twitter" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 flex items-center justify-center rounded-lg text-text-muted hover:text-text-primary border border-border hover:border-primary/30 transition-all"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
