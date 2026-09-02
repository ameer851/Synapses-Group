import { createFileRoute } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Header } from "@/components/brand/Header";
import { Footer } from "@/components/brand/Footer";
import { Ticker } from "@/components/brand/Ticker";
import { NodeMark } from "@/components/brand/NodeMark";
import { NeuralPulseCanvas } from "@/components/brand/NeuralPulseCanvas";
import { entities } from "@/data/entities";
import { ArrowRight, ChevronDown, Mail } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Synapses Group — Build. Acquire. Compound." },
      { name: "description", content: "Synapses Group is a diversified holding company building and acquiring businesses across technology, energy, infrastructure, media, bio, and continuity." },
      { property: "og:title", content: "Synapses Group — Build. Acquire. Compound." },
      { property: "og:description", content: "A diversified holding company building and acquiring exceptional businesses across strategic industries." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return <div className="min-h-screen bg-background text-foreground"><Header /><Hero /><Ticker /><Mission /><Architecture /><Continuity /><Media /><Entities /><OperatingModel /><Contact /><Footer /></div>;
}

function Hero() {
  return <section className="relative overflow-hidden border-b border-border bg-[#060606]">
    <div className="absolute inset-0 opacity-[0.18]" style={{ backgroundImage: "linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
    <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, transparent 30%, #060606 100%)" }} />
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.04]"><NodeMark size={520} bright /></div>
    <div className="relative mx-auto max-w-5xl px-6 pt-16 pb-20 text-center md:pt-28 md:pb-36">
      <div className="animate-fade-up font-mono text-[0.62rem] uppercase tracking-[0.35em] text-dim">Synapses Group · Diversified Holding Company · Est. 2026</div>
      <div className="mt-6 flex justify-center animate-fade-up max-sm:hidden md:mt-10" style={{ animationDelay: "0.1s" }}><NeuralPulseCanvas /></div>
      <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-light md:mt-10 md:text-7xl animate-fade-up" style={{ animationDelay: "0.2s" }}>Build. <span className="font-serif italic text-silver">Acquire.</span> Compound.</h1>
      <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-silver md:text-xl animate-fade-up" style={{ animationDelay: "0.3s" }}>Synapses Group builds, acquires, and compounds exceptional businesses across technology, energy, infrastructure, media, bio, and continuity.</p>
      <div className="mt-7 flex flex-wrap justify-center gap-3 animate-fade-up md:mt-10" style={{ animationDelay: "0.4s" }}><a href="#architecture" className="inline-flex items-center gap-2 bg-light px-7 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-background transition-opacity hover:opacity-90">Explore Synapses <ChevronDown className="h-3.5 w-3.5" /></a><a href="#contact" className="inline-flex items-center border border-ghost px-7 py-3 text-[0.7rem] uppercase tracking-[0.2em] text-silver transition-colors hover:border-dim hover:text-light">Contact</a></div>
    </div>
  </section>;
}

function Mission() {
  const layers = [["01", "Build", "Create companies, products, and capabilities from first principles."], ["02", "Cash Flow", "Turn useful businesses into durable, compounding economic engines."], ["03", "Acquire", "Buy exceptional businesses and strategic assets when ownership creates advantage."], ["04", "Compound", "Reinvest capital, talent, technology, and distribution across the Group."], ["05", "Allocate", "Move resources toward the highest-quality long-term opportunities."]];
  return <section id="mission" className="mx-auto max-w-6xl px-6 py-24 scroll-mt-24"><div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-start"><div><div className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-dim">The thesis</div><h2 className="mt-3 text-3xl font-semibold tracking-tight text-light md:text-5xl">Own the system.<br /><span className="font-serif italic text-silver">Compound the whole.</span></h2></div><div><p className="text-base leading-relaxed text-silver md:text-lg">Synapses Group is built as a long-term owner. We build companies, create cash flow, acquire when the economics are right, and continuously allocate capital toward durable advantage.</p><div className="mt-8 grid gap-px bg-border">{layers.map(([n, title, body]) => <div key={n} className="grid gap-3 bg-background p-5 md:grid-cols-[48px_150px_1fr] md:items-center"><span className="font-mono text-[0.6rem] text-dim">{n}</span><span className="font-semibold uppercase tracking-wider text-light">{title}</span><span className="text-sm text-silver/80">{body}</span></div>)}</div></div></div></section>;
}

function Architecture() {
  const pillars = [
    ["01", "Synapses Capital", "Capital", "The allocation engine for public markets, private markets, acquisitions, and internal capital."],
    ["02", "Synapses Technology", "Technology", "The technology portfolio spanning AI, software, interfaces, robotics, and emerging systems."],
    ["03", "Synapses Energy", "Energy", "Power generation, storage, grid infrastructure, and strategic energy systems."],
    ["04", "Synapses Industries", "Industries", "Industrial and critical-infrastructure businesses, beginning with defense and government contracting."],
    ["05", "Synapses Media", "Media", "A communications and distribution capability across film, journalism, education, games, and culture."],
    ["06", "Synapses Bio", "Bio", "A long-horizon research vehicle exploring biology, longevity, regenerative systems, and future human technologies."],
  ];
  return <section id="architecture" className="border-y border-border bg-[#060606] scroll-mt-24"><div className="mx-auto max-w-6xl px-6 py-24"><div className="max-w-3xl"><div className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-dim">The architecture</div><h2 className="mt-3 text-3xl font-semibold tracking-tight text-light md:text-5xl">A holding company built to compound.</h2><p className="mt-4 text-silver">The Group owns and allocates across distinct operating pillars. Continuity is a dedicated company inside the Group—not the definition of the parent.</p></div><div className="mt-12 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">{pillars.map(([index, title, label, body]) => <div key={index} className="bg-background p-7 md:p-8"><div className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-dim">{index} · {label}</div><h3 className="mt-3 text-2xl font-semibold tracking-tight text-light">{title}</h3><p className="mt-3 text-sm leading-relaxed text-silver/80">{body}</p></div>)}</div><div className="mt-px bg-border"><div className="bg-background p-7 md:flex md:items-end md:justify-between md:gap-10 md:p-9"><div><div className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-dim">07 · Continuity Company</div><h3 className="mt-3 text-2xl font-semibold tracking-tight text-light md:text-3xl">Synapses Continuity</h3><p className="mt-3 max-w-2xl text-sm leading-relaxed text-silver/80">The dedicated company for preserving, extending, connecting, and carrying human identity, memory, and capability across generations.</p></div><a href="#continuity" className="mt-6 inline-flex shrink-0 items-center gap-2 text-[0.65rem] uppercase tracking-[0.2em] text-light hover:underline md:mt-0">Explore Continuity <ArrowRight className="h-3.5 w-3.5" /></a></div></div></div></section>;
}

