import React from 'react';
import Hero from './components/Hero';
import StoryBar from './components/StoryBar';
import Feed from './components/Feed';
import BottomNav from './components/BottomNav';

function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <Hero />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <StoryBar />
        <Feed />
      </main>
      <BottomNav />
    </div>
  );
}

export default App;
