import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/brand/Header";
import { Footer } from "@/components/brand/Footer";
import { NodeMark } from "@/components/brand/NodeMark";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/technology")({
  head: () => ({
    meta: [
      { title: "Synapses Technology — Synapses Group" },
      { name: "description", content: "Synapses Technology is the current flagship operating company of Synapses Group, focused on software, intelligent systems, and digital infrastructure." },
      { property: "og:title", content: "Synapses Technology — Synapses Group" },
      { property: "og:description", content: "Software, intelligent systems, and digital infrastructure." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://synapsesgroup.co/technology" },
      { property: "og:image", content: "https://synapsesgroup.co/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: "https://synapsesgroup.co/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://synapsesgroup.co/technology" }],
  }),
  component: TechnologyPage,
});

function TechnologyPage() {
  const capabilities = [
    ["01", "Software", "Purpose-built applications, platforms, and tools designed around real user needs."],
    ["02", "Artificial intelligence", "Intelligent systems that help people and organisations reason, create, and execute more effectively."],
    ["03", "Digital infrastructure", "Secure, dependable foundations for modern products, services, and workflows."],
  ];
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <section className="relative overflow-hidden border-b border-border bg-[#060606]">
          <div className="absolute right-10 top-1/2 hidden -translate-y-1/2 opacity-[0.08] md:block"><NodeMark size={280} bright /></div>
          <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
            <div className="font-mono text-[0.62rem] uppercase tracking-[0.3em] text-dim">A Synapses Group company</div>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-light md:text-6xl">Synapses Technology</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-silver">Our current flagship operating company, building software, intelligent systems, and digital infrastructure for a more capable world.</p>
          </div>
        </section>
        <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="max-w-2xl"><div className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-dim">What we do</div><h2 className="mt-4 text-3xl font-semibold text-light md:text-4xl">Technology with a practical purpose.</h2><p className="mt-5 text-base leading-relaxed text-silver">We focus on the intersection of useful software, applied intelligence, and reliable infrastructure. Our approach is grounded in thoughtful engineering, responsible deployment, and products that deliver measurable value.</p></div>
          <div className="mt-12 grid gap-px bg-border md:grid-cols-3">{capabilities.map(([number, title, description]) => <article key={number} className="bg-background p-7 md:p-9"><div className="font-mono text-xs text-dim">{number}</div><h3 className="mt-6 text-xl font-semibold text-light">{title}</h3><p className="mt-3 text-sm leading-relaxed text-silver">{description}</p></article>)}</div>
        </section>
        <section className="border-y border-border bg-card"><div className="mx-auto flex max-w-6xl flex-col gap-5 px-6 py-12 md:flex-row md:items-center md:justify-between"><div><div className="font-mono text-[0.6rem] uppercase tracking-[0.25em] text-dim">Part of Synapses Group</div><h2 className="mt-2 text-2xl font-semibold text-light">Built for the long term.</h2><p className="mt-2 max-w-2xl text-sm leading-relaxed text-silver">Synapses Technology operates with the focus of a technology company and the long horizon of its parent group.</p></div><a href="mailto:hello@synapsesgroup.org" className="inline-flex shrink-0 items-center gap-2 text-xs uppercase tracking-[0.18em] text-light hover:underline">Get in touch <ArrowRight className="h-4 w-4" /></a></div></section>
      </main>
      <Footer />
    </div>
  );
}
