interface LogoProps {
  /** Altura del símbolo en px. El lockup escala proporcionalmente. */
  size?: number;
  /** Muestra la palabra además del símbolo. */
  withWordmark?: boolean;
  className?: string;
}

/**
 * Marca WarrSPA: la W de un solo trazo + el punto de acento.
 * El trazo hereda el color del texto (`currentColor`); el punto usa el acento.
 */
export default function Logo({
  size = 24,
  withWordmark = true,
  className = "",
}: LogoProps) {
  return (
    <span
      className={`inline-flex items-center ${className}`}
      style={{ gap: size * 0.32 }}
    >
      <svg
        viewBox="0 0 54 48"
        fill="none"
        aria-hidden="true"
        style={{ height: size, width: "auto" }}
      >
        <path
          d="M6 12 L14 36 L23 17 L32 36 L40 12"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="49.5" cy="12" r="3.4" className="fill-primary" />
      </svg>
      {withWordmark && (
        <span
          className="font-display font-bold text-current"
          style={{
            fontSize: size * 0.92,
            letterSpacing: "-0.025em",
            lineHeight: 1,
          }}
        >
          Warr<span className="text-primary">SPA</span>
        </span>
      )}
    </span>
  );
}