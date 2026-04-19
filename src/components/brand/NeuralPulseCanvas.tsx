import { useEffect, useRef } from "react";

type Mode = "pulse" | "flow" | "wave" | "burst";

const W = 620;
const H = 220;

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

interface Particle {
  edge: number;
  t: number;
  delay: number;
  speed: number;
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

export function NeuralPulseCanvas({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width = `${W}px`;
    canvas.style.height = `${H}px`;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.scale(dpr, dpr);

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let mode: Mode = "pulse";
    let particles: Particle[] = [];
    const nodeGlow = nodes.map(() => 0);
    let t = 0;
    let burstPhase = 0;
    let raf = 0;

    const makeParticle = (edgeIdx: number, delay = 0): Particle => ({
      edge: edgeIdx,
      t: 0,
      delay,
      speed: 0.006 + Math.random() * 0.006,
    });

    const seedParticles = () => {
      particles = [];
      if (mode === "pulse") {
        edges.forEach((_e, i) => {
          if (Math.random() > 0.35) particles.push(makeParticle(i, Math.random() * 200));
        });
      } else if (mode === "flow") {
        edges.forEach((e, i) => {
          if (nodes[e[1]].y - nodes[e[0]].y > 0) particles.push(makeParticle(i, i * 18));
        });
      } else if (mode === "wave") {
        edges.forEach((e, i) => particles.push(makeParticle(i, nodes[e[0]].x * 1.2)));
      } else {
        burstPhase = 0;
      }
    };

    seedParticles();
    nodeGlow[12] = 0.8;

    // Auto-cycle modes every 8s
    const modes: Mode[] = ["pulse", "flow", "wave", "burst"];
    let modeIdx = 0;
    const cycleId = reduce ? 0 : window.setInterval(() => {
      modeIdx = (modeIdx + 1) % modes.length;
      mode = modes[modeIdx];
      seedParticles();
    }, 8000);

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      t++;

      ctx.fillStyle = "rgba(255,255,255,0.018)";
      for (let gx = 20; gx < 200; gx += 24) {
        for (let gy = 10; gy < H - 10; gy += 24) {
          ctx.beginPath();
          ctx.arc(gx, gy, 0.8, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      for (let i = 0; i < nodeGlow.length; i++) nodeGlow[i] *= 0.92;

      const dead: number[] = [];
      particles.forEach((p, pi) => {
        if (p.delay > 0) {
          p.delay--;
          return;
        }
        p.t += p.speed;
        if (p.t >= 1) {
          const [, b] = edges[p.edge];
          nodeGlow[b] = Math.min(1, nodeGlow[b] + 0.7);
          dead.push(pi);
          if (mode === "flow" || mode === "wave") {
            edges.forEach((e2, i2) => {
              if (e2[0] === b && Math.random() > 0.3) particles.push(makeParticle(i2, 0));
            });
          }
          if (mode === "burst") {
            edges.forEach((e2, i2) => {
              if (e2[0] === b) particles.push(makeParticle(i2, 0));
            });
          }
        }
      });
      for (let i = dead.length - 1; i >= 0; i--) particles.splice(dead[i], 1);

      if (mode === "pulse" && t % 80 === 0) {
        edges.forEach((_e, i) => {
          if (Math.random() > 0.6) particles.push(makeParticle(i, Math.random() * 120));
        });
      }
      if (mode === "flow" && particles.filter((p) => p.delay <= 0).length < 3) {
        edges.forEach((e, i) => {
          if (nodes[e[0]].tier <= 0) particles.push(makeParticle(i, Math.random() * 60));
        });
      }
      if (mode === "wave" && t % 140 === 0) {
        edges.forEach((e, i) => particles.push(makeParticle(i, nodes[e[0]].x * 1.2)));
      }
      if (mode === "burst" && particles.length === 0) {
        burstPhase++;
        if (burstPhase % 80 === 0) {
          edges.forEach((e, i) => {
            if (e[0] === 12 || e[1] === 12) particles.push(makeParticle(i, Math.random() * 20));
          });
        }
      }

      edges.forEach(([a, b]) => {
        const na = nodes[a], nb = nodes[b];
        const gx = ctx.createLinearGradient(na.x, na.y, nb.x, nb.y);
        gx.addColorStop(0, "rgba(180,180,180,0.22)");
        gx.addColorStop(0.5, "rgba(160,160,160,0.35)");
        gx.addColorStop(1, "rgba(180,180,180,0.22)");
        ctx.strokeStyle = gx;
        ctx.lineWidth = 0.9;
        ctx.beginPath();
        ctx.moveTo(na.x, na.y);
        ctx.lineTo(nb.x, nb.y);
        ctx.stroke();
      });

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
        tg.addColorStop(0, "rgba(220,220,220,0)");
        tg.addColorStop(1, "rgba(240,240,240,0.85)");
        ctx.strokeStyle = tg;
        ctx.lineWidth = 1.5;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(tx, ty);
        ctx.lineTo(px, py);
        ctx.stroke();
        const hg = ctx.createRadialGradient(px, py, 0, px, py, 4);
        hg.addColorStop(0, "rgba(255,255,255,0.95)");
        hg.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = hg;
        ctx.beginPath();
        ctx.arc(px, py, 4, 0, Math.PI * 2);
        ctx.fill();
      });

      nodes.forEach((n, i) => {
        const glow = nodeGlow[i];
        const baseSize = n.r;
        if (glow > 0.05) {
          const ringR = baseSize + 6 + glow * 8;
          const rg = ctx.createRadialGradient(n.x, n.y, baseSize, n.x, n.y, ringR);
          rg.addColorStop(0, `rgba(220,220,220,${glow * 0.25})`);
          rg.addColorStop(1, "rgba(220,220,220,0)");
          ctx.fillStyle = rg;
          ctx.beginPath();
          ctx.arc(n.x, n.y, ringR, 0, Math.PI * 2);
          ctx.fill();
        }
        const ng = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, baseSize * 3 + glow * 10);
        const baseBright = n.tier === -1 ? 0.55 : n.tier === 0 ? 0.4 : 0.28;
        ng.addColorStop(0, `rgba(230,230,230,${baseBright + glow * 0.45})`);
        ng.addColorStop(0.5, `rgba(160,160,160,${(baseBright + glow * 0.3) * 0.5})`);
        ng.addColorStop(1, "rgba(100,100,100,0)");
        ctx.fillStyle = ng;
        ctx.beginPath();
        ctx.arc(n.x, n.y, baseSize * 3 + glow * 8, 0, Math.PI * 2);
        ctx.fill();
        const cg = ctx.createRadialGradient(n.x - baseSize * 0.3, n.y - baseSize * 0.3, 0, n.x, n.y, baseSize);
        const cBright = n.tier === -1 ? 0.95 : n.tier === 0 ? 0.82 : 0.6;
        cg.addColorStop(0, `rgba(230,230,230,${Math.min(1, cBright + glow * 0.2)})`);
        cg.addColorStop(1, `rgba(120,120,120,${Math.max(0.3, 0.5 + glow * 0.3)})`);
        ctx.fillStyle = cg;
        ctx.beginPath();
        ctx.arc(n.x, n.y, baseSize, 0, Math.PI * 2);
        ctx.fill();
        if (n.tier === -1) {
          ctx.strokeStyle = `rgba(180,180,180,${0.25 + glow * 0.4})`;
          ctx.lineWidth = 0.7;
          ctx.beginPath();
          ctx.arc(n.x, n.y, 14, 0, Math.PI * 2);
          ctx.stroke();
          ctx.strokeStyle = `rgba(140,140,140,${0.12 + glow * 0.2})`;
          ctx.beginPath();
          ctx.arc(n.x, n.y, 19, 0, Math.PI * 2);
          ctx.stroke();
        }
        if (i === 0) {
          ctx.strokeStyle = `rgba(180,180,180,${0.3 + glow * 0.4})`;
          ctx.lineWidth = 0.7;
          ctx.beginPath();
          ctx.arc(n.x, n.y, 9, 0, Math.PI * 2);
          ctx.stroke();
        }
      });

      // Wordmark
      ctx.strokeStyle = "rgba(40,40,40,0.9)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(192, 28);
      ctx.lineTo(192, 182);
      ctx.stroke();

      const grad1 = ctx.createLinearGradient(210, 0, 590, 0);
      grad1.addColorStop(0, "#888");
      grad1.addColorStop(0.4, "#e8e8e8");
      grad1.addColorStop(1, "#777");
      ctx.fillStyle = grad1;
      ctx.font = "600 50px 'Rajdhani', sans-serif";
      ctx.fillText("SYNAPSES", 210, 108);

      ctx.strokeStyle = "rgba(30,30,30,0.9)";
      ctx.lineWidth = 0.8;
      ctx.beginPath();
      ctx.moveTo(210, 118);
      ctx.lineTo(600, 118);
      ctx.stroke();

      const grad2 = ctx.createLinearGradient(210, 0, 400, 0);
      grad2.addColorStop(0, "#333");
      grad2.addColorStop(0.5, "#666");
      grad2.addColorStop(1, "#333");
      ctx.fillStyle = grad2;
      ctx.font = "500 16px 'Rajdhani', sans-serif";
      ctx.fillText("GROUP", 212, 140);

      ctx.fillStyle = "rgba(70,70,70,0.95)";
      ctx.font = "9px 'Courier New', monospace";
      ctx.fillText("AUTONOMOUS INTELLIGENCE · EST. 2025", 212, 164);

      if (!reduce) raf = requestAnimationFrame(draw);
    };

    draw();
    if (reduce) cancelAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(raf);
      if (cycleId) clearInterval(cycleId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ maxWidth: "100%", height: "auto" }}
      aria-label="Synapses Group neural network animation"
    />
  );
}
