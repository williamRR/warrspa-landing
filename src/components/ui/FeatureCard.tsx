'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  index: number
}

export default function FeatureCard({ icon: Icon, title, description, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative"
    >
      {/* Glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-300"></div>
      
      {/* Card content */}
      <div className="relative bg-bg-secondary/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-8 h-full">
        {/* Icon container */}
        <div className="relative mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-8 h-8 text-white" />
          </div>
          
          {/* Floating particles */}
          <motion.div
            className="absolute -top-1 -right-1 w-3 h-3 bg-secondary-400 rounded-full"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              delay: index * 0.3
            }}
          ></motion.div>
        </div>

        {/* Content */}
        <h3 className="text-2xl font-bold text-text-primary mb-4 group-hover:text-primary-300 transition-colors">
          {title}
        </h3>
        
        <p className="text-text-secondary leading-relaxed">
          {description}
        </p>

        {/* Hover indicator */}
        <motion.div
          className="absolute bottom-4 right-4 w-2 h-2 bg-primary-400 rounded-full opacity-0 group-hover:opacity-100"
          whileHover={{ scale: 1.5 }}
          transition={{ duration: 0.2 }}
        ></motion.div>
      </div>
    </motion.div>
  )
}
