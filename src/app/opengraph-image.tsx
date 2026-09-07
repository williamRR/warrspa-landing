import { ImageResponse } from "next/og";

export const alt = "WarrSPA — Desarrollo de Software a Medida para Empresas";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #101416 0%, #1B2225 100%)",
          color: "#F2F4F4",
          fontFamily: "sans-serif",
        }}
      >
        {/* Símbolo: la W de un solo trazo + el punto */}
        <div style={{ display: "flex", alignItems: "center", gap: 24, marginBottom: 40 }}>
          <svg width="108" height="96" viewBox="0 0 54 48">
            <path
              d="M6 12 L14 36 L23 17 L32 36 L40 12"
              fill="none"
              stroke="#F2F4F4"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="49.5" cy="12" r="3.4" fill="#35D4C7" />
          </svg>
          <div style={{ display: "flex", fontSize: 44, fontWeight: 700, letterSpacing: "-0.02em" }}>
            Warr<span style={{ color: "#35D4C7" }}>SPA</span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontSize: 28,
            color: "#35D4C7",
            marginBottom: 24,
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 12,
              background: "#35D4C7",
              display: "flex",
            }}
          />
          Agencia de desarrollo B2B · Santiago, Chile
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 72,
            fontWeight: 700,
            lineHeight: 1.1,
            maxWidth: 1000,
          }}
        >
          <span>Diseñamos y desarrollamos</span>
          <span style={{ color: "#35D4C7" }}>
            software a medida listo para operar y escalar.
          </span>
        </div>
        <div
          style={{
            display: "flex",
            gap: 24,
            marginTop: 48,
            fontSize: 28,
            color: "#9AA5A6",
          }}
        >
          <span>Next.js</span>
          <span>·</span>
          <span>TypeScript</span>
          <span>·</span>
          <span>Supabase</span>
        </div>
      </div>
    ),
    size,
  );
}