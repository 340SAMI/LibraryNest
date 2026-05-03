import React from 'react';

const categories = ["All", "Story", "Tech", "Science"];

const SideBar = ({selectedCategory, setSelectedCategory }) => {
    return (
    <div className="bg-white p-6 rounded-2xl shadow-sm sticky top-6">
      <h3 className="font-semibold mb-4">Categories</h3>

      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => setSelectedCategory(cat)}
          className={`block w-full text-left px-4 py-3 rounded-xl mb-2 transition-all ${
            selectedCategory === cat
              ? "bg-blue-600 text-white"
              : "hover:bg-gray-100 text-gray-700"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
    );
};

export default SideBar;