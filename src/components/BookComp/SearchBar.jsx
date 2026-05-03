import React from 'react';

const SearchBar = ({searchTerm, setSearchTerm}) => {
    
    return (

    <div>
        <input
      type="text"
      placeholder="Search by title or author..."
      value={searchTerm}
      onChange={(e) => {
        setSearchTerm(e.target.value);
      }}
      className="w-full px-6 py-4 border border-gray-300 bg-white rounded-2xl mb-8 focus:outline-blue-800"
    />
    </div>
    );
};

export default SearchBar;