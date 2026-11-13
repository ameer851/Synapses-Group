import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Footer } from "@/components/brand/Footer";
import { Header } from "@/components/brand/Header";
import { entities } from "@/data/entities";

export const Route = createFileRoute("/companies")({
  head: () => ({
    meta: [
      { title: "Companies — Synapses Group" },
      {
        name: "description",
        content:
          "Explore the companies and strategic operating pillars within Synapses Group, spanning capital, technology, energy, infrastructure, media, bio, and continuity.",
      },
      { property: "og:title", content: "Companies — Synapses Group" },
      {
        property: "og:description",
        content:
          "A portfolio of operating companies and strategic pillars built for durable, long-term value.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://synapsesgroup.co/companies" },
      { property: "og:image", content: "https://synapsesgroup.co/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Synapses Group — Build. Acquire. Compound." },
      { name: "twitter:image", content: "https://synapsesgroup.co/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://synapsesgroup.co/companies" }],
  }),
  component: CompaniesPage,
});

function CompaniesPage() {
  const publicEntities = entities.filter((entity) => entity.key !== "intelligence");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <section className="border-b border-border bg-card">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
            <div className="font-mono text-[0.62rem] uppercase tracking-[0.3em] text-dim">The portfolio</div>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold text-light md:text-6xl">Distinct companies. Shared conviction.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-silver">
              Synapses Group builds, acquires, and allocates across businesses and strategic capabilities with a long-term view.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="grid gap-px bg-border md:grid-cols-2">
            {publicEntities.map((entity, index) => (
              <article key={entity.key} className="flex min-h-56 flex-col bg-background p-7 md:p-9">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-[0.6rem] uppercase tracking-[0.25em] text-dim">{entity.sector}</span>
                  <span className="shrink-0 font-mono text-[0.6rem] uppercase tracking-[0.15em] text-silver">{entity.status.label}</span>
                </div>
                <h2 className="mt-6 text-2xl font-semibold text-light">{entity.name}</h2>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-silver">{entity.desc}</p>
                <div className="mt-auto pt-6 font-mono text-[0.58rem] uppercase tracking-[0.2em] text-dim">{String(index + 1).padStart(2, "0")} / {String(publicEntities.length).padStart(2, "0")}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-border bg-card">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="font-mono text-[0.6rem] uppercase tracking-[0.25em] text-dim">Future initiative</div>
              <h2 className="mt-2 text-2xl font-semibold text-light">M1000</h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-silver">A future initiative focused on expanding STEM opportunity for underserved youth across Africa.</p>
            </div>
            <Link to="/m1000" className="inline-flex shrink-0 items-center gap-2 text-xs uppercase tracking-[0.18em] text-light hover:underline">
              Visit M1000 <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}