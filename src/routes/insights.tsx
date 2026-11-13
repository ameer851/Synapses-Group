import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "@/components/brand/Footer";
import { Header } from "@/components/brand/Header";
import { NodeMark } from "@/components/brand/NodeMark";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — Synapses Group" },
      {
        name: "description",
        content:
          "Perspectives from Synapses Group on long-term ownership, compounding systems, human continuity, and responsible technology.",
      },
      { property: "og:title", content: "Insights — Synapses Group" },
      {
        property: "og:description",
        content:
          "Ideas shaping how we build durable companies, steward capital, and extend human capability across generations.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://synapsesgroup.co/insights" },
      { property: "og:image", content: "https://synapsesgroup.co/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Synapses Group — Build. Acquire. Compound." },
      { name: "twitter:image", content: "https://synapsesgroup.co/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://synapsesgroup.co/insights" }],
  }),
  component: InsightsPage,
});

function InsightsPage() {
  const themes = [
    {
      number: "01",
      label: "Long-term ownership",
      title: "Build with time on your side.",
      description:
        "Durable institutions are built by aligning ownership, operating responsibility, and capital with a long horizon.",
    },
    {
      number: "02",
      label: "Compounding systems",
      title: "The whole can become greater than its parts.",
      description:
        "Companies become more resilient when knowledge, technology, talent, and capital can reinforce one another.",
    },
    {
      number: "03",
      label: "Human continuity",
      title: "Preserve what matters across generations.",
      description:
        "Identity, memory, provenance, and succession deserve systems built around trust, ownership, and human agency.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <section className="border-b border-border bg-card">
          <div className="mx-auto flex max-w-6xl items-end justify-between gap-8 px-6 py-20 md:py-28">
            <div>
              <div className="font-mono text-[0.62rem] uppercase tracking-[0.3em] text-dim">Ideas and perspectives</div>
              <h1 className="mt-5 max-w-3xl text-4xl font-semibold text-light md:text-6xl">Thinking in generations.</h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-silver">The principles behind the businesses we build, the capital we steward, and the systems we seek to preserve.</p>
            </div>
            <div className="hidden shrink-0 md:block"><NodeMark size={112} bright /></div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="grid gap-px bg-border md:grid-cols-3">
            {themes.map((theme) => (
              <article key={theme.number} className="flex min-h-72 flex-col bg-background p-7 md:p-8">
                <div className="font-mono text-xs text-dim">{theme.number}</div>
                <div className="mt-8 font-mono text-[0.58rem] uppercase tracking-[0.2em] text-dim">{theme.label}</div>
                <h2 className="mt-3 text-2xl font-semibold leading-snug text-light">{theme.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-silver">{theme.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}