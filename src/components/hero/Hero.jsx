import Link from 'next/link';
import React from 'react';

const Hero = () => {
    return (
    <div className="bg-linear-to-br from-blue-900 via-indigo-900 to-purple-900 text-white my-8 py-24 md:py-32 relative overflow-hidden w-[90%] mx-auto rounded-2xl">
      {/* Optional subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Find Your Next Read
        </h1>

        <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto">
          Explore thousands of books across Story, Tech &amp; Science
        </p>

        <Link
          href="/books"
          className="inline-block bg-white text-blue-950 hover:bg-blue-100 transition-colors font-semibold px-10 py-4 rounded-full text-lg shadow-lg hover:shadow-xl"
        >
          Browse Now
        </Link>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 right-10 hidden lg:block text-8xl opacity-10">
        📖
      </div>
    </div>
    );
};

export default Hero;