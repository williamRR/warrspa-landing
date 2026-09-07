import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.warrspa.com"),
  title: "WarrSPA — Desarrollo de Software a Medida para Empresas",
  description:
    "Diseñamos y desarrollamos software a medida listo para operar y escalar: MVPs, SaaS y plataformas B2B con Next.js, TypeScript y Supabase. Desde Santiago, Chile.",
  alternates: {
    canonical: "https://www.warrspa.com/",
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://www.warrspa.com/",
    siteName: "WarrSPA",
    title: "WarrSPA — Desarrollo de Software a Medida para Empresas",
    description:
      "MVPs, SaaS y plataformas B2B con Next.js, TypeScript y Supabase. Desde Santiago, Chile.",
  },
  twitter: {
    card: "summary_large_image",
    title: "WarrSPA — Desarrollo de Software a Medida para Empresas",
    description:
      "MVPs, SaaS y plataformas B2B con Next.js, TypeScript y Supabase. Desde Santiago, Chile.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://www.warrspa.com/#organization",
      name: "WarrSPA",
      legalName: "WARRSPA SpA",
      taxID: "77.346.791-9",
      url: "https://www.warrspa.com/",
      description:
        "Agencia de desarrollo de software a medida para empresas: MVPs, SaaS y plataformas B2B con Next.js, TypeScript y Supabase.",
      email: "hola@warrspa.com",
      telephone: "+56930023354",
      image: "https://www.warrspa.com/opengraph-image",
      logo: "https://www.warrspa.com/icon.svg",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Santiago",
        addressRegion: "RM",
        addressCountry: "CL",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: "+56930023354",
        url: "https://wa.me/56930023354",
      },
      areaServed: { "@type": "Country", name: "Chile" },
      sameAs: ["https://github.com/williamRR"],
      knowsAbout: [
        "Next.js",
        "TypeScript",
        "Supabase",
        "SaaS",
        "MVP",
        "Desarrollo de software a medida",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.warrspa.com/#website",
      url: "https://www.warrspa.com/",
      name: "WarrSPA",
      inLanguage: "es",
      publisher: { "@id": "https://www.warrspa.com/#organization" },
    },
    {
      "@type": "WebPage",
      "@id": "https://www.warrspa.com/#webpage",
      url: "https://www.warrspa.com/",
      name: "WarrSPA — Desarrollo de Software a Medida para Empresas",
      description:
        "MVPs, SaaS y plataformas B2B con Next.js, TypeScript y Supabase. Desde Santiago, Chile.",
      inLanguage: "es",
      isPartOf: { "@id": "https://www.warrspa.com/#website" },
      about: { "@id": "https://www.warrspa.com/#organization" },
      dateModified: "2026-09-07",
      primaryImageOfPage: "https://www.warrspa.com/opengraph-image",
    },
    {
      // FAQPage: sin beneficio SERP en Google (rich results retirados 2026-05-07);
      // se incluye para extracción por motores AI y sistemas no-Google.
      "@type": "FAQPage",
      "@id": "https://www.warrspa.com/#faq",
      isPartOf: { "@id": "https://www.warrspa.com/#webpage" },
      inLanguage: "es",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Cuánto tiempo toma lanzar un MVP?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Depende de la complejidad, pero la mayoría de los MVPs salen en 6–10 semanas. Empezamos con un discovery de 1–2 semanas para definir exactamente qué se va a construir antes de estimar tiempos.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cómo es el proceso de trabajo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Planificación exhaustiva al inicio (discovery, arquitectura, criterios de éxito), luego ejecución en ciclos semanales con entregables reales. Tú tienes visibilidad completa del avance en todo momento.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué pasa después del lanzamiento?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "El lanzamiento es el inicio, no el fin. Ofrecemos continuidad: monitoreo, iteración basada en feedback real de usuarios y planificación del roadmap de crecimiento.",
          },
        },
        {
          "@type": "Question",
          name: "¿Trabajan con contrato?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí, siempre. El contrato define el alcance, los entregables, los plazos y el ownership del código — que es tuyo desde el primer día. Sin contrato no empezamos.",
          },
        },
        {
          "@type": "Question",
          name: "¿Puedo escalar el equipo si el proyecto crece?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutamente. Nuestra arquitectura está diseñada para escalar tanto en usuarios como en equipo técnico. Si el producto crece, definimos juntos cómo evoluciona el equipo y el stack.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué stack usan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Next.js 15, TypeScript, Supabase y TailwindCSS como base. Integramos MercadoPago, Stripe, React Native y otras herramientas según el proyecto. No usamos tecnologías experimentales sin haberlas probado en producción primero.",
          },
        },
      ],
    },
    {
      "@type": "Service",
      "@id": "https://www.warrspa.com/#service-custom-development",
      name: "Custom Development",
      serviceType: "Desarrollo de software a medida",
      description:
        "Desarrollo de software a medida con stack moderno: web y mobile apps, APIs y backend, diseño de base de datos y optimización de performance.",
      provider: { "@id": "https://www.warrspa.com/#organization" },
      areaServed: { "@type": "Country", name: "Chile" },
    },
    {
      "@type": "Service",
      "@id": "https://www.warrspa.com/#service-saas-consulting",
      name: "SaaS Consulting",
      serviceType: "Consultoría SaaS",
      description:
        "Diseño, validación y construcción de productos SaaS: estrategia de producto, modelos de monetización, growth engineering y validación de mercado.",
      provider: { "@id": "https://www.warrspa.com/#organization" },
      areaServed: { "@type": "Country", name: "Chile" },
    },
    {
      "@type": "Service",
      "@id": "https://www.warrspa.com/#service-mvp-to-scale",
      name: "MVP to Scale",
      serviceType: "Desarrollo y escalado de MVP",
      description:
        "De prototipo funcional a plataforma estable: prototipado rápido, user testing, planificación de escalabilidad y gestión de deuda técnica.",
      provider: { "@id": "https://www.warrspa.com/#organization" },
      areaServed: { "@type": "Country", name: "Chile" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} ${sora.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="relative">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
