import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad — WarrSPA",
  description:
    "Cómo WarrSPA recopila, usa y protege los datos personales de quienes contactan por el sitio warrspa.com, conforme a la Ley 21.719 de Chile.",
  alternates: {
    canonical: "https://www.warrspa.com/privacidad",
  },
};

const sections: { title: string; body: string[] }[] = [
  {
    title: "1. Responsable del tratamiento",
    body: [
      "WARRSPA SpA, RUT 77.346.791-9 (en adelante, «WarrSPA»), con domicilio en Santiago, Chile, es responsable del tratamiento de los datos personales recopilados a través del sitio web www.warrspa.com.",
      "Para cualquier consulta relacionada con este política o con el tratamiento de tus datos personales, escríbenos a hola@warrspa.com.",
    ],
  },
  {
    title: "2. Datos que recopilamos",
    body: [
      "Datos de contacto: cuando completas el formulario de contacto o nos escribes por correo electrónico o WhatsApp, recopilamos tu nombre, correo electrónico, teléfono (si decides entregarlo) y el contenido de tu mensaje.",
      "Datos técnicos: utilizamos Vercel Analytics y Cloudflare para medir tráfico de forma agregada. Estas herramientas no utilizan cookies de seguimiento ni recopilan información que identifique personalmente a los visitantes.",
    ],
  },
  {
    title: "3. Finalidades y base de licitud",
    body: [
      "Utilizamos tus datos exclusivamente para responder a tu consulta, coordinar una reunión, preparar una propuesta o ejecutar los servicios que nos contrates, según corresponda. La base del tratamiento es tu consentimiento al contactarnos y, en su caso, la ejecución de un contrato.",
      "No usamos tus datos para fines publicitarios ni los cedemos o vendemos a terceros con fines de marketing.",
    ],
  },
  {
    title: "4. Proveedores que nos apoyan",
    body: [
      "Para operar el sitio trabajamos con proveedores que pueden procesar datos técnicos en nuestro nombre: Vercel (hosting, Estados Unidos) y Cloudflare (red y protección, Estados Unidos). Ambos aplican medidas de seguridad y cláusulas contractuales de transferencia internacional de datos.",
    ],
  },
  {
    title: "5. Conservación",
    body: [
      "Conservamos los datos de contacto mientras exista una relación comercial o hasta que solicites su eliminación. Si no se concreta un proyecto, eliminamos la correspondencia a más tardar 24 meses después del último contacto.",
    ],
  },
  {
    title: "6. Tus derechos",
    body: [
      "Conforme a la Ley N° 21.719 sobre Protección de la Vida Privada de Chile, puedes ejercer en todo momento tus derechos de acceso, rectificación, cancelación, oposición y portabilidad sobre tus datos personales, así como solicitar la eliminación de los mismos.",
      "Para ejercerlos, escríbenos a hola@warrspa.com e identificando los datos u operaciones de las que se trate. Responderemos dentro del plazo legal.",
    ],
  },
  {
    title: "7. Seguridad",
    body: [
      "Aplicamos medidas de seguridad técnicas y organizativas razonables para proteger tus datos contra acceso no autorizado, pérdida o alteración, incluyendo cifrado en tránsito (HTTPS) y acceso restringido a la información.",
    ],
  },
  {
    title: "8. Cambios en esta política",
    body: [
      "Podemos actualizar esta política para reflejar cambios en el sitio o en la normativa. La versión publicada en esta página indica la fecha de última actualización y constituye la versión vigente.",
    ],
  },
];

export default function PrivacidadPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="font-display text-3xl md:text-4xl font-semibold text-text-primary mb-3">
        Política de Privacidad
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