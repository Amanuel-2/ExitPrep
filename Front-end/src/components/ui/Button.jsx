import React from "react";

export default function Button({ children, variant = "primary", className = "", ...props }) {
  const base = "inline-flex items-center justify-center px-4 py-2 rounded-md font-medium focus:outline-none transition";
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-500",
    neutral: "bg-zinc-700 text-white hover:bg-zinc-600",
    ghost: "bg-transparent text-white hover:bg-zinc-800",
  };

  return (
    <button className={`${base} ${variants[variant] || variants.primary} ${className}`} {...props}>
      {children}
    </button>
  );
}
