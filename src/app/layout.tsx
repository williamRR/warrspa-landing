import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
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
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://www.warrspa.com",
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
      url: "https://www.warrspa.com/",
      description:
        "Agencia de desarrollo de software a medida para empresas: MVPs, SaaS y plataformas B2B con Next.js, TypeScript y Supabase.",
      email: "hola@warrspa.com",
      telephone: "+56930023354",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Santiago",
        addressCountry: "CL",
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
      </body>
    </html>
  );
}
