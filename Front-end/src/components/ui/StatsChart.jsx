import React from 'react';

// Futuristic SVG line chart with gradient and glow effects
export default function StatsChart({ 
  data = [3, 6, 4, 8, 7, 10, 9], 
  labels = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'], 
  className = '' 
}) {
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
        <defs>
          <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.4)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0.05)" />
          </linearGradient>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Grid lines */}
        <g stroke="rgba(255, 255, 255, 0.05)" strokeWidth={1}>
          {[0, 0.25, 0.5, 0.75, 1].map((t, i) => (
            <line 
              key={i} 
              x1={padding} 
              x2={width - padding} 
              y1={padding + t * (height - padding * 2)} 
              y2={padding + t * (height - padding * 2)} 
            />
          ))}
        </g>

        {/* Area fill */}
        <path 
          d={`${pathD} L ${width - padding} ${height - padding} L ${padding} ${height - padding} Z`} 
          fill="url(#chartGradient)" 
          stroke="none" 
        />

        {/* Line with gradient */}
        <path 
          d={pathD} 
          fill="none" 
          stroke="url(#lineGradient)" 
          strokeWidth={3} 
          strokeLinecap="round" 
          strokeLinejoin="round"
          filter="url(#glow)"
        />

        {/* Points with glow */}
        {points.map((p, i) => (
          <g key={i}>
            <circle cx={p[0]} cy={p[1]} r={6} fill="rgba(59, 130, 246, 0.3)" />
            <circle cx={p[0]} cy={p[1]} r={4} fill="#3b82f6" stroke="#fff" strokeWidth={2} />
          </g>
        ))}

        {/* X labels */}
        {points.map((p, i) => (
          <text 
            key={i} 
            x={p[0]} 
            y={height - 6} 
            fontSize={11} 
            textAnchor="middle" 
            fill="rgba(255, 255, 255, 0.5)"
            fontWeight="500"
          >
            {labels[i]}
          </text>
        ))}
      </svg>
    </div>
  );
}