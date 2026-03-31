"use client";

import Hero from "@/components/ui/Hero";
import ServicesSection from "@/components/ui/ServicesSection";
import ProcessSection from "@/components/ui/ProcessSection";
import PortfolioSection from "@/components/ui/PortfolioSection";
import FAQSection from "@/components/ui/FAQSection";
import ContactSection from "@/components/ui/ContactSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <ServicesSection />
      <ProcessSection />
      <PortfolioSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
}
