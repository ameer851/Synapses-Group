import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/brand/Header";
import { Footer } from "@/components/brand/Footer";
import { NodeMark } from "@/components/brand/NodeMark";
import { ArrowRight, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/m1000")({
  head: () => ({
    meta: [
      { title: "M1000 — Synapses Group Charitable Vision" },
      {
        name: "description",
        content:
          "M1000 is the future charitable arm of Synapses Group, focused on STEM education for underserved youth across Africa.",
      },
      {
        property: "og:title",
        content: "M1000 — Synapses Group Charitable Vision",
      },
      {
        property: "og:description",
        content:
          "Equipping underserved youth across Africa with the tools, mentorship, and infrastructure to build futures in STEM.",
      },
      { property: "og:url", content: "https://synapsesgroup.co/m1000" },
    ],
    links: [{ rel: "canonical", href: "https://synapsesgroup.co/m1000" }],
  }),
  component: M1000Page,
});

function M1000Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Mission />
      <Pillars />
      <Vision />
      <Footer />
    </div>
  );
}

/* ───────── HERO ───────── */
function Hero() {
  return (
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
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, transparent 30%, #060606 100%)",
        }}
      />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.04]">
        <NodeMark size={420} bright />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 pt-16 pb-16 text-center md:pt-28 md:pb-32">
        <div className="mb-8 flex justify-center animate-fade-up">
          <NodeMark size={96} bright />
        </div>

        <div className="animate-fade-up font-mono text-[0.62rem] uppercase tracking-[0.35em] text-dim">
          Synapses Group · Future Initiative
        </div>

        <h1
          className="mx-auto mt-6 text-5xl font-semibold tracking-tight text-light md:mt-8 md:text-8xl animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          M1000
        </h1>

        <p
          className="mx-auto mt-4 font-serif text-lg italic text-silver md:text-2xl animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Charitable arm · STEM education · Africa
        </p>

        <p
          className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-silver md:text-lg animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          A future initiative to equip underserved youth across Africa with the
          tools, mentorship, and infrastructure to build futures in science and
          technology.
        </p>

        <div
          className="mt-8 flex flex-wrap justify-center gap-3 animate-fade-up md:mt-10"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href="#mission"
            className="inline-flex items-center gap-2 bg-light px-7 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-background transition-opacity hover:opacity-90"
          >
            Read our mission <ArrowRight className="h-3.5 w-3.5" />
          </a>
          <Link
            to="/"
            className="inline-flex items-center gap-2 border border-ghost px-7 py-3 text-[0.7rem] uppercase tracking-[0.2em] text-silver transition-colors hover:border-dim hover:text-light"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Synapses Group
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ───────── MISSION ───────── */
function Mission() {
  return (
    <section id="mission" className="mx-auto max-w-6xl px-6 py-24 scroll-mt-24">
      <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:items-start">
        <div>
          <div className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-dim">
            Mission
          </div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-light md:text-4xl">
            Bridging the digital divide{" "}
            <span className="font-serif italic text-silver">
              one community at a time
            </span>
          </h2>
        </div>
        <div className="space-y-6 text-silver">
          <p className="text-base leading-relaxed md:text-lg">
            M1000 exists to close the STEM opportunity gap. We believe talent is
            universal, but access is not. By investing in underserved regions —
            starting with key areas in Africa — we aim to unlock the potential of
            millions of young people who lack the resources to pursue science,
            technology, engineering, and mathematics.
          </p>
          <p className="text-base leading-relaxed text-silver/80">
            As a charitable arm of Synapses Group, M1000 will leverage the
            group's AI infrastructure, operational efficiency, and founder
            network to deploy capital where it has the highest impact — not just
            funding, but building the physical and digital infrastructure that
            makes learning possible at scale.
          </p>

          <div className="border-l border-border pl-6">
            <div className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-dim">
              Operating thesis
            </div>
            <p className="mt-2 font-serif text-xl italic text-light md:text-2xl">
              Access × Skills × Opportunity = generational change.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── PILLARS ───────── */
const pillars = [
  {
    tag: "01",
    title: "Access",
    desc: "Provide hardware, reliable internet connectivity, and modern learning materials to schools and community centres in underserved regions.",
  },
  {
    tag: "02",
    title: "Skills",
    desc: "Fund coding bootcamps, robotics labs, AI literacy programmes, and teacher training to build sustainable local expertise.",
  },
  {
    tag: "03",
    title: "Opportunity",
    desc: "Create scholarship pathways and connect graduates to internships, apprenticeships, and roles within the Synapses Group portfolio and partner network.",
  },
];

function Pillars() {
  return (
    <section className="border-y border-border bg-[#0a0a0a]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <div className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-dim">
            Strategic pillars
          </div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-light md:text-4xl">
            How M1000 will operate
          </h2>
          <p className="mt-4 font-serif text-lg italic text-silver">
            Three pillars. One mission.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.tag} className="bg-card p-8 md:p-10">
              <div className="font-mono text-sm tracking-[0.3em] text-dim">
                {p.tag}
              </div>
              <h3 className="mt-6 text-2xl font-semibold tracking-tight text-light">
                {p.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-silver">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── VISION ───────── */
function Vision() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-28 text-center">
      <div className="font-mono text-[0.6rem] uppercase tracking-[0.35em] text-dim">
        Future horizon
      </div>
      <blockquote className="mx-auto mt-8 max-w-3xl font-serif text-2xl italic leading-snug text-light md:text-4xl">
        "We're not building a charity. We're building a pipeline — from
        underserved classrooms to the global technology economy. M1000 is the
        long game."
      </blockquote>
      <p className="mt-10 text-sm uppercase tracking-[0.2em] text-silver">
        Not a now project —{" "}
        <span className="text-light">a future play</span>
      </p>
    </section>
  );
}