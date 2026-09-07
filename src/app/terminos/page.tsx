import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones — WarrSPA",
  description:
    "Términos y condiciones de uso del sitio warrspa.com y de los servicios de desarrollo de software de WARRSPA SpA, Chile.",
  alternates: {
    canonical: "https://www.warrspa.com/terminos",
  },
};

const sections: { title: string; body: string[] }[] = [
  {
    title: "1. Objeto",
    body: [
      "Estos términos y condiciones regulan el uso del sitio web www.warrspa.com (el «Sitio»), operado por WARRSPA SpA («WarrSPA»), y establecen las condiciones generales bajo las cuales se presentan los servicios de desarrollo de software a medida ofrecidos por WarrSPA.",
      "Al navegar el Sitio o contactarnos a través de él, aceptas estos términos.",
    ],
  },
  {
    title: "2. Servicios",
    body: [
      "WarrSPA ofrece servicios de desarrollo de software a medida, consultoría SaaS y desarrollo y escalado de MVP, dirigidos a empresas. Las descripciones, alcances y plazos presentados en el Sitio son referenciales e informativos.",
      "Cada proyecto se regirá por un contrato individual escrito entre WarrSPA y el cliente, el que definirá alcance, entregables, plazos, precios, garantías y propiedad intelectual. En caso de conflicto, prevalece siempre lo estipulado en dicho contrato.",
    ],
  },
  {
    title: "3. Propiedad intelectual",
    body: [
      "El contenido del Sitio (textos, diseño, marca, logotipo y código fuente del propio sitio) es titularidad de WarrSPA y no puede reproducirse sin autorización escrita.",
      "Respecto de los desarrollos hechos a medida para clientes, la titularidad y licencias del código se establecen en cada contrato. Salvo pacto distinto, el cliente recibe la propiedad del código entregado una vez cumplidas las obligaciones de pago.",
    ],
  },
  {
    title: "4. Información del Sitio",
    body: [
      "Nos esmeramos en que la información publicada sea precisa y actualizada, pero no garantizamos que esté libre de errores. Las estimaciones de tiempos, precios o resultados expuestas en el Sitio o en conversaciones previas son referenciales y no constituyen una oferta vinculante.",
    ],
  },
  {
    title: "5. Enlaces a terceros",
    body: [
      "El Sitio puede contener enlaces a sitios de terceros (por ejemplo, GitHub, portafolio o WhatsApp). No somos responsables por sus contenidos, políticas o prácticas; te recomendamos revisar los términos de cada uno.",
    ],
  },
  {
    title: "6. Limitación de responsabilidad",
    body: [
      "WarrSPA no responde por daños indirectos derivados del uso del Sitio. La responsabilidad por los servicios contratados se rige exclusivamente por el contrato correspondiente y por la normativa chilena aplicable.",
    ],
  },
  {
    title: "7. Legislación y jurisdicción",
    body: [
      "Estos términos se rigen por la legislación de la República de Chile. Cualquier controversia derivada de su aplicación se someterá a los tribunales ordinarios de justicia de Santiago, Chile.",
    ],
  },
  {
    title: "8. Contacto",
    body: [
      "Para preguntas sobre estos términos, escríbenos a hola@warrspa.com.",
    ],
  },
];

export default function TerminosPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="font-display text-3xl md:text-4xl font-semibold text-text-primary mb-3">
        Términos y Condiciones
      </h1>
      <p className="text-sm text-text-muted mb-12">
        Última actualización: 7 de septiembre de 2026
      </p>

      <div className="space-y-10">
        {sections.map((s) => (
          <section key={s.title}>
            <h2 className="font-display text-lg font-semibold text-text-primary mb-3">
              {s.title}
            </h2>
            <div className="space-y-3">
              {s.body.map((p, i) => (
                <p
                  key={i}
                  className="text-sm md:text-base text-text-secondary leading-relaxed"
                >
                  {p}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}