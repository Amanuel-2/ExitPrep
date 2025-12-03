export default function Card({ children, className = '', hover = false, glow = false, ...props }) {
  return (
    <div
      className={`glass-card rounded-2xl shadow-xl transition-all duration-300 ${
        hover ? 'hover:scale-[1.02] hover:shadow-2xl hover:border-blue-500/30 cursor-pointer' : ''
      } ${glow ? 'neon-glow-blue' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}