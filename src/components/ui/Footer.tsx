"use client";

import { Github } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-abisal border-t border-linea">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">
          <div className="max-w-xs">
            <div className="text-espuma mb-4">
              <Logo size={22} />
            </div>
            <p className="text-sm text-bruma leading-relaxed">
              Desarrollo de software B2B desde Santiago, Chile.
              <br />
              Equipo pequeño, ejecución senior.
            </p>
          </div>

          <div className="flex gap-16 lg:gap-24">
            <div>
              <div className="text-xs text-humo mb-4">Servicios</div>
              <ul className="space-y-2.5">
                {["Custom Development", "SaaS Consulting", "MVP to Scale"].map(
                  (l) => (
                    <li key={l}>
                      <a
                        href="#servicios"
                        className="text-sm text-bruma hover:text-espuma transition-colors"
                      >
                        {l}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div>
              <div className="text-xs text-humo mb-4">Empresa</div>
              <ul className="space-y-2.5">
                {[
                  { label: "Portfolio", id: "portfolio" },
                  { label: "Proceso", id: "proceso" },
                  { label: "Contacto", id: "contacto" },
                ].map((l) => (
                  <li key={l.id}>
                    <a
                      href={`#${l.id}`}
                      className="text-sm text-bruma hover:text-espuma transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-8 border-t border-linea">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6">
            <p className="text-xs text-humo order-2 sm:order-1">
              © {new Date().getFullYear()} WarrSPA SpA · RUT 77.346.791-9 ·
              Santiago, Chile
            </p>
            <div className="flex items-center gap-4 order-1 sm:order-2">
              <a
                href="/privacidad"
                className="text-xs text-humo hover:text-bruma transition-colors"
              >
                Privacidad
              </a>
              <a
                href="/terminos"
                className="text-xs text-humo hover:text-bruma transition-colors"
              >
                Términos
              </a>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/williamRR"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-8 h-8 flex items-center justify-center rounded-lg text-humo hover:text-espuma border border-linea hover:border-agua/40 transition-all"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}