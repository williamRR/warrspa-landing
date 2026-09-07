import { ImageResponse } from "next/og";

export const alt = "WarrSPA";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0B8B84",
        }}
      >
        <svg width="128" height="118" viewBox="0 0 54 54">
          <path
            d="M7 16 L15.5 40 L25 21 L34.5 40 L42 16"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="5.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="48.5" cy="16" r="3.6" fill="#FFFFFF" />
        </svg>
      </div>
    ),
    { ...size },
  );
}