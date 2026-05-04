import FeaturedBooks from '@/components/FeaturedBooks/FeaturedBooks';
import Hero from '@/components/hero/Hero';
import Testimonials from '@/components/testimonials/Testimonials';
import Trend from '@/components/trend/Trend';
import React from 'react';

const  Main = async () => {
    const res = await fetch("https://books-json-dvh6.onrender.com/books",{cache:'no-cache'});
    const books = await res.json()

    const res2 = await fetch(`${process.env.BETTER_AUTH_URL}/reviews.json`,{ cache: 'no-cache'});
    const reviews = await res2.json()

    console.log(reviews, "please show")

    return (
        <div>
            <Hero></Hero>
            <Trend></Trend>
            <FeaturedBooks books={books.slice(0,4)}></FeaturedBooks>
            <Testimonials reviews={reviews.reviews}></Testimonials>
        </div>
    );
};

export default Main;