import React from 'react';
import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative w-full h-[70vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white/90 pointer-events-none" />

      <div className="relative h-full max-w-5xl mx-auto px-6 flex items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-100 text-fuchsia-700 text-sm font-medium">
            <span>New</span>
            <span className="opacity-80">Playful 3D social icons</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-neutral-900">
            Share life in motion
          </h1>
          <p className="text-neutral-600 text-lg max-w-2xl">
            A clean, vibrant Instagram-style experience to explore stories, posts, and moments from people you love.
          </p>
          <div className="flex items-center gap-3">
            <button className="px-5 py-2.5 rounded-full bg-neutral-900 text-white font-semibold hover:bg-neutral-800 transition">
              Open Web App
            </button>
            <button className="px-5 py-2.5 rounded-full bg-white text-neutral-900 font-semibold border border-neutral-200 hover:border-neutral-300 shadow-sm transition">
              Download App
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
