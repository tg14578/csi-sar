export default function PipelineDiagram() {
  const steps = [
    { n: 1, title: 'CSI Capture',        sub: 'Promiscuous mode + UDP ~50 Hz' },
    { n: 2, title: 'Buffering',          sub: '6 s short / 90 s long windows' },
    { n: 3, title: 'Outlier Rejection',  sub: 'Hampel/MAD + SVD drift cancel' },
    { n: 4, title: 'Welch Periodogram',  sub: '0.15–0.40 Hz band power' },
    { n: 5, title: 'Soft Attribution',   sub: '50/50 split, √N weighting' },
    { n: 6, title: 'HMM Forward Filter', sub: 'Quadrant kinematic smoother' },
  ]

  const positions = [
    [0, 0], [0, 1], [0, 2],
    [1, 2], [1, 1], [1, 0],
  ]

  const boxW = 240, boxH = 100, gapX = 40, gapY = 80
  const rowY = [30, 30 + boxH + gapY]
  const totalW = 3 * boxW + 2 * gapX
  const totalH = rowY[1] + boxH + 20
  const cellX = col => col * (boxW + gapX)
  const cellY = row => rowY[row]

  const stroke = '#3a6ea5'
  const arrow = 'url(#ppl-arrow)'
  const fontFamily = 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif'

  const HArrow = ({ fromCol, toCol, row }) => {
    const y = cellY(row) + boxH / 2
    const goingRight = toCol > fromCol
    const x1 = goingRight ? cellX(fromCol) + boxW       : cellX(fromCol)
    const x2 = goingRight ? cellX(toCol) - 4            : cellX(toCol) + boxW + 4
    return <line x1={x1} y1={y} x2={x2} y2={y} stroke={stroke} strokeWidth="2.5" markerEnd={arrow} />
  }

  return (
    <svg
      role="img"
      aria-label="Signal processing pipeline: 6 stages from CSI capture to HMM forward filter"
      viewBox={`0 0 ${totalW} ${totalH}`}
      preserveAspectRatio="xMidYMid meet"
      style={{ width: '100%', height: 'auto', maxWidth: '780px', margin: '0 auto', display: 'block' }}
    >
      <defs>
        <marker id="ppl-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill={stroke} />
        </marker>
      </defs>

      <HArrow fromCol={0} toCol={1} row={0} />
      <HArrow fromCol={1} toCol={2} row={0} />
      <line
        x1={cellX(2) + boxW / 2} y1={cellY(0) + boxH}
        x2={cellX(2) + boxW / 2} y2={cellY(1) - 4}
        stroke={stroke} strokeWidth="2.5" markerEnd={arrow}
      />
      <HArrow fromCol={2} toCol={1} row={1} />
      <HArrow fromCol={1} toCol={0} row={1} />

      {steps.map((s, i) => {
        const [row, col] = positions[i]
        const x = cellX(col), y = cellY(row)
        return (
          <g key={s.n}>
            <rect
              x={x} y={y} width={boxW} height={boxH} rx="14" ry="14"
              fill="#ffffff" stroke={stroke} strokeWidth="2"
            />
            <circle cx={x + 26} cy={y + 26} r="16" fill="#ff6700" />
            <text
              x={x + 26} y={y + 31} textAnchor="middle"
              fill="#ffffff" fontSize="15" fontWeight="700" fontFamily={fontFamily}
            >{s.n}</text>
            <text
              x={x + 52} y={y + 32}
              fill="#003b73" fontSize="15" fontWeight="700" fontFamily={fontFamily}
            >{s.title}</text>
            <text
              x={x + 18} y={y + 70}
              fill="#4b5563" fontSize="12.5" fontFamily={fontFamily}
            >{s.sub}</text>
          </g>
        )
      })}
    </svg>
  )
}
