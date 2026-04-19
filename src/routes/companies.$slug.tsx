import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header } from "@/components/brand/Header";
import { Footer } from "@/components/brand/Footer";
import { getSubsidiary, subsidiaries } from "@/data/subsidiaries";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/companies/$slug")({
  loader: ({ params }) => {
    const sub = getSubsidiary(params.slug);
    if (!sub) throw notFound();
    return { sub };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Company — Synapses Group" }] };
    const { sub } = loaderData;
    return {
      meta: [
        { title: `${sub.name} — ${sub.tag} · Synapses Group` },
        { name: "description", content: sub.shortDesc },
        { property: "og:title", content: `${sub.name} — Synapses Group` },
        { property: "og:description", content: sub.shortDesc },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="mx-auto max-w-2xl px-6 py-32 text-center">
        <h1 className="text-4xl font-semibold text-light">Company not found</h1>
        <p className="mt-3 font-serif italic text-silver">That subsidiary doesn't exist in the Synapses portfolio.</p>
        <Link to="/companies" className="mt-8 inline-block text-[0.7rem] uppercase tracking-[0.2em] text-light underline-offset-4 hover:underline">
          ← All companies
        </Link>
      </div>
      <Footer />
    </div>
  ),
  component: CompanyDetail,
});

function CompanyDetail() {
  const { sub } = Route.useLoaderData();
  const idx = subsidiaries.findIndex((s) => s.slug === sub.slug);
  const next = subsidiaries[(idx + 1) % subsidiaries.length];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section
        className="relative border-b border-border bg-[#060606]"
        style={{ background: `radial-gradient(ellipse at top, ${sub.accent}15, #060606 65%)` }}
      >
        <div className="mx-auto max-w-5xl px-6 pt-12 pb-20">
          <Link
            to="/companies"
            className="inline-flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.25em] text-silver/70 hover:text-light"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> All Companies
          </Link>

          <div className="mt-10 flex items-center gap-4">
            <span className="text-5xl" style={{ color: sub.accent }}>{sub.icon}</span>
            <div>
              <div className="font-mono text-[0.62rem] uppercase tracking-[0.3em]" style={{ color: sub.accent }}>
                {sub.tag}
              </div>
              <h1 className="mt-1 text-5xl font-semibold tracking-tight text-light md:text-6xl">{sub.name}</h1>
            </div>
          </div>

          <p className="mt-8 max-w-2xl font-serif italic text-xl leading-relaxed text-silver md:text-2xl">
            {sub.longDesc}
          </p>

          <div className="mt-10 inline-flex items-center gap-3 border border-ghost px-4 py-2 font-mono text-[0.6rem] uppercase tracking-[0.3em] text-silver">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: sub.accent }} />
            Status · {sub.status}
          </div>
        </div>
      </section>

      {/* Bullets */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-dim">What it does</div>
        <div className="mt-10 grid gap-px bg-border md:grid-cols-3">
          {sub.bullets.map((b) => (
            <div key={b.title} className="flex flex-col gap-3 bg-background p-8">
              <div className="h-px w-8" style={{ background: sub.accent }} />
              <h3 className="text-lg font-semibold uppercase tracking-wider text-light">{b.title}</h3>
              <p className="text-sm leading-relaxed text-silver/80">{b.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Inside Synapses */}
      <section className="border-t border-border bg-[#060606]">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-[1fr_1.5fr]">
            <div>
              <div className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-dim">Inside Synapses</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-light">
                Part of a closed-loop holding company.
              </h2>
            </div>
            <p className="font-serif italic text-lg leading-relaxed text-silver">
              {sub.name} is one of three operating entities inside Synapses Group. Each company feeds the others — trend data flows in, content flows out, and an autonomous executive layer reallocates attention across all of it.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8">
            <Link
              to="/companies/$slug"
              params={{ slug: next.slug }}
              className="group inline-flex items-center gap-3 text-light"
            >
              <span className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-dim">Next</span>
              <span className="text-2xl tracking-tight" style={{ color: next.accent }}>{next.icon}</span>
              <span className="text-xl font-semibold">{next.name}</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="border border-ghost px-5 py-2.5 text-[0.7rem] uppercase tracking-[0.2em] text-silver hover:border-dim hover:text-light"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
