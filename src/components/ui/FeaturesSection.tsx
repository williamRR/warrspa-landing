'use client'

import { motion } from 'framer-motion'
import { Zap, Shield, Rocket, Sparkles, Code, Palette } from 'lucide-react'
import FeatureCard from './FeatureCard'

const features = [
  {
    icon: Zap,
    title: "Ultra Rápido",
    description: "Optimizado para velocidad y rendimiento excepcional en todas las plataformas."
  },
  {
    icon: Shield,
    title: "Súper Seguro",
    description: "Arquitectura robusta con las mejores prácticas de seguridad implementadas."
  },
  {
    icon: Rocket,
    title: "Escalable",
    description: "Diseñado para crecer contigo, desde startup hasta enterprise."
  },
  {
    icon: Sparkles,
    title: "Experiencia Mágica",
    description: "Interfaces intuitivas que deleitan a usuarios y desarrolladores."
  },
  {
    icon: Code,
    title: "Developer First",
    description: "Herramientas y APIs diseñadas pensando en la experiencia del desarrollador."
  },
  {
    icon: Palette,
    title: "Personalizable",
    description: "Totalmente customizable para adaptarse a tu marca y necesidades."
  }
]

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-bg-primary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, var(--primary-500) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <span className="inline-block px-4 py-2 bg-primary-500/20 text-primary-300 rounded-full text-sm font-medium border border-primary-500/30">
              ✨ Características
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-text-primary mb-6"
          >
            Potencia <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">Ilimitada</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-text-secondary max-w-3xl mx-auto"
          >
            Cada función está diseñada para maximizar tu productividad y crear experiencias excepcionales
          </motion.p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
