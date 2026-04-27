import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { BurstMark } from "./BurstMark";
import { Menu, X } from "lucide-react";

const navItems = [
  { to: "/companies" as const, label: "Companies" },
  { to: "/about" as const, label: "About" },
  { to: "/contact" as const, label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-4" onClick={() => setOpen(false)}>
          <BurstMark size={52} />
          <span className="flex flex-col leading-none">
            <span className="text-lg font-semibold uppercase tracking-[0.32em] text-light">
              Synapses
            </span>
            <span className="mt-1 text-[0.6rem] uppercase tracking-[0.4em] text-silver/70">
              Group
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "text-light border-dim" }}
              inactiveProps={{ className: "text-silver/70 border-transparent hover:text-light" }}
              className="border px-4 py-2 text-[0.7rem] uppercase tracking-[0.2em] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-silver md:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-border md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              activeProps={{ className: "text-light" }}
              inactiveProps={{ className: "text-silver/70" }}
              className="block border-b border-border px-6 py-4 text-xs uppercase tracking-[0.2em]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
