import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/brand/Header";
import { Footer } from "@/components/brand/Footer";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/syna")({
  head: () => ({ meta: [
    { title: "SYNA — Group Intelligence System | Synapses Group" },
    { name: "description", content: "SYNA is the internal Group Intelligence System for Synapses Group: research, planning, memory, monitoring, software, and delegated execution." },
    { property: "og:title", content: "SYNA — Group Intelligence System" },
    { property: "og:description", content: "Internal intelligence infrastructure for Synapses Group." },
    { property: "og:url", content: "https://synapsesgroup.co/syna" },
  ], links: [{ rel: "canonical", href: "https://synapsesgroup.co/syna" }] }),
  component: SynaPage,
});

const capabilities = [
  ["01","Research","Synthesize information, monitor markets, investigate opportunities, and surface decision-relevant intelligence."],
  ["02","Memory","Maintain durable organizational context so decisions, relationships, systems, and lessons do not disappear between cycles."],
  ["03","Planning","Turn objectives into structured work, coordinate dependencies, and keep operating teams aligned."],
  ["04","Execution","Perform delegated software, operational, and administrative work within explicit permissions and review boundaries."],
  ["05","Monitoring","Watch defined signals across the Group and escalate exceptions rather than pretending to replace human judgment."],
];

function SynaPage() {
  return <div className="min-h-screen bg-background text-foreground"><Header /><main>
    <section className="border-b border-border bg-[#060606]"><div className="mx-auto max-w-5xl px-6 py-24 md:py-32"><div className="font-mono text-[0.6rem] uppercase tracking-[0.35em] text-dim">Synapses Intelligence · Hermes / SYNA</div><h1 className="mt-5 text-4xl font-semibold tracking-tight text-light md:text-7xl">The Group's<br /><span className="font-serif italic text-silver">intelligence layer.</span></h1><p className="mt-7 max-w-2xl text-base leading-relaxed text-silver md:text-xl">SYNA is the Group Intelligence System: internal infrastructure for research, planning, memory, monitoring, software, and delegated execution across Synapses Group.</p></div></section>
    <section className="mx-auto max-w-6xl px-6 py-24"><div className="grid gap-14 md:grid-cols-[0.75fr_1.25fr]"><div><div className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-dim">What it does</div><h2 className="mt-3 text-3xl font-semibold text-light md:text-5xl">Intelligence without pretending to be governance.</h2></div><div><div className="grid gap-px bg-border">{capabilities.map(([n,t,d])=><div key={n} className="grid gap-3 bg-background p-6 md:grid-cols-[45px_150px_1fr] md:items-start"><span className="font-mono text-[0.6rem] text-dim">{n}</span><h3 className="font-semibold uppercase tracking-wider text-light">{t}</h3><p className="text-sm leading-relaxed text-silver/80">{d}</p></div>)}</div></div></div></section>
    <section className="border-y border-border bg-[#060606]"><div className="mx-auto max-w-5xl px-6 py-24"><div className="grid gap-12 md:grid-cols-2"><div><div className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-dim">Authority model</div><h2 className="mt-3 text-3xl font-semibold text-light">Delegated, bounded, auditable.</h2></div><div className="space-y-4 text-sm leading-relaxed text-silver"><p>SYNA can act only within authority explicitly delegated by the people and systems responsible for the relevant work.</p><p>It is not a shareholder, director, officer, board member, or constitutional authority. It cannot create its own mandate or supersede human governance.</p><p className="text-light">The principle is simple: intelligence can accelerate the institution; it does not become the institution.</p></div></div></div></section>
    <section className="mx-auto max-w-4xl px-6 py-28 text-center"><p className="font-serif text-2xl italic leading-relaxed text-light md:text-4xl">“A company becomes more capable when its memory compounds.”</p><Link to="/companies" className="mt-8 inline-flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.2em] text-light hover:underline">See the Group architecture <ArrowRight className="h-3.5 w-3.5" /></Link></section>
  </main><Footer /></div>;
}
