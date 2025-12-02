import React from "react";

export default function Card({ title, description, icon, children, className = "" }) {
  return (
    <div className={`rounded-xl bg-zinc-800 border border-zinc-700 shadow-sm hover:shadow-lg transition p-5 ${className}`}>
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg bg-zinc-900 flex items-center justify-center text-2xl">{icon}</div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-zinc-400 mt-1">{description}</p>
        </div>
      </div>

      {children ? <div className="mt-4">{children}</div> : null}
    </div>
  );
}
