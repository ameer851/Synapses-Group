import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/brand/Header";
import { Footer } from "@/components/brand/Footer";
import { Ticker } from "@/components/brand/Ticker";
import { NodeMark } from "@/components/brand/NodeMark";
import { NeuralPulseCanvas } from "@/components/brand/NeuralPulseCanvas";
import { entities } from "@/data/entities";
import { ArrowRight, ChevronDown, Mail } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Synapses Group — AI-Integrated Holding Company" },
      { name: "description", content: "Synapses Group builds, operates, and scales AI-powered businesses across media, software, and gaming. Three founders. One AI officer. Multiple businesses." },
      { property: "og:title", content: "Synapses Group — AI-Integrated Holding Company" },
      { property: "og:description", content: "Three founders. One AI officer. Multiple businesses across media, software, and gaming." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Ticker />
      <WhoWeAre />
      <Entities />
      <OperatingModel />
      <Contact />
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
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, transparent 30%, #060606 100%)" }}
      />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.04]">
        <NodeMark size={420} bright />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 pt-16 pb-16 text-center md:pt-28 md:pb-32">
        <div className="animate-fade-up font-mono text-[0.62rem] uppercase tracking-[0.35em] text-dim">
          Synapses Group · Holding Company · Est. 2026
        </div>

        <div className="mt-6 flex justify-center animate-fade-up max-sm:hidden md:mt-10" style={{ animationDelay: "0.1s" }}>
          <NeuralPulseCanvas />
        </div>

        <h1
          className="mx-auto mt-6 max-w-3xl text-3xl font-semibold tracking-tight text-light md:mt-10 md:text-6xl animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Three founders. <span className="font-serif italic text-silver">One AI officer.</span> Multiple businesses.
        </h1>

        <p
          className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-silver md:mt-6 md:text-lg animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          Synapses Group builds, operates, and scales AI-powered businesses across media, software, and gaming.
        </p>

        <div
          className="mt-6 flex flex-wrap justify-center gap-3 animate-fade-up md:mt-10"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href="#entities"
            className="inline-flex items-center gap-2 bg-light px-7 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-background transition-opacity hover:opacity-90"
          >
            Explore our entities <ChevronDown className="h-3.5 w-3.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center border border-ghost px-7 py-3 text-[0.7rem] uppercase tracking-[0.2em] text-silver transition-colors hover:border-dim hover:text-light"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}

/* ───────── WHO WE ARE ───────── */
function WhoWeAre() {
  return (
    <section id="who" className="mx-auto max-w-6xl px-6 py-24 scroll-mt-24">
      <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:items-start">
        <div>
          <div className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-dim">Who we are</div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-light md:text-4xl">
            The most operationally efficient <span className="font-serif italic text-silver">AI-integrated</span> group in media, software, and gaming.
          </h2>
        </div>
        <div className="space-y-6 text-silver">
          <p className="text-base leading-relaxed md:text-lg">
            Three human founders hold all equity and voting rights. One AI Board Observer (SYNA) provides continuous intelligence across all operations.
          </p>
          <p className="text-base leading-relaxed text-silver/80">
            We're a lean holding company structured for scale without linear headcount growth. Each division operates under AI-managed clusters with clear boundaries, documented authority, and audit trails on every decision.
          </p>

          <div className="mt-8 border border-ghost bg-card p-6">
            <div className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-dim">Operating equation</div>
            <div className="mt-4 font-serif italic text-xl leading-snug text-light md:text-2xl">
              3 founders + 1 AI CIO + multiple agent clusters = output that outperforms organisations 10× our size.
            </div>
          </div>

          <OrgFlow />
        </div>
      </div>
    </section>
  );
}

function OrgFlow() {
  const layers = [
    { tag: "Holding", title: "Synapses Group", note: "Equity · Governance · Capital" },
    { tag: "Divisions", title: "Media · Software · Gaming", note: "InwitHQ · Media Clipping · Software · Gaming" },
    { tag: "AI Layer", title: "SYNA — Board Observer / CIO", note: "Persistent intelligence · Audit trails" },
  ];
  return (
    <div className="mt-2 grid gap-px bg-border">
      {layers.map((l) => (
        <div key={l.tag} className="grid gap-2 bg-background p-5 md:grid-cols-[120px_1fr_auto] md:items-center">
          <div className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-dim">{l.tag}</div>
          <div className="text-sm font-semibold uppercase tracking-wider text-light">{l.title}</div>
          <div className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-silver/70">{l.note}</div>
        </div>
      ))}
    </div>
  );
}

