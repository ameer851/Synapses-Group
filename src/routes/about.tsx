import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "@/components/brand/Footer";
import { Header } from "@/components/brand/Header";
import { NodeMark } from "@/components/brand/NodeMark";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Synapses Group — Our Mission and Principles" },
      { name: "description", content: "Learn about Synapses Group, a long-term holding company focused on building and stewarding durable businesses." },
      { property: "og:title", content: "About Synapses Group — Our Mission and Principles" },
      { property: "og:description", content: "The mission and long-term principles behind Synapses Group." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://synapsesgroup.co/about" },
      { property: "og:image", content: "https://synapsesgroup.co/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: "https://synapsesgroup.co/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://synapsesgroup.co/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  const principles = [
    ["01", "Long-term ownership", "Build with patience, align incentives, and make decisions for enduring value."],
    ["02", "Operational discipline", "Give teams clear responsibilities and hold execution to a high standard."],
    ["03", "Responsible stewardship", "Treat capital, people, customers, and trust as responsibilities to protect."],
  ];
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <section className="border-b border-border bg-card">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1fr_auto] md:items-end md:py-28">
            <div><div className="font-mono text-[0.62rem] uppercase tracking-[0.3em] text-dim">About the Group</div><h1 className="mt-5 max-w-4xl text-4xl font-semibold text-light md:text-6xl">Built for the long horizon.</h1><p className="mt-6 max-w-2xl text-lg leading-relaxed text-silver">Synapses Group is a holding company focused on building, acquiring, and stewarding durable businesses. We take a patient approach to ownership, guided by disciplined operations and a commitment to long-term value.</p></div>
            <div className="hidden md:block"><NodeMark size={112} bright /></div>
          </div>
        </section>
        <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[0.8fr_1.2fr] md:py-24">
          <div><div className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-dim">Our approach</div><h2 className="mt-4 text-3xl font-semibold text-light md:text-4xl">Build carefully. Own responsibly. Think long term.</h2></div>
          <div className="space-y-6 text-base leading-relaxed text-silver md:text-lg"><p>We believe enduring companies are built by solving real problems, earning customer trust, and creating strong operating foundations.</p><p>As the parent company, Synapses Group provides long-term direction and stewardship while its operating businesses focus on execution.</p></div>
        </section>
        <section className="border-y border-border bg-card"><div className="mx-auto max-w-6xl px-6 py-20 md:py-24"><div className="max-w-2xl"><div className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-dim">How we operate</div><h2 className="mt-4 text-3xl font-semibold text-light md:text-4xl">Principles over noise.</h2></div><div className="mt-10 grid gap-px bg-border md:grid-cols-3">{principles.map(([number, title, description]) => <article key={number} className="bg-background p-7 md:p-8"><div className="font-mono text-xs text-dim">{number}</div><h3 className="mt-6 text-xl font-semibold text-light">{title}</h3><p className="mt-3 text-sm leading-relaxed text-silver">{description}</p></article>)}</div></div></section>
      </main>
      <Footer />
    </div>
  );
}
