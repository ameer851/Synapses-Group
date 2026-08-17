import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { BurstMark } from "./BurstMark";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "#mission", label: "Mission" },
  { href: "#architecture", label: "Architecture" },
  { href: "#vault", label: "Vault" },
  { href: "#entities", label: "Companies" },
  { href: "#media", label: "Media" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)} aria-label="Synapses Group home">
          <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden">
            <BurstMark size={64} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
          <span className="hidden flex-col leading-none sm:flex">
            <span className="text-[0.9rem] font-semibold uppercase tracking-[0.32em] text-light">Synapses</span>
            <span className="mt-1 text-[0.52rem] uppercase tracking-[0.4em] text-silver/70">Group</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="border border-transparent px-3.5 py-2 text-[0.62rem] uppercase tracking-[0.18em] text-silver/70 transition-colors hover:border-dim hover:text-light">{item.label}</a>
          ))}
          <Link to="/m1000" className="border border-transparent px-3.5 py-2 text-[0.62rem] uppercase tracking-[0.18em] text-silver/70 transition-colors hover:border-dim hover:text-light" activeProps={{ className: "border-dim text-light" }}>M1000</Link>
          <a href="#contact" className="ml-2 bg-light px-4 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-background transition-opacity hover:opacity-90">Connect</a>
        </nav>
        <button type="button" onClick={() => setOpen((v) => !v)} className="text-silver md:hidden" aria-label="Toggle navigation">{open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
      </div>
      {open && <nav className="border-t border-border bg-background md:hidden">
        {navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block border-b border-border px-6 py-4 text-xs uppercase tracking-[0.2em] text-silver/80">{item.label}</a>)}
        <Link to="/m1000" onClick={() => setOpen(false)} className="block border-b border-border px-6 py-4 text-xs uppercase tracking-[0.2em] text-silver/80">M1000</Link>
        <a href="#contact" onClick={() => setOpen(false)} className="block px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-light">Connect →</a>
      </nav>}
    </header>
  );
}
