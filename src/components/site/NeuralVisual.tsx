/**
 * Lightweight abstract neural-network visualisation.
 * Pure SVG + CSS — no canvas, no images, no external deps.
 */
const layers: { x: number; ys: number[] }[] = [
  { x: 40, ys: [70, 140, 210, 280] },
  { x: 140, ys: [50, 120, 190, 260, 330] },
  { x: 240, ys: [70, 140, 210, 280] },
  { x: 330, ys: [125, 195, 265] },
];

const edges: { x1: number; y1: number; x2: number; y2: number }[] = [];
for (let i = 0; i < layers.length - 1; i += 1) {
  const a = layers[i]!;
  const b = layers[i + 1]!;
  a.ys.forEach((y1, ai) => {
    b.ys.forEach((y2, bi) => {
      if ((ai + bi) % 2 === 0) edges.push({ x1: a.x, y1, x2: b.x, y2 });
    });
  });
}

export function NeuralVisual() {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      <div
        aria-hidden
        className="absolute inset-8 rounded-full bg-primary/15 blur-3xl"
      />
      <svg
        viewBox="0 0 380 400"
        role="img"
        aria-label="Abstract neural network visualisation with connected nodes and data lines"
        className="relative w-full animate-float-slower"
      >
        <defs>
          <linearGradient id="edge" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.55" />
            <stop offset="100%" stopColor="var(--secondary)" stopOpacity="0.35" />
          </linearGradient>
          <radialGradient id="node" cx="50%" cy="50%">
            <stop offset="0%" stopColor="var(--primary)" />
            <stop offset="100%" stopColor="var(--secondary)" stopOpacity="0.7" />
          </radialGradient>
        </defs>

        {/* geometric frame */}
        <g stroke="var(--border)" strokeWidth="1" fill="none">
          <rect x="14" y="18" width="352" height="364" rx="28" />
          <circle cx="190" cy="200" r="150" strokeDasharray="3 9" />
        </g>

        {edges.map((e, i) => (
          <line
            key={i}
            x1={e.x1}
            y1={e.y1}
            x2={e.x2}
            y2={e.y2}
            stroke="url(#edge)"
            strokeWidth="1"
            strokeDasharray="6 10"
            className="animate-dash"
            style={{ animationDelay: `${(i % 7) * -0.8}s` }}
          />
        ))}

        {layers.flatMap((layer, li) =>
          layer.ys.map((y, ni) => (
            <g key={`${li}-${ni}`}>
              <circle cx={layer.x} cy={y} r="10" fill="var(--primary)" opacity="0.08" />
              <circle
                cx={layer.x}
                cy={y}
                r="4"
                fill="url(#node)"
                className="animate-pulse-node"
                style={{ animationDelay: `${(li * 5 + ni) * -0.35}s` }}
              />
            </g>
          )),
        )}
      </svg>

      {/* floating code card */}
      <div className="panel absolute -bottom-6 -left-2 w-56 animate-float-slow p-4 backdrop-blur-md sm:-left-6 sm:w-64">
        <div className="flex items-center gap-1.5 pb-3">
          <span className="h-2 w-2 rounded-full bg-primary/70" />
          <span className="h-2 w-2 rounded-full bg-secondary/70" />
          <span className="h-2 w-2 rounded-full bg-muted-foreground/40" />
        </div>
        <ul className="space-y-1.5 font-mono text-[11px] text-muted-foreground sm:text-xs">
          <li>
            <span className="text-primary">stack</span> = Python
          </li>
          <li>
            <span className="text-primary">field</span> = Machine Learning
          </li>
          <li>
            <span className="text-primary">focus</span> = AI
          </li>
          <li className="pt-1 text-foreground">Build → Test → Learn → Improve</li>
        </ul>
      </div>
    </div>
  );
}
