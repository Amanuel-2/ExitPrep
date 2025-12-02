import React from 'react';

// Simple responsive SVG line chart. No external libs.
export default function StatsChart({ data = [3, 6, 4, 8, 7, 10, 9], labels = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'], className = '' }) {
  const width = 600;
  const height = 180;
  const padding = 24;

  const max = Math.max(...data, 1);
  const points = data.map((d, i) => {
    const x = padding + (i * (width - padding * 2)) / (data.length - 1);
    const y = padding + (1 - d / max) * (height - padding * 2);
    return [x, y];
  });

  const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p[0]} ${p[1]}`).join(' ');

  return (
    <div className={`w-full ${className}`}>
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full">
        {/* grid lines */}
        <g stroke="#2d3748" strokeWidth={0.5}>
          {[0, 0.25, 0.5, 0.75, 1].map((t, i) => (
            <line key={i} x1={padding} x2={width - padding} y1={padding + t * (height - padding * 2)} y2={padding + t * (height - padding * 2)} />
          ))}
        </g>

        {/* area */}
        <path d={`${pathD} L ${width - padding} ${height - padding} L ${padding} ${height - padding} Z`} fill="rgba(99,102,241,0.12)" stroke="none" />

        {/* line */}
        <path d={pathD} fill="none" stroke="#6366f1" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />

        {/* points */}
        {points.map((p, i) => (
          <circle key={i} cx={p[0]} cy={p[1]} r={3.5} fill="#fff" stroke="#6366f1" strokeWidth={1.5} />
        ))}

        {/* x labels */}
        {points.map((p, i) => (
          <text key={i} x={p[0]} y={height - 6} fontSize={10} textAnchor="middle" fill="#94a3b8">{labels[i]}</text>
        ))}
      </svg>
    </div>
  );
}
