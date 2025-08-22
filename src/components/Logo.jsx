import React from 'react';

export default function Logo({ className = 'h-6 w-auto text-white' }) {
  return (
    <div className={`flex items-center font-semibold tracking-tight ${className}`}> 
      <span className="inline-flex items-center justify-center h-8 w-8 rounded-md bg-white text-primary-600 font-bold">W</span>
      <span className="ml-2 text-white">whitepace</span>
    </div>
  );
}
