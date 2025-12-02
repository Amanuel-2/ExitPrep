import React from 'react';

export default function Input({ className = '', ...props }) {
  return (
    <input
      className={`w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-700 transition ${className}`}
      {...props}
    />
  );
}
