import { useEffect, useRef } from "react";

// Compact burst-mode animated mark for the navbar.
// Renders only the node graph (no wordmark) in continuous burst mode.

const VB = 200; // viewBox-ish coordinate space

const nodes = [
  { x: 100, y: 22, r: 4.5, tier: 0 },
  { x: 62, y: 50, r: 3.5, tier: 1 },
  { x: 138, y: 50, r: 3.5, tier: 1 },
  { x: 40, y: 88, r: 3.5, tier: 1 },
  { x: 160, y: 88, r: 3.5, tier: 1 },
  { x: 52, y: 126, r: 3, tier: 2 },
  { x: 148, y: 126, r: 3, tier: 2 },
  { x: 74, y: 155, r: 3, tier: 2 },
  { x: 126, y: 155, r: 3, tier: 2 },
  { x: 100, y: 165, r: 3.5, tier: 1 },
  { x: 84, y: 80, r: 5, tier: 0 },
  { x: 116, y: 80, r: 5, tier: 0 },
  { x: 100, y: 112, r: 7, tier: -1 },
];

const edges: [number, number][] = [
  [0, 1], [0, 2], [1, 3], [2, 4], [3, 5], [4, 6], [5, 7], [6, 8], [7, 9], [8, 9],
  [1, 10], [2, 11], [3, 10], [4, 11], [10, 11], [10, 12], [11, 12],
  [5, 12], [6, 12], [7, 12], [8, 12],
  [0, 12], [1, 11], [2, 10],
];

interface Particle { edge: number; t: number; delay: number; speed: number }

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export function BurstMark({ size = 56, className }: { size?: number; className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const scale = (size / VB) * dpr;
    ctx.scale(scale, scale);

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let particles: Particle[] = [];
    const nodeGlow = nodes.map(() => 0);
    let burstPhase = 0;
    let raf = 0;

    const make = (edgeIdx: number, delay = 0): Particle => ({
      edge: edgeIdx, t: 0, delay,
      speed: 0.012 + Math.random() * 0.008,
    });

    nodeGlow[12] = 0.9;

    const draw = () => {
      ctx.clearRect(0, 0, VB, VB);
      for (let i = 0; i < nodeGlow.length; i++) nodeGlow[i] *= 0.92;

      const dead: number[] = [];
      particles.forEach((p, pi) => {
        if (p.delay > 0) { p.delay--; return; }
        p.t += p.speed;
        if (p.t >= 1) {
          const [, b] = edges[p.edge];
          nodeGlow[b] = Math.min(1, nodeGlow[b] + 0.7);
          dead.push(pi);
          edges.forEach((e2, i2) => {
            if (e2[0] === b) particles.push(make(i2, 0));
          });
        }
      });
      for (let i = dead.length - 1; i >= 0; i--) particles.splice(dead[i], 1);

      if (particles.length === 0) {
        burstPhase++;
        if (burstPhase % 50 === 0) {
          edges.forEach((e, i) => {
            if (e[0] === 12 || e[1] === 12) particles.push(make(i, Math.random() * 15));
          });
        }
      }

      // Edges
      edges.forEach(([a, b]) => {
        const na = nodes[a], nb = nodes[b];
        ctx.strokeStyle = "rgba(170,170,170,0.28)";
        ctx.lineWidth = 0.9;
        ctx.beginPath();
        ctx.moveTo(na.x, na.y);
        ctx.lineTo(nb.x, nb.y);
        ctx.stroke();
      });

      // Particle trails
      particles.forEach((p) => {
        if (p.delay > 0) return;
        const [a, b] = edges[p.edge];
        const na = nodes[a], nb = nodes[b];
        const px = lerp(na.x, nb.x, p.t);
        const py = lerp(na.y, nb.y, p.t);
        const ts = Math.max(0, p.t - 0.18);
        const tx = lerp(na.x, nb.x, ts);
        const ty = lerp(na.y, nb.y, ts);
        const tg = ctx.createLinearGradient(tx, ty, px, py);
        tg.addColorStop(0, "rgba(240,240,240,0)");
        tg.addColorStop(1, "rgba(255,255,255,0.95)");
        ctx.strokeStyle = tg;
        ctx.lineWidth = 1.6;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(tx, ty);
        ctx.lineTo(px, py);
        ctx.stroke();
        const hg = ctx.createRadialGradient(px, py, 0, px, py, 5);
        hg.addColorStop(0, "rgba(255,255,255,1)");
        hg.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = hg;
        ctx.beginPath();
        ctx.arc(px, py, 5, 0, Math.PI * 2);
        ctx.fill();
      });

      // Nodes
      nodes.forEach((n, i) => {
        const glow = nodeGlow[i];
        const baseSize = n.r;
        if (glow > 0.05) {
          const ringR = baseSize + 6 + glow * 8;
          const rg = ctx.createRadialGradient(n.x, n.y, baseSize, n.x, n.y, ringR);
          rg.addColorStop(0, `rgba(230,230,230,${glow * 0.3})`);
          rg.addColorStop(1, "rgba(230,230,230,0)");
          ctx.fillStyle = rg;
          ctx.beginPath();
          ctx.arc(n.x, n.y, ringR, 0, Math.PI * 2);
          ctx.fill();
        }
        const cBright = n.tier === -1 ? 0.95 : n.tier === 0 ? 0.85 : 0.65;
        const cg = ctx.createRadialGradient(n.x - baseSize * 0.3, n.y - baseSize * 0.3, 0, n.x, n.y, baseSize);
        cg.addColorStop(0, `rgba(235,235,235,${Math.min(1, cBright + glow * 0.2)})`);
        cg.addColorStop(1, `rgba(130,130,130,${Math.max(0.3, 0.5 + glow * 0.3)})`);
        ctx.fillStyle = cg;
        ctx.beginPath();
        ctx.arc(n.x, n.y, baseSize, 0, Math.PI * 2);
        ctx.fill();
        if (n.tier === -1) {
          ctx.strokeStyle = `rgba(190,190,190,${0.3 + glow * 0.4})`;
          ctx.lineWidth = 0.7;
          ctx.beginPath();
          ctx.arc(n.x, n.y, 14, 0, Math.PI * 2);
          ctx.stroke();
        }
      });

      if (!reduce) raf = requestAnimationFrame(draw);
    };

    draw();
    if (reduce) cancelAnimationFrame(raf);
    return () => cancelAnimationFrame(raf);
  }, [size]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-label="Synapses mark"
      style={{ display: "block" }}
    />
  );
}