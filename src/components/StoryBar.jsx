import React from 'react';

const users = [
  { id: 1, name: 'you', img: 'https://i.pravatar.cc/150?img=1' },
  { id: 2, name: 'alex', img: 'https://i.pravatar.cc/150?img=2' },
  { id: 3, name: 'jamie', img: 'https://i.pravatar.cc/150?img=3' },
  { id: 4, name: 'maya', img: 'https://i.pravatar.cc/150?img=4' },
  { id: 5, name: 'sam', img: 'https://i.pravatar.cc/150?img=5' },
  { id: 6, name: 'li', img: 'https://i.pravatar.cc/150?img=6' },
  { id: 7, name: 'omar', img: 'https://i.pravatar.cc/150?img=7' },
  { id: 8, name: 'zoe', img: 'https://i.pravatar.cc/150?img=8' },
];

function StoryBar() {
  return (
    <section className="py-4">
      <div className="flex items-center gap-4 overflow-x-auto no-scrollbar pb-2">
        {users.map((u) => (
          <div key={u.id} className="flex-shrink-0 text-center">
            <div className="p-[2px] rounded-full bg-gradient-to-tr from-fuchsia-500 via-pink-500 to-amber-400">
              <div className="w-16 h-16 rounded-full bg-white p-[3px]">
                <img src={u.img} alt={`${u.name} story`} className="w-full h-full object-cover rounded-full" />
              </div>
            </div>
            <p className="text-xs mt-1 text-neutral-700">{u.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StoryBar;
