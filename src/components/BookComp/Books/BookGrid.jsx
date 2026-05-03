import React from 'react';
import BookCard from './BookCard';

const BookGrid = ({ books }) => {
  if (!books || books.length === 0) {
    return <p className="text-center text-gray-500">No books found</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {books.map(book => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookGrid;