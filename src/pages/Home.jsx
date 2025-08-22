import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="">
      {/* Hero Section */}
  <section className="relative hero-gradient bg-navy-900 text-white pt-32 pb-12 min-h-screen flex items-center">
        <div className="absolute inset-0" aria-hidden="true">
          <svg className="absolute inset-0 w-full h-full opacity-[0.18]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.5" strokeOpacity="0.15" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16 w-full">
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl font-semibold leading-tight max-w-xl">Get More Done with <span className="text-primary-300">whitepace</span></h1>
              <p className="text-white/80 max-w-lg text-lg">Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to="/add" className="btn-outline-light">Try whitepace Free →</Link>
              <Link to="/records" className="btn bg-primary-500 hover:bg-primary-400">View Records</Link>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="aspect-[4/3] rounded-xl bg-white/5 ring-1 ring-white/10 backdrop-blur-sm p-4 flex items-center justify-center shadow-2xl">
                {/* Placeholder for illustration */}
                <div className="w-full h-full rounded-md bg-gradient-to-tr from-primary-600/20 to-white/5 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">📊</div>
                    <p className="text-white/70 text-sm tracking-wide uppercase">Analytics Preview</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Feature Cards (retained) */}
  <section className="relative -mt-10 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { title:'Fast', text:'Instant client-side interactions with local persistence.'},
              { title:'Accessible', text:'Semantic markup, keyboard and screen reader friendly.'},
              { title:'Responsive', text:'Optimized layouts for mobile, tablet and desktop.'},
            ].map(item => (
              <div key={item.title} className="card space-y-2">
                <h3 className="text-lg">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
