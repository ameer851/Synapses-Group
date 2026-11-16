import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/brand/Header";
import { Footer } from "@/components/brand/Footer";
import { Ticker } from "@/components/brand/Ticker";
import { NodeMark } from "@/components/brand/NodeMark";
import { NeuralPulseCanvas } from "@/components/brand/NeuralPulseCanvas";
import { ArrowRight, ChevronDown, Mail } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Synapses Group — Build. Acquire. Compound." },
      { name: "description", content: "Synapses Group is a long-term holding company focused on building durable businesses. Its current operating focus is technology." },
      { property: "og:title", content: "Synapses Group — Build. Acquire. Compound." },
      { property: "og:description", content: "A long-term holding company building durable businesses, beginning with technology." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://synapsesgroup.co/" },
      { property: "og:image", content: "https://synapsesgroup.co/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Synapses Group — Build. Acquire. Compound." },
      { name: "twitter:image", content: "https://synapsesgroup.co/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://synapsesgroup.co/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Ticker />
      <Mission />
      <Technology />
      <OperatingModel />
      <Contact />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-[#060606]">
      <div className="absolute inset-0 opacity-[0.18]" style={{ backgroundImage: "linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, transparent 30%, #060606 100%)" }} />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.04]"><NodeMark size={520} bright /></div>
      <div className="relative mx-auto max-w-5xl px-6 pt-16 pb-20 text-center md:pt-28 md:pb-36">
        <div className="animate-fade-up font-mono text-[0.62rem] uppercase tracking-[0.35em] text-dim">Synapses Group · Holding Company · Est. 2026</div>
        <div className="mt-6 flex justify-center animate-fade-up max-sm:hidden md:mt-10" style={{ animationDelay: "0.1s" }}><NeuralPulseCanvas /></div>
        <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-light md:mt-10 md:text-7xl animate-fade-up" style={{ animationDelay: "0.2s" }}><span className="sr-only">Synapses Group — </span>Build. <span className="font-serif italic text-silver">Acquire.</span> Compound.</h1>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-silver md:text-xl animate-fade-up" style={{ animationDelay: "0.3s" }}>We build and steward durable businesses with a long-term perspective. Our current operating focus is technology.</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3 animate-fade-up md:mt-10" style={{ animationDelay: "0.4s" }}><a href="#technology" className="inline-flex items-center gap-2 bg-light px-7 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-background transition-opacity hover:opacity-90">Explore Technology <ChevronDown className="h-3.5 w-3.5" /></a><a href="#contact" className="inline-flex items-center border border-ghost px-7 py-3 text-[0.7rem] uppercase tracking-[0.2em] text-silver transition-colors hover:border-dim hover:text-light">Contact</a></div>
      </div>
    </section>
  );
}

function Mission() {
  const principles = [
    ["01", "Build", "Create useful products, capabilities, and businesses from first principles."],
    ["02", "Operate", "Develop disciplined operations that serve customers and earn trust."],
    ["03", "Compound", "Reinvest in people, technology, and durable long-term value."],
  ];
  return (
    <section id="mission" className="mx-auto max-w-6xl px-6 py-24 scroll-mt-24">
      <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-start">
        <div><div className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-dim">The thesis</div><h2 className="mt-3 text-3xl font-semibold tracking-tight text-light md:text-5xl">Think in decades.<br /><span className="font-serif italic text-silver">Build to endure.</span></h2></div>
        <div><p className="text-base leading-relaxed text-silver md:text-lg">Synapses Group is the parent company and long-term steward of its operating interests. We take a patient approach to building businesses: start with real problems, establish sound operations, and compound what works.</p>
          <div className="mt-8 grid gap-px bg-border">{principles.map(([n, title, body]) => <div key={n} className="grid gap-3 bg-background p-5 md:grid-cols-[48px_150px_1fr] md:items-center"><span className="font-mono text-[0.6rem] text-dim">{n}</span><span className="font-semibold uppercase tracking-wider text-light">{title}</span><span className="text-sm text-silver/80">{body}</span></div>)}</div>
        </div>
      </div>
    </section>
  );
}

function Technology() {
  return (
    <section id="technology" className="border-y border-border bg-[#060606] scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-3xl"><div className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-dim">Current operating focus</div><h2 className="mt-3 text-3xl font-semibold tracking-tight text-light md:text-5xl">Technology that moves things forward.</h2><p className="mt-4 text-silver">Synapses Technology is the Group’s current flagship operating company, developing software, intelligent systems, and digital infrastructure.</p></div>
        <div className="mt-12 grid gap-px bg-border md:grid-cols-3">
          <article className="bg-background p-7 md:p-8"><div className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-dim">01 · Software</div><h3 className="mt-3 text-2xl font-semibold text-light">Useful by design.</h3><p className="mt-3 text-sm leading-relaxed text-silver/80">Build practical products and platforms that solve meaningful problems for people and organisations.</p></article>
          <article className="bg-background p-7 md:p-8"><div className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-dim">02 · Intelligent systems</div><h3 className="mt-3 text-2xl font-semibold text-light">Intelligence in action.</h3><p className="mt-3 text-sm leading-relaxed text-silver/80">Apply AI and automation to make complex workflows more capable, reliable, and accessible.</p></article>
          <article className="bg-background p-7 md:p-8"><div className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-dim">03 · Infrastructure</div><h3 className="mt-3 text-2xl font-semibold text-light">Built for scale.</h3><p className="mt-3 text-sm leading-relaxed text-silver/80">Create the technical foundations that allow products and services to grow securely and sustainably.</p></article>
        </div>
        <Link to="/technology" className="mt-8 inline-flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.2em] text-light hover:underline">Discover Synapses Technology <ArrowRight className="h-3.5 w-3.5" /></Link>
      </div>
    </section>
  );
}

function OperatingModel() {
  return <section className="border-b border-border bg-background"><div className="mx-auto max-w-4xl px-6 py-28 text-center"><div className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-dim">Operating principle</div><p className="mt-8 font-serif italic text-2xl leading-relaxed text-light md:text-4xl">“Build with purpose. Operate with discipline. Compound with patience.”</p><p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-silver">A long-term holding company grounded in clear governance, responsible ownership, and the steady creation of enduring value.</p></div></section>;
}

function Contact() {
  return <section id="contact" className="scroll-mt-24"><div className="mx-auto max-w-4xl px-6 py-24"><div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:items-start"><div><div className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-dim">Contact</div><h2 className="mt-3 text-3xl font-semibold tracking-tight text-light md:text-4xl">Start a conversation.</h2><p className="mt-4 text-sm leading-relaxed text-silver">For business enquiries, partnerships, and general correspondence.</p><a href="mailto:hello@synapsesgroup.org" className="mt-6 inline-flex items-center gap-2 text-lg font-semibold tracking-tight text-light hover:underline underline-offset-4"><Mail className="h-4 w-4 text-silver" />hello@synapsesgroup.org</a></div><div className="border border-ghost bg-card p-7"><div className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-dim">Synapses Group</div><p className="mt-4 text-sm leading-relaxed text-silver">An independent holding company focused on building and stewarding businesses for the long term.</p><a href="mailto:hello@synapsesgroup.org" className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-light hover:underline">Contact our team <ArrowRight className="h-4 w-4" /></a></div></div></div></section>;
}
