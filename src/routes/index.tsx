import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/brand/Header";
import { Footer } from "@/components/brand/Footer";
import { Ticker } from "@/components/brand/Ticker";
import { NodeMark } from "@/components/brand/NodeMark";
import { NeuralPulseCanvas } from "@/components/brand/NeuralPulseCanvas";
import { subsidiaries } from "@/data/subsidiaries";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Synapses Group — Autonomous Intelligence" },
      { name: "description", content: "A holding company that builds and operates AI-powered businesses. Three entities. One autonomous executive. Zero inefficiency." },
      { property: "og:title", content: "Synapses Group — Autonomous Intelligence" },
      { property: "og:description", content: "InwitClipps · InwitHQ · Inwit AI. The first holding company run by an AI executive." },
    ],
  }),
  component: HomePage,
});

const pipeline = [
  { n: "01", title: "Trend Signal", body: "InwitClipps' TrendSync ingests cross-platform trend data in real time.", color: "var(--accent-purple)" },
  { n: "02", title: "Content Generation", body: "Long-form input is cut into platform-ready clips, scored against trends.", color: "var(--accent-purple)" },
  { n: "03", title: "Distribution", body: "InwitHQ publishes across its network of pages and accounts.", color: "var(--accent-pink)" },
  { n: "04", title: "Performance Loop", body: "Engagement and watch-time data feeds back into the trend engine.", color: "var(--accent-pink)" },
  { n: "05", title: "Executive Layer", body: "Inwit AI reallocates budget, schedules and direction for the next cycle.", color: "var(--accent-cyan)" },
];

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border bg-[#060606]">
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, transparent 30%, #060606 100%)" }}
        />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.04]">
          <NodeMark size={420} bright />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 pt-20 pb-24 text-center md:pt-28 md:pb-32">
          <div className="animate-fade-up font-mono text-[0.62rem] uppercase tracking-[0.35em] text-dim">
            Synapses Group · synapsesgroup.com
          </div>

          <div className="mt-10 flex justify-center animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <NeuralPulseCanvas />
          </div>

          <p
            className="mx-auto mt-10 max-w-xl font-serif italic text-base leading-relaxed text-silver md:text-lg animate-fade-up"
            style={{ animationDelay: "0.25s" }}
          >
            A holding company that builds and operates AI-powered businesses. Three entities. One autonomous executive. Zero inefficiency.
          </p>

          <div
            className="mt-10 flex flex-wrap justify-center gap-3 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Link
              to="/companies"
              className="inline-flex items-center gap-2 bg-light px-7 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-background transition-opacity hover:opacity-90"
            >
              Our Companies <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center border border-ghost px-7 py-3 text-[0.7rem] uppercase tracking-[0.2em] text-silver transition-colors hover:border-dim hover:text-light"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>

      <Ticker />

      {/* COMPANIES */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12">
          <div className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-dim">Portfolio</div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-light md:text-4xl">Our Companies</h2>
          <p className="mt-3 max-w-2xl font-serif italic text-silver">
            Three entities. One ecosystem. A media engine, a clipping platform, and the AI executive that runs them both.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {subsidiaries.map((s) => (
            <Link
              key={s.slug}
              to="/companies/$slug"
              params={{ slug: s.slug }}
              className="group flex flex-col border border-border bg-card p-8 transition-all hover:border-dim hover:bg-ghost/30"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl" style={{ color: s.accent }}>{s.icon}</span>
                <span className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-dim">{s.tag}</span>
              </div>
              <h3 className="mt-6 text-2xl font-semibold tracking-tight text-light">{s.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-silver/80">{s.shortDesc}</p>
              <div className="mt-6 flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.2em] text-silver group-hover:text-light">
                Read more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ECOSYSTEM PIPELINE */}
      <section className="border-y border-border bg-[#060606]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-12">
            <div className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-dim">The Ecosystem</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-light md:text-4xl">A closed loop, by design</h2>
            <p className="mt-3 max-w-2xl font-serif italic text-silver">
              Every action feeds the next. Trend data drives content; content drives distribution; distribution sharpens the next trend signal.
            </p>
          </div>

          <ol className="grid gap-px bg-border md:grid-cols-5">
            {pipeline.map((step) => (
              <li key={step.n} className="flex flex-col gap-3 bg-background p-6">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: step.color }} />
                  <span className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-dim">{step.n}</span>
                </div>
                <div className="text-sm font-semibold uppercase tracking-wider text-light">{step.title}</div>
                <p className="text-xs leading-relaxed text-silver/80">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="mx-auto max-w-3xl px-6 py-28 text-center">
        <div className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-dim">Manifesto</div>
        <p className="mt-8 font-serif italic text-2xl leading-relaxed text-light md:text-3xl">
          "Most companies are run by humans. We gave that job to an AI."
        </p>
        <p className="mt-8 text-sm leading-relaxed text-silver md:text-base">
          Synapses Group is a holding company built around a single thesis: an autonomous executive can operate multiple businesses with more clarity, less waste, and faster feedback than a traditional management layer. The board still sits with humans. The desk does not.
        </p>
        <div className="mt-10 inline-flex items-center gap-3 border border-ghost px-5 py-2 font-mono text-[0.6rem] uppercase tracking-[0.3em] text-silver">
          <span className="h-1.5 w-1.5 rounded-full bg-light" /> Est. 2025 — Autonomous Intelligence
        </div>
      </section>

      <Footer />
    </div>
  );
}
