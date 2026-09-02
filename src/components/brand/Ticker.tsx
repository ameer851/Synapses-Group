const items = [
  "SYNAPSES GROUP", "·", "BUILD", "·", "ACQUIRE", "·", "COMPOUND", "·",
  "CAPITAL", "·", "TECHNOLOGY", "·", "ENERGY", "·", "INDUSTRIES", "·",
  "MEDIA", "·", "BIO", "·", "CONTINUITY", "·", "VAULT", "·",
  "INTELLIGENCE", "·", "EST. 2026", "·",
];

export function Ticker() {
  const loop = [...items, ...items, ...items, ...items];
  return (
    <div className="overflow-hidden border-y border-border bg-ghost/40 py-3" aria-label="Synapses Group architecture">
      <div className="flex w-max gap-12 animate-ticker whitespace-nowrap">
        {loop.map((t, i) => (
          <span
            key={i}
            className={t === "·" ? "font-mono text-[0.65rem] text-silver/40" : "font-mono text-[0.65rem] uppercase tracking-[0.25em] text-dim"}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
