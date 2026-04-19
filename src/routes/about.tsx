import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/brand/Header";
import { Footer } from "@/components/brand/Footer";
import { LogoFull } from "@/components/brand/LogoFull";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Synapses Group" },
      { name: "description", content: "Founded in 2025 by Ameer. A holding company built on a single thesis: an autonomous executive can run multiple businesses with more clarity than a traditional management layer." },
      { property: "og:title", content: "About — Synapses Group" },
      { property: "og:description", content: "Three entities. One autonomous executive. Founded 2025." },
    ],
  }),
  component: AboutPage,
});

const principles = [
  { n: "01", title: "One executive, many companies", body: "Inwit AI runs both InwitClipps and InwitHQ. Shared memory, shared budget, no internal politics." },
  { n: "02", title: "Humans on the board", body: "An autonomous CEO is supervised, not trusted blindly. The board sits with people. Decisions are logged." },
  { n: "03", title: "Closed-loop product", body: "Each subsidiary feeds the others with data and distribution. Nothing in the portfolio is a standalone bet." },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="border-b border-border bg-[#060606]">
        <div className="mx-auto max-w-4xl px-6 pt-20 pb-24 text-center">
          <div className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-dim">About</div>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-light md:text-6xl">
            Three entities.<br />
            <span className="font-serif italic text-silver">One autonomous executive.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-silver md:text-lg">
            Synapses Group is a holding company building the next generation of AI-operated businesses. Founded in 2025, we operate three entities under a single autonomous executive layer.
          </p>
        </div>
      </section>

      {/* Founder */}
      <section className="mx-auto max-w-4xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_1.6fr]">
          <div>
            <div className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-dim">Founder &amp; Chairman</div>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-light">Ameer</h2>
            <div className="mt-4 inline-flex items-center gap-2 font-mono text-[0.6rem] uppercase tracking-[0.3em] text-silver">
              <span className="h-1.5 w-1.5 rounded-full bg-light" /> Est. 2025
            </div>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-silver md:text-lg">
            <p className="font-serif italic text-light text-xl">
              "Most companies are run by humans. We gave that job to an AI."
            </p>
            <p>
              Synapses began as a single thesis: an autonomous executive layer can operate multiple businesses simultaneously — with sharper attention, faster feedback, and fewer dropped balls than a conventional management team.
            </p>
            <p>
              The board is human. The desk is not. We build product, distribute media, and license the executive layer underneath — all from the same closed-loop system.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="border-y border-border bg-[#060606]">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <div className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-dim">Operating Principles</div>
          <div className="mt-10 grid gap-px bg-border md:grid-cols-3">
            {principles.map((p) => (
              <div key={p.n} className="flex flex-col gap-3 bg-background p-8">
                <span className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-dim">{p.n}</span>
                <h3 className="text-lg font-semibold uppercase tracking-wider text-light">{p.title}</h3>
                <p className="text-sm leading-relaxed text-silver/80">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lockup */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <div className="flex justify-center">
          <LogoFull width={420} />
        </div>
        <p className="mx-auto mt-10 max-w-xl font-serif italic text-lg text-silver">
          A holding company. A media engine. A clipping platform. An AI executive. One closed loop.
        </p>
      </section>

      <Footer />
    </div>
  );
}
