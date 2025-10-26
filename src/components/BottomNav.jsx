import React from 'react';
import { Home, Search, PlusSquare, Heart, User } from 'lucide-react';

function BottomNav() {
  return (
    <nav className="fixed bottom-3 left-1/2 -translate-x-1/2 w-[92%] sm:max-w-2xl bg-white/90 backdrop-blur border border-neutral-200 rounded-2xl shadow-lg z-20">
      <ul className="grid grid-cols-5">
        <li className="flex items-center justify-center p-3">
          <button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-neutral-100">
            <Home />
          </button>
        </li>
        <li className="flex items-center justify-center p-3">
          <button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-neutral-100">
            <Search />
          </button>
        </li>
        <li className="flex items-center justify-center p-3">
          <button className="flex items-center justify-center w-10 h-10 rounded-full bg-neutral-900 text-white hover:bg-neutral-800">
            <PlusSquare />
          </button>
        </li>
        <li className="flex items-center justify-center p-3">
          <button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-neutral-100">
            <Heart />
          </button>
        </li>
        <li className="flex items-center justify-center p-3">
          <button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-neutral-100">
            <User />
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default BottomNav;