function Continuity() {
  const guarantees = ["Ownership", "Survivability", "Succession", "Authenticity", "Revocation"];
  return <section id="continuity" className="mx-auto max-w-6xl px-6 py-28 scroll-mt-24"><div className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:items-center"><div><div className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-dim">Synapses Continuity</div><h2 className="mt-3 text-3xl font-semibold tracking-tight text-light md:text-5xl">The mission company.<br /><span className="font-serif italic text-silver">The Vault is its core.</span></h2></div><div><p className="text-base leading-relaxed text-silver md:text-lg">Continuity is a company within Synapses Group dedicated to systems that preserve authenticated memory, identity, provenance, succession, and inheritance across time.</p><div className="mt-7 grid grid-cols-2 gap-px bg-border sm:grid-cols-5">{guarantees.map((g, i) => <div key={g} className="bg-background p-4"><div className="font-mono text-[0.55rem] text-dim">0{i + 1}</div><div className="mt-2 text-sm font-semibold text-light">{g}</div></div>)}</div><div className="mt-7 border border-ghost bg-card p-5"><div className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-dim">Flagship infrastructure</div><div className="mt-2 text-xl font-semibold text-light">Synapses Vault</div><p className="mt-2 text-sm leading-relaxed text-silver/80">Inheritance-grade trust infrastructure designed so protected records and provenance can survive changes in technology, ownership, management, and time.</p></div></div></div></section>;
}

function Media() {
  return <section id="media" className="border-y border-border bg-[#060606] scroll-mt-24"><div className="mx-auto max-w-6xl px-6 py-24"><div className="grid gap-10 md:grid-cols-[1fr_1.25fr] md:items-center"><div><div className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-dim">Synapses Media</div><h2 className="mt-3 text-3xl font-semibold tracking-tight text-light md:text-5xl">The narrative layer.</h2></div><div><p className="text-base leading-relaxed text-silver md:text-lg">Media remains part of Synapses—but no longer as the definition of the Group. We use film, journalism, documentaries, podcasts, education, games, and cultural storytelling to explain our work, build trust, and participate in the ideas shaping the future.</p><div className="mt-7 grid gap-px bg-border sm:grid-cols-3"><MediaItem title="Stories" body="Culture, technology, people." /><MediaItem title="Research" body="Ideas worth understanding." /><MediaItem title="Reach" body="Distribution at global scale." /></div></div></div></div></section>;
}
function MediaItem({ title, body }: { title: string; body: string }) { return <div className="bg-background p-5"><div className="text-sm font-semibold uppercase tracking-wider text-light">{title}</div><div className="mt-2 text-xs leading-relaxed text-silver/70">{body}</div></div>; }

