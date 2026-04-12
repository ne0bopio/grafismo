export function SectionHead({
  label,
  num,
  darkBg = false,
}: {
  label: string;
  num: string;
  darkBg?: boolean;
}) {
  return (
    <div
      className="grid grid-cols-[auto_1fr_auto] items-center gap-5 py-6 font-mono-g text-[11px] font-medium tracking-[0.14em] uppercase"
      style={{
        color: darkBg ? "var(--stone-2)" : "var(--stone)",
        borderTop: darkBg
          ? "1px solid rgba(244,241,234,0.14)"
          : "1px solid var(--border)",
      }}
    >
      <span style={{ color: darkBg ? "var(--cream)" : "var(--ink)" }}>
        {label}
      </span>
      <span
        className="h-px"
        style={{
          background: darkBg ? "rgba(244,241,234,0.14)" : "var(--border)",
        }}
      />
      <span style={{ color: "var(--stone-2)" }}>{num}</span>
    </div>
  );
}
