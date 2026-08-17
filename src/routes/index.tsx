import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/brand/Header";
import { Footer } from "@/components/brand/Footer";
import { Ticker } from "@/components/brand/Ticker";
import { NodeMark } from "@/components/brand/NodeMark";
import { NeuralPulseCanvas } from "@/components/brand/NeuralPulseCanvas";
import {
  entities,
  continuityLayers,
  governanceStack,
  vaultGuarantees,
  principles,
  board,
} from "@/data/entities";
import { ArrowRight, ChevronDown, Mail } from "lucide-react";

const TITLE = "Synapses Group — Humanity's Continuity Company";
const DESC =
  "Synapses Group builds technologies and institutions that preserve, extend, connect and compound human intelligence across generations. Capital, Technology, Vault.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
      <Mission />
      <Architecture />
      <Vault />
      <Governance />
      <Principles />
      <Board />
      <Contact />
      <Footer />
    </div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-dim">{children}</div>
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
          Synapses Group · Refounding Charter v1.0 · Est. 2026
        </div>

        <div className="mt-6 flex justify-center animate-fade-up max-sm:hidden md:mt-10" style={{ animationDelay: "0.1s" }}>
          <NeuralPulseCanvas />
        </div>

        <h1
          className="mx-auto mt-6 max-w-3xl text-3xl font-semibold tracking-tight text-light md:mt-10 md:text-6xl animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Humanity's <span className="font-serif italic text-silver">continuity</span> company.
        </h1>

        <p
          className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-silver md:mt-6 md:text-lg animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          We build technologies and institutions that preserve, extend, connect and compound human
          intelligence across generations.
        </p>

        <div
          className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-[0.6rem] uppercase tracking-[0.35em] text-silver/70 animate-fade-up"
          style={{ animationDelay: "0.35s" }}
        >
          {["Preserve", "Extend", "Connect", "Compound", "Inherit"].map((w) => (
            <span key={w}>{w}</span>
          ))}
        </div>

        <div
          className="mt-8 flex flex-wrap justify-center gap-3 animate-fade-up md:mt-10"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href="#architecture"
            className="inline-flex items-center gap-2 bg-light px-7 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-background transition-opacity hover:opacity-90"
          >
            The architecture <ChevronDown className="h-3.5 w-3.5" />
          </a>
          <a
            href="#vault"
            className="inline-flex items-center border border-ghost px-7 py-3 text-[0.7rem] uppercase tracking-[0.2em] text-silver transition-colors hover:border-dim hover:text-light"
          >
            Synapses Vault
          </a>
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
          <Eyebrow>Mission</Eyebrow>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-light md:text-4xl">
            Intelligence is the most valuable asset in the universe — and the most{" "}
            <span className="font-serif italic text-silver">fragile</span>.
          </h2>
        </div>
        <div className="space-y-6 text-silver">
          <p className="text-base leading-relaxed md:text-lg">
            Synapses Group is a long-horizon holding company. We compound capital, operate
            technology, and protect the continuity of human memory and identity — under one
            governance layer built to outlive its founders.
          </p>
          <p className="text-base leading-relaxed text-silver/80">
            Products may be created, merged, spun out, acquired or retired. The mission does not
            change with them.
          </p>

          <div className="mt-8 border border-ghost bg-card p-6">
            <Eyebrow>Charter language</Eyebrow>
            <div className="mt-4 font-serif italic text-xl leading-snug text-light md:text-2xl">
              "To build technologies and institutions that preserve, extend, connect and compound
              human intelligence across generations."
            </div>
          </div>

          <div className="mt-2 grid gap-px bg-border">
            {continuityLayers.map((l) => (
              <div key={l.n} className="grid gap-2 bg-background p-5 md:grid-cols-[52px_140px_1fr] md:items-center">
                <div className="font-mono text-[0.6rem] tracking-[0.3em] text-dim">{l.n}</div>
                <div className="text-sm font-semibold uppercase tracking-wider text-light">{l.name}</div>
                <div className="text-sm text-silver/75">{l.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── ARCHITECTURE ───────── */
function Architecture() {
  const [openKey, setOpenKey] = useState<string | null>(null);
  return (
    <section id="architecture" className="border-y border-border bg-[#060606] scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12 max-w-2xl">
          <Eyebrow>Group architecture</Eyebrow>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-light md:text-4xl">
            Two pillars. Four domains. One protected core.
          </h2>
          <p className="mt-3 font-serif italic text-silver">
            Synapses Capital compounds resources. Synapses Technology builds. Synapses Vault
            preserves — and is deliberately separated from both.
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
                <div className="flex w-full items-center justify-between gap-3">
                  <span className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-dim">
                    {e.level}
                  </span>
                  <span
                    className="inline-flex items-center gap-2 border border-ghost px-2.5 py-1 font-mono text-[0.55rem] uppercase tracking-[0.25em]"
                    style={{ color: e.status.color }}
                  >
                    <span className="h-1.5 w-1.5 rounded-full" style={{ background: e.status.color }} />
                    {e.status.label}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold tracking-tight text-light">{e.name}</h3>
                <p className="text-sm leading-relaxed text-silver/80">{e.purpose}</p>

                {isOpen && (
                  <div className="mt-2 w-full space-y-4 border-t border-ghost pt-4">
                    <p className="font-serif italic text-sm text-silver">{e.detail}</p>
                    <ul className="grid gap-2">
                      {e.metrics.map((m) => (
                        <li
                          key={m.label}
                          className="flex items-center justify-between gap-3 border-b border-border/60 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.2em]"
                        >
                          <span className="text-dim">{m.label}</span>
                          <span className="text-light">{m.value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-auto flex items-center gap-2 pt-2 text-[0.65rem] uppercase tracking-[0.2em] text-silver group-hover:text-light">
                  {isOpen ? "Hide details" : "Read details"}
                  <ArrowRight
                    className={`h-3.5 w-3.5 transition-transform ${isOpen ? "rotate-90" : "group-hover:translate-x-1"}`}
                  />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ───────── VAULT ───────── */
function Vault() {
  return (
    <section id="vault" className="mx-auto max-w-6xl px-6 py-24 scroll-mt-24">
      <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:items-start">
        <div>
          <Eyebrow>Synapses Vault</Eyebrow>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-light md:text-4xl">
            Five guarantees, held above <span className="font-serif italic text-silver">commercial convenience</span>.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-silver">
            The Vault preserves authenticated memory, identity, connection and inheritance in a form
            designed to survive changes in technology, ownership, management and time.
          </p>
          <div className="mt-8 border border-ghost bg-card p-6">
            <Eyebrow>Capital / Vault separation</Eyebrow>
            <p className="mt-3 text-sm leading-relaxed text-silver/85">
              Capital compounds financial resources. Vault preserves human continuity. Neither pillar
              may quietly become the control mechanism of the other. No acquisition or financing may
              be used to circumvent that separation.
            </p>
          </div>
          <div className="mt-4 border border-ghost bg-card p-6">
            <Eyebrow>Key custody</Eyebrow>
            <p className="mt-3 text-sm leading-relaxed text-silver/85">
              Threshold cryptography by default. No employee, executive or automated system holds
              enough key material to unilaterally decrypt a Vault. Synapses maintains no secret
              master key.
            </p>
          </div>
        </div>

        <div className="grid gap-px bg-border">
          {vaultGuarantees.map((g, i) => (
            <div key={g.name} className="grid gap-2 bg-background p-6 md:grid-cols-[52px_1fr]">
              <div className="font-mono text-[0.6rem] tracking-[0.3em] text-dim">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-light">{g.name}</div>
                <p className="mt-2 text-sm leading-relaxed text-silver/80">{g.desc}</p>
              </div>
            </div>
          ))}
          <div className="bg-background p-6">
            <Eyebrow>Provenance classes</Eyebrow>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Verified source record", "Authenticated contribution", "AI reconstruction", "Unverified / contextual"].map((c) => (
                <span
                  key={c}
                  className="border border-ghost px-3 py-1.5 font-mono text-[0.55rem] uppercase tracking-[0.2em] text-silver/80"
                >
                  {c}
                </span>
              ))}
            </div>
            <p className="mt-4 font-serif italic text-sm text-silver">
              An AI reconstruction is never presented with the evidentiary status of a verified
              record.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── GOVERNANCE ───────── */
function Governance() {
  return (
    <section id="governance" className="border-y border-border bg-[#060606] scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12 max-w-2xl">
          <Eyebrow>Governance</Eyebrow>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-light md:text-4xl">
            A four-layer governance stack.
          </h2>
          <p className="mt-3 font-serif italic text-silver">
            Product detail never gets elevated into the constitutional layer merely because it is
            currently important.
          </p>
        </div>

        <div className="grid gap-px bg-border">
          {governanceStack.map((g) => (
            <div key={g.layer} className="grid gap-2 bg-background p-6 md:grid-cols-[64px_280px_1fr] md:items-center">
              <div className="font-mono text-[0.7rem] tracking-[0.3em] text-dim">{g.layer}</div>
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-light">{g.doc}</div>
              <div className="text-sm text-silver/75">{g.question}</div>
            </div>
          ))}
        </div>

        <div className="mt-px grid gap-px bg-border md:grid-cols-3">
          {[
            {
              t: "Continuity Council",
              d: "An independent guardian body chartered to protect Vault sovereignty and the Capital/Vault separation. It does not manage operations, and no single founder or investor may control it.",
            },
            {
              t: "AI authority",
              d: "AI systems act only within explicitly delegated scope. High-impact external actions require human approval; legal, financial and safety-critical output stays advisory until reviewed.",
            },
            {
              t: "Anti-capture",
              d: "No acquisition, financing or restructuring may be used to circumvent a protected constitutional principle.",
            },
          ].map((c) => (
            <div key={c.t} className="bg-background p-7">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-light">{c.t}</div>
              <p className="mt-3 text-sm leading-relaxed text-silver/80">{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── PRINCIPLES ───────── */
function Principles() {
  return (
    <section id="principles" className="mx-auto max-w-6xl px-6 py-24 scroll-mt-24">
      <Eyebrow>Operating principles</Eyebrow>
      <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-light md:text-4xl">
        Seven commitments that survive every product cycle.
      </h2>
      <div className="mt-12 grid gap-px bg-border md:grid-cols-2">
        {principles.map((p, i) => (
          <div key={p.name} className="bg-background p-7">
            <div className="font-mono text-[0.6rem] tracking-[0.3em] text-dim">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="mt-3 text-lg font-semibold tracking-tight text-light">{p.name}</div>
            <p className="mt-2 text-sm leading-relaxed text-silver/80">{p.desc}</p>
          </div>
        ))}
        <div className="bg-background p-7">
          <p className="font-serif italic text-lg leading-relaxed text-light">
            "Speculative technology is never represented as established capability."
          </p>
        </div>
      </div>
    </section>
  );
}

/* ───────── BOARD ───────── */
function Board() {
  return (
    <section id="board" className="border-y border-border bg-[#060606] scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <Eyebrow>The Board</Eyebrow>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-light md:text-4xl">
            Three founders. One governing body.
          </h2>
          <p className="mt-3 font-serif italic text-silver">
            Ownership determines economic rights. The Board governs. Delegated authority is
            documented, never assumed.
          </p>
        </div>
        <div className="mt-12 grid gap-px bg-border md:grid-cols-3">
          {board.map((m) => (
            <div key={m.name} className="bg-background p-7">
              <NodeMark size={40} />
              <div className="mt-5 text-xl font-semibold tracking-tight text-light">{m.name}</div>
              <div className="mt-2 font-mono text-[0.6rem] uppercase tracking-[0.25em] text-silver/70">
                {m.role}
              </div>
            </div>
          ))}
        </div>
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
      window.location.href = `mailto:hello@synapsesgroup.org?subject=${subject}&body=${body}`;
    }
    setSent(true);
  };

  return (
    <section id="contact" className="scroll-mt-24">
      <div className="mx-auto max-w-4xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:items-start">
          <div>
            <Eyebrow>Contact</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-light md:text-4xl">
              For <span className="font-serif italic text-silver">partnership</span>, capital, or
              charter enquiries.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-silver">
              We read everything that comes in.
            </p>
            <a
              href="mailto:hello@synapsesgroup.org"
              className="mt-6 inline-flex items-center gap-2 text-lg font-semibold tracking-tight text-light hover:underline underline-offset-4"
            >
              <Mail className="h-4 w-4 text-silver" />
              hello@synapsesgroup.org
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
