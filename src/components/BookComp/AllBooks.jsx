"use client"
import React, { useState } from 'react';
import SideBar from './SideBar';
import SearchBar from './SearchBar';
import BookGrid from './Books/BookGrid';


const AllBooks = ({books}) => {

    const [searchTerm, setSearchTerm] = useState(' ');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filterBooks = books.filter(book => {
    const matchesSearch = 
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = 
      selectedCategory === 'All' || book.category.toLowerCase() === selectedCategory.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  

    return (
    <div className="min-h-screen py-10">
        <div className="max-w-7xl mx-auto px-6">

                <h1 className="text-4xl font-bold text-center mb-10">
                All Books
                </h1>

            <div className="flex flex-col lg:flex-row gap-8">

                {/* Sidebar */}
                <div className="lg:w-64">
                    <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}></SideBar>
                </div>

                {/* Main */}
                <div className="flex-1">
                  
                  <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                  <BookGrid books={filterBooks} />

                </div>


            </div>
        </div>
    </div>
    );
};

export default AllBooks;