import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/brand/Header";
import { Footer } from "@/components/brand/Footer";
import { emails } from "@/data/emails";
import { Copy, Check, Mail } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Synapses Group" },
      { name: "description", content: "Reach the Synapses Group team. Board, CEO office, press, partnerships, careers and product support." },
      { property: "og:title", content: "Contact — Synapses Group" },
      { property: "og:description", content: "Direct lines to the board, CEO office, press, partnerships, careers, and product teams." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [copied, setCopied] = useState<string>("");

  const onCopy = (addr: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(addr);
      setCopied(addr);
      setTimeout(() => setCopied(""), 1800);
    }
  };

  const priority = emails.filter((e) => e.priority);
  const standard = emails.filter((e) => !e.priority);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="border-b border-border bg-[#060606]">
        <div className="mx-auto max-w-4xl px-6 pt-20 pb-16 text-center">
          <div className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-dim">Contact</div>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-light md:text-6xl">
            <span className="font-serif italic text-silver">Direct</span> lines.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-silver">
            We don't run a contact form. Use the right address — it's read by the right person (or, in some cases, the right agent).
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-dim">Priority Contacts</div>
        <div className="mt-6 space-y-px bg-border">
          {priority.map((e) => (
            <EmailRow key={e.address} entry={e} highlighted copied={copied} onCopy={onCopy} />
          ))}
        </div>

        <div className="mt-16 font-mono text-[0.6rem] uppercase tracking-[0.3em] text-dim">Other Inquiries</div>
        <div className="mt-6 space-y-px bg-border">
          {standard.map((e) => (
            <EmailRow key={e.address} entry={e} copied={copied} onCopy={onCopy} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

function EmailRow({
  entry,
  highlighted = false,
  copied,
  onCopy,
}: {
  entry: { role: string; address: string; description: string };
  highlighted?: boolean;
  copied: string;
  onCopy: (a: string) => void;
}) {
  const isCopied = copied === entry.address;
  return (
    <div
      className={`group flex flex-col gap-4 px-6 py-6 transition-colors md:flex-row md:items-center md:justify-between ${
        highlighted ? "bg-card hover:bg-ghost/40" : "bg-background hover:bg-card"
      }`}
    >
      <div className="min-w-0 flex-1">
        <div className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-dim">{entry.role}</div>
        <a
          href={`mailto:${entry.address}`}
          className="mt-2 inline-flex items-center gap-2 text-lg font-semibold tracking-tight text-light hover:underline underline-offset-4 md:text-xl"
        >
          <Mail className="h-4 w-4 text-silver" />
          {entry.address}
        </a>
        <p className="mt-2 font-serif italic text-sm text-silver/80">{entry.description}</p>
      </div>
      <div className="flex shrink-0 gap-2">
        <button
          type="button"
          onClick={() => onCopy(entry.address)}
          className="inline-flex items-center gap-2 border border-ghost px-3 py-2 text-[0.65rem] uppercase tracking-[0.2em] text-silver transition-colors hover:border-dim hover:text-light"
          aria-label={`Copy ${entry.address}`}
        >
          {isCopied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
          {isCopied ? "Copied" : "Copy"}
        </button>
        <a
          href={`mailto:${entry.address}`}
          className="inline-flex items-center border border-ghost px-3 py-2 text-[0.65rem] uppercase tracking-[0.2em] text-silver transition-colors hover:border-dim hover:text-light"
        >
          Email
        </a>
      </div>
    </div>
  );
}
