// A drafting-sheet drawing of the Neuve Labs mark: construction lines,
// dimensions and the two shapes of the logo, drawn as fine linework.
const MARK_RIGHT = "M316.5 158.25V32.75L289.75 0H158.25V316.5L316.5 158.25Z";
const MARK_LEFT = "M17.77 17.77L0 26.75V316.5H158.25V158.25L17.77 17.77Z";

const line = { stroke: "currentColor", strokeWidth: 1, vectorEffect: "non-scaling-stroke" };
const dashed = { ...line, strokeDasharray: "3 5" };
const label = {
  fill: "var(--ink-4)",
  fontFamily: "var(--font-mono)",
  fontSize: 9,
  letterSpacing: "0.04em",
};

export default function HeroDrawing({ className = "" }) {
  const g = [0, 158.25, 316.5];
  return (
    <svg className={className} viewBox="-90 -90 497 497" fill="none" aria-hidden="true" focusable="false">
      {/* construction grid */}
      {g.map((v) => (
        <g key={v}>
          <line x1={v} y1={-90} x2={v} y2={407} {...dashed} />
          <line x1={-90} y1={v} x2={407} y2={v} {...dashed} />
        </g>
      ))}
      <circle cx={158.25} cy={158.25} r={158.25} {...dashed} />
      <line x1={0} y1={316.5} x2={316.5} y2={0} {...dashed} />

      {/* the mark */}
      <path d={MARK_RIGHT} fill="var(--cyan)" fillOpacity={0.1} />
      <path d={MARK_LEFT} fill="var(--blue)" fillOpacity={0.07} />
      <path d={MARK_RIGHT} {...line} stroke="var(--ink-4)" />
      <path d={MARK_LEFT} {...line} stroke="var(--ink-4)" />

      {/* vertices */}
      {[
        [158.25, 0], [289.75, 0], [316.5, 32.75], [316.5, 158.25], [158.25, 316.5],
        [0, 316.5], [0, 26.75], [17.77, 17.77], [158.25, 158.25],
      ].map(([x, y]) => (
        <rect key={`${x}-${y}`} x={x - 2.5} y={y - 2.5} width={5} height={5} fill="var(--paper)" {...line} stroke="var(--ink-4)" />
      ))}

      {/* dimensions */}
      <line x1={0} y1={-40} x2={316.5} y2={-40} {...line} />
      <line x1={0} y1={-46} x2={0} y2={-34} {...line} />
      <line x1={316.5} y1={-46} x2={316.5} y2={-34} {...line} />
      <text x={158.25} y={-48} textAnchor="middle" style={label}>316.50</text>

      <line x1={356} y1={0} x2={356} y2={158.25} {...line} />
      <line x1={350} y1={0} x2={362} y2={0} {...line} />
      <line x1={350} y1={158.25} x2={362} y2={158.25} {...line} />
      <text x={366} y={82} style={label}>158.25</text>

      <text x={176} y={300} style={label}>45°</text>
      <text x={-82} y={-70} style={label}>NL—01</text>
    </svg>
  );
}
