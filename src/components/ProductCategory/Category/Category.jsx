import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Fashion',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
    description: 'Trendy & stylish clothing, shoes, and accessories for all genders.',
    slug: 'fashion'
  },
  {
    name: 'Mobile',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80',
    description: 'Latest smartphones, gadgets, and mobile accessories from top brands.',
    slug: 'mobile-tablet'
  },
];


const Category = () => {
  return (
    <div className="container mx-auto py-6 px-2">
      <h2 className="text-2xl font-bold mb-6 text-pink-600 tracking-wide text-center">
        Danh mục nổi bật
      </h2>
      <div className="flex gap-4">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 border border-gray-100 group relative flex-1/2 h-[300px]"
          >
            <Link to={`/shop/${cat.slug}`} className="block pb-4">
              <div className="w-full h-[250px] flex items-center justify-center p-3">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="object-cover h-full w-full rounded-t-2xl"
                  loading="lazy"
                />
              </div>
              <div className="px-4">
                <h3 className="text-lg font-semibold mb-1 text-gray-700 group-hover:text-pink-600 transition text-center">
                  {cat.name}
                </h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Category