import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/brand/Header";
import { Footer } from "@/components/brand/Footer";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About Synapses Group — Long-Term Ownership" },
    { name: "description", content: "Synapses Group is a diversified holding company built to own, build, acquire, and compound durable businesses and strategic capabilities." },
    { property: "og:title", content: "About Synapses Group" },
    { property: "og:description", content: "A long-term holding company built to own, build, acquire, and compound." },
    { property: "og:url", content: "https://synapsesgroup.co/about" },
  ], links: [{ rel: "canonical", href: "https://synapsesgroup.co/about" }] }),
  component: AboutPage,
});

function AboutPage() {
  return <div className="min-h-screen bg-background text-foreground"><Header />
    <main>
      <section className="border-b border-border bg-[#060606]"><div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <div className="font-mono text-[0.6rem] uppercase tracking-[0.35em] text-dim">About Synapses Group</div>
        <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-light md:text-7xl">Build for the long term.<br /><span className="font-serif italic text-silver">Own what compounds.</span></h1>
        <p className="mt-7 max-w-2xl text-base leading-relaxed text-silver md:text-xl">Synapses Group is a diversified holding company built to own, build, acquire, and compound businesses and capabilities across strategic industries.</p>
      </div></section>
      <section className="mx-auto max-w-6xl px-6 py-24"><div className="grid gap-14 md:grid-cols-[0.8fr_1.2fr]">
        <div><div className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-dim">The company</div><h2 className="mt-3 text-3xl font-semibold text-light md:text-5xl">A system of ownership.</h2></div>
        <div className="space-y-6 text-silver"><p className="text-lg leading-relaxed">The Group is the owner and allocator. Its operating companies are the builders. Each pillar has a distinct mandate, while shared capital, technology, talent, distribution, and intelligence create compounding advantages across the whole.</p><p className="leading-relaxed text-silver/80">We are deliberately building an institution rather than a collection of projects. The objective is durable ownership: businesses that can generate cash flow, survive cycles, acquire intelligently, and become stronger as the Group grows.</p><div className="border-l border-border pl-6"><div className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-dim">Operating doctrine</div><p className="mt-2 font-serif text-xl italic text-light md:text-2xl">Build → Cash flow → Acquire → Compound → Allocate → Build again.</p></div></div>
      </div></section>
      <section className="border-y border-border bg-[#060606]"><div className="mx-auto max-w-6xl px-6 py-24"><div className="max-w-2xl"><div className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-dim">What we build</div><h2 className="mt-3 text-3xl font-semibold text-light md:text-4xl">Seven connected capabilities.</h2></div><div className="mt-12 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">{["Capital","Technology","Energy","Industries","Media","Bio","Continuity","Intelligence"].map((x,i)=><div key={x} className="bg-background p-7"><div className="font-mono text-[0.6rem] text-dim">0{i+1}</div><h3 className="mt-3 text-xl font-semibold text-light">{x}</h3><p className="mt-2 text-sm text-silver/70">A distinct mandate inside the Group's long-term architecture.</p></div>)}</div></div></section>
      <section className="mx-auto max-w-4xl px-6 py-28 text-center"><p className="font-serif text-2xl italic leading-relaxed text-light md:text-4xl">“The goal is not to predict the future. It is to build an institution capable of participating in it.”</p><Link to="/companies" className="mt-8 inline-flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.2em] text-light hover:underline">Explore the companies <ArrowRight className="h-3.5 w-3.5" /></Link></section>
    </main><Footer /></div>;
}
