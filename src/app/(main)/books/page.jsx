'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AllBooks() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    fetch('https://books-json-dvh6.onrender.com/books')   // Change if needed
      .then(res => res.json())
      .then(data => setBooks(data));       // Your JSON is an array directly
  }, []);

  // Filter logic
  const filteredBooks = books.filter(book => {
    const matchesSearch = 
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = 
      selectedCategory === 'All' || book.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-10">All Books</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 shrink-0">
            <div className="bg-white p-6 rounded-2xl shadow-sm sticky top-6">
              <h3 className="font-semibold mb-4">Categories</h3>
              {['All', 'Story', 'Tech', 'Science'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`block w-full text-left px-4 py-3 rounded-xl mb-2 transition-all ${
                    selectedCategory === cat 
                      ? 'bg-blue-600 text-white' 
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Main Area */}
          <div className="flex-1">
            {/* Search */}
            <input
              type="text"
              placeholder="Search by title or author..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 border border-gray-300 rounded-2xl mb-8 focus:outline-none focus:border-blue-500"
            />

            {/* Books Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredBooks.map(book => (
                <div key={book.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition">
                  <div className="h-72 bg-gray-100 flex items-center justify-center p-8">
                    <Image
                      src={book.image_url} 
                      alt={book.title}
                      className="max-h-full object-contain"
                      width={300}
                      height={300}
                    />
                  </div>
                  
                  <div className="p-5">
                    <h3 className="font-semibold text-lg line-clamp-2 mb-1">{book.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{book.author}</p>
                    
                    <div className="flex justify-between items-center">
                      <span className="px-4 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700">
                        {book.category}
                      </span>
                      <Link 
                        href={`/books/${book.id}`}
                        className="text-blue-600 hover:underline font-medium"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}