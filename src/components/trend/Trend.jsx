import React from 'react';
import Marquee from 'react-fast-marquee';

const marqueeItems = [
  "New Arrivals: Clean Code",
  "The Martian",
  "Sapiens",
  "Atomic Habits",
  "Dune Messiah",
  "The Midnight Library",
  "Project Hail Mary",
  "Educated",
  "Special Discount on Memberships - 20% Off",
  "1984",
  "The Psychology of Money",
  "Thinking, Fast and Slow",
  "The Alchemist"
];

const Trend = () => {
    return (
        <div className="rounded-xl bg-gray-400 py-2 px-3 w-[90%] mx-auto ">
            <Marquee speed={50} >
                {marqueeItems.map((item, key) => (               
                    <span
                        className="inline-flex items-center  gap-4 px-3 text-sm font-medium text-blue-700"
                        key={key}
                    >
                        {item}
                        <span className="text-slate-300">|</span>
                    </span>
                ))}
            </Marquee>
        </div>
    );
};

export default Trend;