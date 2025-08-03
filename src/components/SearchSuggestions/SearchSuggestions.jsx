import React from 'react'
import { useProductStore } from '../../stores/shop/useProductStore'
import { NavLink } from "react-router-dom"

const SearchSuggestions = ({ searchTerm, setTerm }) => {
  const { products } = useProductStore();

  if (!searchTerm) return null;

  const searchResults = products.filter(item =>
    item.name.toLowerCase().trim().includes(searchTerm.toLowerCase().trim())
  );

  return (
    <div className="absolute left-0 top-full mt-2 w-full bg-white rounded-xl shadow-xl z-50 animate-fade-in max-h-80 overflow-auto">
      {searchResults.length === 0 ? (
        <div className="p-3 text-gray-500 text-sm">Không tìm thấy sản phẩm nào.</div>
      ) : (
        searchResults.slice(0, 6).map((item) => (
          <NavLink
            key={item._id}
            to={`/shop/${item.category.name === "Áo thun" ? "fashion" : "mobile-tablet"}/${item._id}`} 
            className="flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-pink-50 border-b last:border-b-0 transition"
            onClick={() => {
              setTerm('');
            }}
          >
            {item.image && (
              <img src={item.image} alt={item.name} className="w-9 h-9 object-cover rounded-lg" />
            )}
            <span className="font-medium text-gray-800 truncate">{item.name}</span>
          </NavLink>
        ))
      )}
    </div>
  );
};

export default SearchSuggestions;
