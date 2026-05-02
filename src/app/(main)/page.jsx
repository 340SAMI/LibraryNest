import FeaturedBooks from '@/components/FeaturedBooks/FeaturedBooks';
import Hero from '@/components/hero/Hero';
import Trend from '@/components/trend/Trend';
import React from 'react';

const  main = async () => {
    const res = await fetch("https://books-json-dvh6.onrender.com/books",{cache:'no-cache'});
    const books = await res.json()
    return (
        <div>
            <Hero></Hero>
            <Trend></Trend>
            <FeaturedBooks books={books.slice(0,4)}></FeaturedBooks>
        </div>
    );
};

export default main;