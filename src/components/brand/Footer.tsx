import { Ticker } from "./Ticker";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-[#060606]">
      <Ticker />
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 md:flex-row">
        <div className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-dim">
          Synapses Group © 2026
        </div>
        <div className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-dim">
          Autonomous Intelligence · synapsesgroup.org
        </div>
      </div>
    </footer>
  );
}
