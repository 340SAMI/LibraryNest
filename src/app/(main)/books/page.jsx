
import AllBooks from '@/components/BookComp/AllBooks';
import React from 'react';

const Books = async () => {

  const res = await fetch('https://books-json-dvh6.onrender.com/books',{cache:'no-cache'});
  const books = await res.json();

  console.log(books);
  return (
    <div>
      <AllBooks books={books}></AllBooks>
    </div>
  );
};

export default Books;