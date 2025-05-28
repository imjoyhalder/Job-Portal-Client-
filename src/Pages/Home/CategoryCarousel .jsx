import React from 'react';
import Marquee from 'react-fast-marquee';

const categories = [
  { id: 1, name: 'Web Development', icon: '💻' },
  { id: 2, name: 'Mobile App', icon: '📱' },
  { id: 3, name: 'UI/UX Design', icon: '🎨' },
  { id: 4, name: 'Data Science', icon: '📊' },
  { id: 5, name: 'Machine Learning', icon: '🤖' },
  { id: 6, name: 'Cybersecurity', icon: '🔐' },
  { id: 7, name: 'DevOps & Cloud', icon: '☁️' },
  { id: 8, name: 'QA & Testing', icon: '🧪' },
  { id: 9, name: 'Digital Marketing', icon: '📣' },
];

const CategoryCarousel = () => {
  return (
    <div className="w-full max-w-7xl mx-auto py-10">
      <h2 className="text-4xl font-bold text-center mb-6">Browse by category</h2>
      <p className='text-center text-xl text-gray-400'>Find the job that’s perfect for you. about 800+ new jobs everyday</p>
      <Marquee pauseOnHover={true} speed={60} gradient={false}>
        {categories.concat(categories).map(category => (
          <div key={category.id + Math.random()} className="mx-4">
            <div className="card w-64 bg-white shadow-xl hover:scale-105 transition-transform duration-300">
              <div className="card-body items-center text-center">
                <span className="text-5xl">{category.icon}</span>
                <h2 className="card-title text-black mt-2 text-lg">{category.name}</h2>
                <p className="text-sm text-gray-500">Explore jobs in {category.name}</p>
                <div className="card-actions mt-4">
                  <button className="btn btn-sm btn-primary">View Jobs</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default CategoryCarousel;
