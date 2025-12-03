export default function ProgressBar({ 
  value = 0, 
  max = 100, 
  label = '', 
  showPercentage = true,
  color = 'blue',
  size = 'md',
  className = '' 
}) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));
  
  const colors = {
    blue: 'from-blue-600 to-cyan-500',
    purple: 'from-purple-600 to-pink-500',
    green: 'from-green-600 to-emerald-500',
    yellow: 'from-yellow-600 to-orange-500',
    red: 'from-red-600 to-pink-600',
    cyan: 'from-cyan-600 to-blue-500',
  };

  const sizes = {
    sm: 'h-1.5',
    md: 'h-2.5',
    lg: 'h-4',
  };

  return (
    <div className={className}>
      {(label || showPercentage) && (
        <div className="flex justify-between items-center mb-2">
          {label && (
            <span className="text-sm font-medium text-gray-300">
              {label}
            </span>
          )}
          {showPercentage && (
            <span className="text-sm text-gray-400">
              {percentage.toFixed(0)}%
            </span>
          )}
        </div>
      )}
      <div className={`w-full bg-zinc-800/50 rounded-full ${sizes[size]} overflow-hidden border border-zinc-700/30`}>
        <div
          className={`bg-gradient-to-r ${colors[color]} ${sizes[size]} rounded-full transition-all duration-700 ease-out shadow-lg`}
          style={{ 
            width: `${percentage}%`,
            boxShadow: percentage > 0 ? `0 0 10px rgba(59, 130, 246, 0.5)` : 'none'
          }}
        ></div>
      </div>
    </div>
  );
}