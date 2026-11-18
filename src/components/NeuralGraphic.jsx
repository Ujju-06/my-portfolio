const nodes = [
  { cx: 80, cy: 70, r: 5 },
  { cx: 170, cy: 40, r: 4 },
  { cx: 250, cy: 90, r: 6 },
  { cx: 90, cy: 160, r: 4 },
  { cx: 180, cy: 140, r: 7 },
  { cx: 270, cy: 180, r: 4 },
  { cx: 130, cy: 230, r: 5 },
  { cx: 220, cy: 250, r: 4 },
  { cx: 300, cy: 130, r: 5 },
]

const edges = [
  [0, 1],
  [1, 2],
  [0, 3],
  [0, 4],
  [1, 4],
  [2, 4],
  [2, 8],
  [3, 4],
  [4, 5],
  [4, 6],
  [5, 8],
  [5, 7],
  [6, 7],
]

export function NeuralGraphic() {
  return (
    <svg viewBox="0 0 360 300" className="h-full w-full" role="img" aria-label="Abstract neural network graphic">
      {edges.map(([from, to], index) => (
        <line
          key={`${from}-${to}`}
          x1={nodes[from].cx}
          y1={nodes[from].cy}
          x2={nodes[to].cx}
          y2={nodes[to].cy}
          stroke="url(#line)"
          strokeWidth="1.2"
          className="animate-pulseDot"
          style={{ animationDelay: `${index * 120}ms` }}
        />
      ))}
      {nodes.map((node, index) => (
        <g key={`${node.cx}-${node.cy}`}>
          <circle cx={node.cx} cy={node.cy} r={node.r + 8} fill="rgba(61,139,255,0.08)" />
          <circle
            cx={node.cx}
            cy={node.cy}
            r={node.r}
            fill={index % 2 === 0 ? '#3D8BFF' : '#8B5CFF'}
            className="animate-pulseDot"
            style={{ animationDelay: `${index * 180}ms` }}
          />
        </g>
      ))}
      <defs>
        <linearGradient id="line" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3D8BFF" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#8B5CFF" stopOpacity="0.35" />
        </linearGradient>
      </defs>
    </svg>
  )
}
