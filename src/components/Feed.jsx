import React from 'react';
import { MoreHorizontal, Heart, MessageCircle, Send, Bookmark } from 'lucide-react';

const posts = [
  {
    id: 1,
    author: 'alex',
    avatar: 'https://i.pravatar.cc/150?img=11',
    image: 'https://images.unsplash.com/photo-1518972559570-7cc1309f3229?q=80&w=1600&auto=format&fit=crop',
    likes: 1284,
    caption: 'Golden hour rides hit different.',
    time: '2h',
  },
  {
    id: 2,
    author: 'maya',
    avatar: 'https://i.pravatar.cc/150?img=12',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
    likes: 2031,
    caption: 'City lights and late nights ✨',
    time: '5h',
  },
  {
    id: 3,
    author: 'sam',
    avatar: 'https://i.pravatar.cc/150?img=13',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop',
    likes: 987,
    caption: 'Salt air and good vibes.',
    time: '1d',
  },
];

function Feed() {
  return (
    <section className="pb-28">
      <div className="space-y-6">
        {posts.map((post) => (
          <article key={post.id} className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm">
            <header className="flex items-center justify-between px-4 py-3">
              <div className="flex items-center gap-3">
                <img src={post.avatar} alt={`${post.author} avatar`} className="w-9 h-9 rounded-full object-cover" />
                <div className="leading-tight">
                  <p className="text-sm font-semibold">{post.author}</p>
                  <p className="text-xs text-neutral-500">{post.time} • Public</p>
                </div>
              </div>
              <button className="p-2 rounded-full hover:bg-neutral-100">
                <MoreHorizontal size={20} />
              </button>
            </header>

            <div className="aspect-[4/5] sm:aspect-[16/10] bg-neutral-100">
              <img src={post.image} alt="post" className="w-full h-full object-cover" />
            </div>

            <div className="px-4 py-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button className="p-2 -m-2 hover:opacity-80" aria-label="like">
                    <Heart size={24} />
                  </button>
                  <button className="p-2 -m-2 hover:opacity-80" aria-label="comment">
                    <MessageCircle size={24} />
                  </button>
                  <button className="p-2 -m-2 hover:opacity-80" aria-label="share">
                    <Send size={24} />
                  </button>
                </div>
                <button className="p-2 -m-2 hover:opacity-80" aria-label="save">
                  <Bookmark size={24} />
                </button>
              </div>

              <p className="text-sm font-semibold mt-2">{post.likes.toLocaleString()} likes</p>
              <p className="text-sm mt-1"><span className="font-semibold mr-1">{post.author}</span>{post.caption}</p>
              <button className="text-xs text-neutral-500 mt-1">View all comments</button>
              <p className="text-[11px] text-neutral-400 mt-1">{post.time} ago</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Feed;
