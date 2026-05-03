import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const page = async ({params}) => {

    const {id} = await params;
    

    const res = await fetch(`https://books-json-dvh6.onrender.com/books/${id}`);
    const book = await res.json();

    const { title, author, description, category, available_quantity: quantity, image_url: img } = book;

    return (
      <div className="min-h-screen py-12">
        <div className="mx-auto max-w-6xl rounded-[32px] border border-slate-200/70 bg-white/95 p-6 shadow-2xl shadow-slate-200/40 backdrop-blur-xl sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[minmax(280px,340px)_1fr] items-start">

          {/* Left — Cover + Meta */}
              <div className="shrink-0 max-w-[340px] flex flex-col gap-4">
            <div className="aspect-10/13 w-full overflow-hidden rounded-[28px]">
              <Image
                src={img}
                alt={title}
                width={340}
                height={440}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-2">
                <div className="space-y-3">
                {[
                    ['Category', category],
                    ['Author', author],
                    ['Format', 'Digital'],
                    ['Language', 'English'],
                ].map(([label, value]) => (
                    <div
                    key={label}
                    className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-3 shadow-gray-400 shadow-sm hover:shadow-md transition"
                    >
                    <span className="text-sm font-semibold text-gray-600">
                        {label}
                    </span>

                    <span className="text-sm font-bold text-gray-900">
                        {value}
                    </span>
                    </div>
                ))}
                </div>
            </div>
          </div>

          {/* Right — Info */}
          <div className="flex-1 flex flex-col gap-5 min-w-0">

            <div>
              <h1 className="text-4xl font-semibold tracking-tight text-slate-950">{title}</h1>
              <p className="text-slate-500 mt-1 text-sm">by {author}</p>
            </div>

            {/* Badges */}
            <div className="flex gap-2 flex-wrap">
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-amber-400 text-shadow-olive-800 border border-indigo-700/40">
                {category}
              </span>
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-500 text-green-300 border border-green-700/30 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block"></span>
                {quantity} copies available
              </span>
            </div>

            <div className="rounded-3xl border aspect-14/6 border-slate-200/70 bg-slate-50/90 p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Description</p>
              <p className="mt-4 text-base leading-8 text-slate-700">{description}</p>
            </div>

            <div className="rounded-3xl border border-slate-200/70 bg-slate-50/90 p-6 shadow-sm">
              <button className="w-full rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                Borrow this book
              </button>

            </div>

          </div>
          </div>
        </div>
      </div>
    
    );
};

export default page;