import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/brand/Header";
import { Footer } from "@/components/brand/Footer";
import { subsidiaries } from "@/data/subsidiaries";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/companies/")({
  head: () => ({
    meta: [
      { title: "Companies — Synapses Group" },
      { name: "description", content: "InwitClipps, InwitHQ and Inwit AI: the three entities operating inside Synapses Group." },
      { property: "og:title", content: "Companies — Synapses Group" },
      { property: "og:description", content: "Three companies. One AI executive. Meet the Synapses portfolio." },
    ],
  }),
  component: CompaniesIndex,
});

function CompaniesIndex() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-12">
        <div className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-dim">Portfolio</div>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-light md:text-5xl">Our Companies</h1>
        <p className="mt-4 max-w-2xl font-serif italic text-lg text-silver">
          A media engine, a clipping platform, and the AI executive that runs them both — operated as one closed-loop system.
        </p>
      </section>

      <section className="mx-auto max-w-6xl space-y-px bg-border">
        {subsidiaries.map((s, i) => (
          <Link
            key={s.slug}
            to="/companies/$slug"
            params={{ slug: s.slug }}
            className="group block bg-background px-6 py-12 transition-colors hover:bg-card md:px-12"
          >
            <div className="grid gap-8 md:grid-cols-[120px_1fr_auto] md:items-center">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[0.65rem] tracking-[0.2em] text-dim">0{i + 1}</span>
                <span className="text-3xl" style={{ color: s.accent }}>{s.icon}</span>
              </div>
              <div>
                <div className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-dim">{s.tag}</div>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-light md:text-4xl">{s.name}</h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-silver/80 md:text-base">
                  {s.shortDesc}
                </p>
              </div>
              <div
                className="flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.2em] text-silver transition-colors group-hover:text-light"
                style={{ color: undefined }}
              >
                Detail <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        ))}
      </section>

      <Footer />
    </div>
  );
}
