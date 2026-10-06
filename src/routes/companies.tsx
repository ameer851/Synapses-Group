import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/brand/Header";
import { Footer } from "@/components/brand/Footer";
import { entities } from "@/data/entities";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/companies")({
  head: () => ({ meta: [
    { title: "Companies & Portfolio — Synapses Group" },
    { name: "description", content: "Explore the companies and strategic pillars of Synapses Group across capital, technology, energy, industries, media, bio, continuity, and intelligence." },
    { property: "og:title", content: "Companies & Portfolio — Synapses Group" },
    { property: "og:description", content: "The operating architecture behind Synapses Group." },
    { property: "og:url", content: "https://synapsesgroup.co/companies" },
  ], links: [{ rel: "canonical", href: "https://synapsesgroup.co/companies" }] }),
  component: CompaniesPage,
});

function CompaniesPage() {
  return <div className="min-h-screen bg-background text-foreground"><Header />
    <main>
      <section className="border-b border-border bg-[#060606]"><div className="mx-auto max-w-5xl px-6 py-24 md:py-32"><div className="font-mono text-[0.6rem] uppercase tracking-[0.35em] text-dim">Portfolio architecture</div><h1 className="mt-5 text-4xl font-semibold tracking-tight text-light md:text-7xl">Built as a system.<br /><span className="font-serif italic text-silver">Compounded as a whole.</span></h1><p className="mt-7 max-w-2xl text-base leading-relaxed text-silver md:text-xl">Synapses Group owns distinct businesses and capabilities designed to reinforce one another without collapsing their individual mandates.</p></div></section>
      <section className="mx-auto max-w-6xl px-6 py-24"><div className="grid gap-px bg-border md:grid-cols-2">{entities.map((e,i)=><article key={e.key} className="bg-background p-8 md:p-10"><div className="flex items-center justify-between gap-4"><span className="font-mono text-[0.6rem] uppercase tracking-[0.25em] text-dim">0{i+1} · {e.sector}</span><span className="font-mono text-[0.55rem] uppercase tracking-[0.2em]" style={{color:e.status.color}}>{e.status.label}</span></div><h2 className="mt-5 text-2xl font-semibold tracking-tight text-light">{e.name}</h2>{e.handle&&<div className="mt-1 font-mono text-[0.6rem] uppercase tracking-[0.25em]" style={{color:e.accent}}>{e.handle}</div>}<p className="mt-4 text-sm leading-relaxed text-silver">{e.detail}</p><div className="mt-6 border-t border-ghost pt-5"><div className="grid gap-3 sm:grid-cols-3">{e.metrics.map(m=><div key={m.label}><div className="font-mono text-[0.52rem] uppercase tracking-[0.2em] text-dim">{m.label}</div><div className="mt-1 text-xs text-light">{m.value}</div></div>)}</div></div></article>)}</div></section>
      <section className="border-y border-border bg-[#060606]"><div className="mx-auto max-w-4xl px-6 py-24 text-center"><div className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-dim">Intelligence layer</div><h2 className="mt-4 text-3xl font-semibold text-light md:text-5xl">SYNA connects the system.</h2><p className="mx-auto mt-5 max-w-2xl text-silver">Internal intelligence supports research, planning, memory, monitoring, software, and delegated execution across the Group—without holding corporate authority.</p><Link to="/syna" className="mt-8 inline-flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.2em] text-light hover:underline">Explore SYNA <ArrowRight className="h-3.5 w-3.5" /></Link></div></section>
    </main><Footer /></div>;
}
