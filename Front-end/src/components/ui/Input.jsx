import React from 'react';

export default function Input({ className = '', icon, ...props }) {
  return (
    <div className="relative">
      {icon && (
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
          {icon}
        </div>
      )}
      <input
        className={`w-full ${icon ? 'pl-12' : 'pl-4'} pr-4 py-3 rounded-xl glass-card-light text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 border border-zinc-700/50 ${className}`}
        {...props}
      />
    </div>
  );
}