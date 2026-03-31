"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Button from "./Button";

const navItems = [
  { name: "Servicios", href: "servicios" },
  { name: "Proceso", href: "proceso" },
  { name: "Portfolio", href: "portfolio" },
  { name: "Contacto", href: "contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-bg-primary/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => scrollTo("inicio")}
            className="text-xl font-bold text-text-primary font-jakarta hover:text-primary transition-colors"
          >
            Warr<span className="text-primary">SPA</span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollTo(item.href)}
                className="text-sm text-text-secondary hover:text-text-primary transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="hidden md:block">
            <Button
              variant="primary"
              size="sm"
              onClick={() => scrollTo("contacto")}
            >
              Agendar llamada
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-text-secondary hover:text-text-primary transition-colors"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-bg-primary/95 backdrop-blur-md border-t border-border"
        >
          <div className="px-6 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollTo(item.href)}
                className="text-left text-sm text-text-secondary hover:text-text-primary py-2.5 transition-colors"
              >
                {item.name}
              </button>
            ))}
            <div className="pt-3">
              <Button
                variant="primary"
                size="sm"
                onClick={() => scrollTo("contacto")}
                className="w-full"
              >
                Agendar llamada
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
