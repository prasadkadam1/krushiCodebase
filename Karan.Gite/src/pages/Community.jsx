import React from 'react';

const posts = [
  {
    title: 'How I Doubled My Yield with Organic Practices',
    author: 'Ramesh Pawar (Nashik)',
    date: 'June 28, 2025',
    content: 'This year, I switched to compost and bio-pesticides. My tomato yield increased by 60%! I also used mulching to retain moisture during dry spells.'
  },
  {
    title: 'Tips for Storing Onions After Harvest',
    author: 'Sunita Deshmukh (Pune)',
    date: 'July 1, 2025',
    content: 'Make sure to dry onions well before storing. Use netted bags and keep them in a ventilated shed. Avoid plastic as it traps moisture.'
  }
];

const Community = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-green-700 mb-6">💬 Community Forum</h2>

      <div className="space-y-6">
        {posts.map((post, index) => (
          <div key={index} className="bg-white p-5 rounded-lg shadow hover:shadow-md">
            <h3 className="text-xl font-semibold mb-1">{post.title}</h3>
            <p className="text-sm text-gray-500 mb-2">{post.author} • {post.date}</p>
            <p className="text-gray-700">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
