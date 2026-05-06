const items = [
  "InwitHQ Media", "·", "Media Clipping", "·", "Synapses Software", "·",
  "Synapses Gaming", "·", "SYNA · AI CIO", "·",
  "Synapses Group", "·", "EST. 2026", "·",
];

export function Ticker() {
  const loop = [...items, ...items, ...items, ...items];
  return (
    <div className="overflow-hidden border-y border-border bg-ghost/40 py-3">
      <div className="flex w-max gap-12 animate-ticker whitespace-nowrap">
        {loop.map((t, i) => (
          <span
            key={i}
            className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-dim"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
