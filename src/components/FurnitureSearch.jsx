import React, { useState, useRef } from "react";
import { products } from "../utils/products";
import { useOutletContext } from "react-router-dom";

function FurnitureSearch() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const debounceRef = useRef(null);
  const { searchQuery, setSearchQuery } = useOutletContext();

  const performSearch = (value) => {
    console.log('search',value);
    console.log(value.length);
    
    
    if (value.trim()=='') {
      setSuggestions([]);
      return;
    }

    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filtered);
  };

  const handleChange = (e) => {

    const value = e.target.value;
    setSearchQuery(value);
    console.log('query', value);
    
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      performSearch(value);
    }, 350); // 350ms debounce
  };

  const handleSearchClick = () => {
    if(searchQuery) {
      window.scrollTo({
        top: '1200',
       behavior: 'smooth'
  
})}
    }
 

  return (
    <div className="w-full max-w-md mx-auto my-8 z-10 overflow-hidden">
      <div className="flex">
        <input
        required
          type="text"
          value={searchQuery}
          onChange={handleChange}
          onKeyDown={(e) => {
            if (searchQuery !== '' && e.key === "Enter") {
              handleSearchClick()
            }
          }}
          placeholder="Search furniture..."
          className="w-full px-4 py-2 border rounded-l focus:outline-none focus:ring"
        />
        <button
         
          onClick={handleSearchClick}
          className="px-4 py-2 bg-red-900 text-white rounded-r hover:bg-red-700 transition-colors"
        >
          Search
        </button>
      </div>
      {suggestions && suggestions?.length > 0 && (
        <ul className="border rounded mt-2 bg-white shadow-lg z-10 relative">
          {suggestions.map((item) => (
            <li
              key={item.id}
              className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              <img src={item.image} alt={item.name} className="w-10 h-10 object-cover rounded" />
              <span className="font-medium">{item.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FurnitureSearch