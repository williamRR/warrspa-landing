"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Button from "./Button";
import Logo from "./Logo";

const navItems = [
  { name: "Servicios", href: "#servicios" },
  { name: "Proceso", href: "#proceso" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-bg-primary/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <a
            href="#inicio"
            aria-label="WarrSPA — inicio"
            className="text-text-primary hover:text-primary transition-colors"
          >
            <Logo size={22} />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-text-secondary hover:text-text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <Button variant="primary" size="sm" href="#contacto">
              Agendar llamada
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
            className="md:hidden text-text-secondary hover:text-text-primary transition-colors p-2"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-bg-primary/95 backdrop-blur-md border-t border-border">
          <div className="px-6 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-left text-sm text-text-secondary hover:text-text-primary py-2.5 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-3">
              <Button
                variant="primary"
                size="sm"
                href="#contacto"
                onClick={() => setIsOpen(false)}
                className="w-full"
              >
                Agendar llamada
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}