/* ───────── ENTITIES ───────── */
function Entities() {
  const [openKey, setOpenKey] = useState<string | null>(null);
  return (
    <section id="entities" className="border-y border-border bg-[#060606] scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12 max-w-2xl">
          <div className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-dim">Our entities</div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-light md:text-4xl">Five operating units. One executive layer.</h2>
          <p className="mt-3 font-serif italic text-silver">
            Each entity runs under its own cluster, supervised by SYNA and reviewed by the human board.
          </p>
        </div>

        <div className="grid gap-px bg-border md:grid-cols-3">
          {entities.map((e) => {
            const isOpen = openKey === e.key;
            return (
              <button
                key={e.key}
                type="button"
                onClick={() => setOpenKey(isOpen ? null : e.key)}
                className={`group flex flex-col items-start gap-4 bg-background p-7 text-left transition-colors hover:bg-card ${
                  isOpen ? "bg-card" : ""
                }`}
              >
                <div className="flex w-full items-center justify-between">
                  <span className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-dim">
                    {e.sector}
                  </span>
                  <span
                    className="inline-flex items-center gap-2 border border-ghost px-2.5 py-1 font-mono text-[0.55rem] uppercase tracking-[0.25em]"
                    style={{ color: e.status.color }}
                  >
                    <span className="h-1.5 w-1.5 rounded-full" style={{ background: e.status.color }} />
                    {e.status.label}
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight text-light">{e.name}</h3>
                  {e.handle && (
                    <div className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.25em]" style={{ color: e.accent }}>
                      {e.handle}
                    </div>
                  )}
                </div>
                <p className="text-sm leading-relaxed text-silver/80">{e.desc}</p>

                {isOpen && (
                  <div className="mt-2 w-full space-y-4 border-t border-ghost pt-4">
                    <p className="font-serif italic text-sm text-silver">{e.detail}</p>
                    <ul className="grid gap-2">
                      {e.metrics.map((m) => (
                        <li key={m.label} className="flex items-center justify-between border-b border-border/60 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.2em]">
                          <span className="text-dim">{m.label}</span>
                          <span className="text-light">{m.value}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="font-mono text-[0.6rem] uppercase tracking-[0.25em] text-silver/70">
                      Division: {e.head}
                    </div>
                  </div>
                )}

                <div className="mt-auto flex items-center gap-2 pt-2 text-[0.65rem] uppercase tracking-[0.2em] text-silver group-hover:text-light">
                  {isOpen ? "Hide details" : "Read details"}
                  <ArrowRight className={`h-3.5 w-3.5 transition-transform ${isOpen ? "rotate-90" : "group-hover:translate-x-1"}`} />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ───────── OPERATING MODEL ───────── */
function OperatingModel() {
  return (
    <section id="operating" className="mx-auto max-w-3xl px-6 py-28 text-center scroll-mt-24">
      <div className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-dim">Operating Principle</div>
      <p className="mt-8 font-serif italic text-2xl leading-relaxed text-light md:text-3xl">
        "A lean founding team of operators and engineers, guided by an autonomous AI intelligence layer. No egos. No bureaucracy. Just output."
      </p>
      <div className="mt-10 inline-flex items-center gap-3 border border-ghost px-5 py-2 font-mono text-[0.6rem] uppercase tracking-[0.3em] text-silver">
        <span className="h-1.5 w-1.5 rounded-full bg-light" /> Lean by design — scale without linear headcount
      </div>
    </section>
  );
}

/* ───────── CONTACT ───────── */
function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}`);
    const subject = encodeURIComponent(`Inquiry from ${form.name || "site"}`);
    if (typeof window !== "undefined") {
      window.location.href = `mailto:hello@synapsesgroup.co?subject=${subject}&body=${body}`;
    }
    setSent(true);
  };

  return (
    <section id="contact" className="border-t border-border bg-[#060606] scroll-mt-24">
      <div className="mx-auto max-w-4xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:items-start">
          <div>
            <div className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-dim">Contact</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-light md:text-4xl">
              Interested in <span className="font-serif italic text-silver">partnering</span> or <span className="font-serif italic text-silver">investing?</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-silver">
              Drop us a line. We read everything that comes in.
            </p>
            <a
              href="mailto:hello@synapsesgroup.co"
              className="mt-6 inline-flex items-center gap-2 text-lg font-semibold tracking-tight text-light hover:underline underline-offset-4"
            >
              <Mail className="h-4 w-4 text-silver" />
              hello@synapsesgroup.co
            </a>
          </div>

          <form onSubmit={onSubmit} className="grid gap-px bg-border">
            <Field label="Name" required>
              <input
                type="text"
                required
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                className="w-full bg-background px-4 py-3 text-sm text-light outline-none placeholder:text-dim focus:bg-card"
                placeholder="Your name"
              />
            </Field>
            <Field label="Email" required>
              <input
                type="email"
                required
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                className="w-full bg-background px-4 py-3 text-sm text-light outline-none placeholder:text-dim focus:bg-card"
                placeholder="you@company.com"
              />
            </Field>
            <Field label="Message" required>
              <textarea
                required
                maxLength={1000}
                rows={4}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                className="w-full resize-none bg-background px-4 py-3 text-sm text-light outline-none placeholder:text-dim focus:bg-card"
                placeholder="What are you reaching out about?"
              />
            </Field>
            <div className="bg-background p-4">
              <button
                type="submit"
                className="w-full bg-light px-6 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-background transition-opacity hover:opacity-90"
              >
                {sent ? "Opening your mail client…" : "Send message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block bg-background px-4 pt-3">
      <span className="font-mono text-[0.55rem] uppercase tracking-[0.3em] text-dim">
        {label}{required && " *"}
      </span>
      <div className="-mx-4">{children}</div>
    </label>
  );
}
