/**
 * Grafismo brand mark — tri-sector labyrinth motif.
 * Three nested squares: industrial (outer), retail (mid), pharma (core).
 * Follows svg-icons skill production rules: viewBox 24, gradient strokes,
 * consistent weight, aria-hidden for decorative use.
 */
export function GrafismoMark({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="inline-block flex-none"
    >
      <rect
        x="1.5"
        y="1.5"
        width="21"
        height="21"
        stroke="var(--industrial)"
        strokeWidth="1.5"
      />
      <rect
        x="6"
        y="6"
        width="12"
        height="12"
        stroke="var(--retail)"
        strokeWidth="1.5"
      />
      <rect
        x="9.5"
        y="9.5"
        width="5"
        height="5"
        fill="var(--pharma)"
      />
    </svg>
  );
}

/**
 * Icon-only version for favicon/OG generation.
 * Self-contained with explicit hex colors (no CSS vars).
 */
export function GrafismoIcon({ size = 512 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1.5"
        y="1.5"
        width="21"
        height="21"
        stroke="#1E3A8A"
        strokeWidth="1.5"
      />
      <rect
        x="6"
        y="6"
        width="12"
        height="12"
        stroke="#E87722"
        strokeWidth="1.5"
      />
      <rect
        x="9.5"
        y="9.5"
        width="5"
        height="5"
        fill="#C8321F"
      />
    </svg>
  );
}