function Entities() {
  const [openKey, setOpenKey] = useState<string | null>(null);
  return <section id="entities" className="mx-auto max-w-6xl px-6 py-24 scroll-mt-24"><div className="mb-12 max-w-2xl"><div className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-dim">The portfolio</div><h2 className="mt-3 text-3xl font-semibold tracking-tight text-light md:text-4xl">Built as a system, not a collection.</h2><p className="mt-3 font-serif italic text-silver">Products can change. The architecture compounds.</p></div><div className="grid gap-px bg-border md:grid-cols-3">{entities.map((e) => { const isOpen = openKey === e.key; return <button key={e.key} type="button" onClick={() => setOpenKey(isOpen ? null : e.key)} className={`group flex flex-col items-start gap-4 bg-background p-7 text-left transition-colors hover:bg-card ${isOpen ? "bg-card" : ""}`}><div className="flex w-full items-center justify-between"><span className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-dim">{e.sector}</span><span className="inline-flex items-center gap-2 border border-ghost px-2.5 py-1 font-mono text-[0.55rem] uppercase tracking-[0.25em]" style={{ color: e.status.color }}><span className="h-1.5 w-1.5 rounded-full" style={{ background: e.status.color }} />{e.status.label}</span></div><div><h3 className="text-2xl font-semibold tracking-tight text-light">{e.name}</h3>{e.handle && <div className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.25em]" style={{ color: e.accent }}>{e.handle}</div>}</div><p className="text-sm leading-relaxed text-silver/80">{e.desc}</p>{isOpen && <div className="mt-2 w-full space-y-4 border-t border-ghost pt-4"><p className="font-serif italic text-sm text-silver">{e.detail}</p><div className="font-mono text-[0.6rem] uppercase tracking-[0.25em] text-silver/70">{e.head}</div></div>}<div className="mt-auto flex items-center gap-2 pt-2 text-[0.65rem] uppercase tracking-[0.2em] text-silver group-hover:text-light">{isOpen ? "Hide details" : "Read details"}<ArrowRight className={`h-3.5 w-3.5 transition-transform ${isOpen ? "rotate-90" : "group-hover:translate-x-1"}`} /></div></button>; })}</div></section>;
}

function OperatingModel() { return <section id="operating" className="border-y border-border bg-[#060606] scroll-mt-24"><div className="mx-auto max-w-4xl px-6 py-28 text-center"><div className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-dim">Operating principle</div><p className="mt-8 font-serif italic text-2xl leading-relaxed text-light md:text-4xl">“Build. Cash flow. Acquire. Compound. Allocate. Build again.”</p><p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-silver">A lean holding company with autonomous operating businesses, explicit authority, durable memory, disciplined capital allocation, and governance designed to outlive its founders.</p></div></section>; }

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const onSubmit = (e: React.FormEvent) => { e.preventDefault(); const body = encodeURIComponent(`${form.message}\n\n— ${form.name}`); const subject = encodeURIComponent(`Inquiry from ${form.name || "site"}`); if (typeof window !== "undefined") window.location.href = `mailto:hello@synapsesgroup.co?subject=${subject}&body=${body}`; setSent(true); };
  return <section id="contact" className="scroll-mt-24"><div className="mx-auto max-w-4xl px-6 py-24"><div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:items-start"><div><div className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-dim">Contact</div><h2 className="mt-3 text-3xl font-semibold tracking-tight text-light md:text-4xl">Build with us.</h2><p className="mt-4 text-sm leading-relaxed text-silver">Partnerships, capital, acquisitions, research, media, and technology.</p><a href="mailto:hello@synapsesgroup.co" className="mt-6 inline-flex items-center gap-2 text-lg font-semibold tracking-tight text-light hover:underline underline-offset-4"><Mail className="h-4 w-4 text-silver" />hello@synapsesgroup.co</a></div><form onSubmit={onSubmit} className="grid gap-px bg-border"><Field label="Name" required><input type="text" required maxLength={100} value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} className="w-full bg-background px-4 py-3 text-sm text-light outline-none placeholder:text-dim focus:bg-card" placeholder="Your name" /></Field><Field label="Email" required><input type="email" required maxLength={255} value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} className="w-full bg-background px-4 py-3 text-sm text-light outline-none placeholder:text-dim focus:bg-card" placeholder="you@company.com" /></Field><Field label="Message" required><textarea required maxLength={1000} rows={4} value={form.message} onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))} className="w-full resize-none bg-background px-4 py-3 text-sm text-light outline-none placeholder:text-dim focus:bg-card" placeholder="What are you reaching out about?" /></Field><div className="bg-background p-4"><button type="submit" className="w-full bg-light px-6 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-background transition-opacity hover:opacity-90">{sent ? "Opening your mail client…" : "Send message"}</button></div></form></div></div></section>;
}

function Field({ label, required, children }: { label: string; required?: boolean; children: ReactNode }) { return <label className="block bg-background px-4 pt-3"><span className="font-mono text-[0.55rem] uppercase tracking-[0.3em] text-dim">{label}{required && " *"}</span><div className="-mx-4">{children}</div></label>; }
