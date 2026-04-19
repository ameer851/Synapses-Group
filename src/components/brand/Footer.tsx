import { Link } from "@tanstack/react-router";
import { LogoFull } from "./LogoFull";
import { Ticker } from "./Ticker";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-[#060606]">
      <Ticker />
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="-ml-2">
            <LogoFull width={300} />
          </div>
          <p className="mt-6 max-w-sm font-serif italic text-silver/80 text-sm leading-relaxed">
            A holding company that builds and operates AI-powered businesses. Three entities. One autonomous executive.
          </p>
        </div>
        <div>
          <div className="mb-4 font-mono text-[0.6rem] uppercase tracking-[0.3em] text-dim">Navigate</div>
          <ul className="space-y-2 text-sm text-silver">
            <li><Link to="/" className="hover:text-light transition-colors">Home</Link></li>
            <li><Link to="/companies" className="hover:text-light transition-colors">Companies</Link></li>
            <li><Link to="/about" className="hover:text-light transition-colors">About</Link></li>
            <li><Link to="/contact" className="hover:text-light transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="mb-4 font-mono text-[0.6rem] uppercase tracking-[0.3em] text-dim">Reach Us</div>
          <ul className="space-y-2 text-sm text-silver">
            <li><a href="mailto:hello@synapsesgroup.com" className="hover:text-light transition-colors">hello@synapsesgroup.com</a></li>
            <li><a href="mailto:board@synapsesgroup.com" className="hover:text-light transition-colors">board@synapsesgroup.com</a></li>
            <li><a href="mailto:press@synapsesgroup.com" className="hover:text-light transition-colors">press@synapsesgroup.com</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center font-mono text-[0.6rem] uppercase tracking-[0.3em] text-dim">
        © 2025 Synapses Group · Autonomous Intelligence
      </div>
    </footer>
  );
}
