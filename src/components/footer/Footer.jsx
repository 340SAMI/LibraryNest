import React from 'react';

const Footer = () => {
    return (
        <div className='pt-16'>
        <footer className="bg-indigo-800 text-white ">
      <div className=" mx-auto px-6 py-4">
        <div className="mx-auto  rounded-3xl p-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold font-stretch-100% ">Library Nest</h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm md:text-base text-slate-200">
             Discover a seamless way to explore, borrow, and enjoy books from a wide collection. <br /> Designed to make your reading experience simple, modern, and accessible anytime, anywhere.

          </p>
          <p className="mt-10 text-xs uppercase tracking-[0.35em] text-slate-300">Social Links</p>
          <div className="mt-3 flex items-center justify-center gap-3">
            <a href="#" className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#1F4E45] shadow-sm">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm8.5 1.5h-8.5a4.25 4.25 0 0 0-4.25 4.25v8.5A4.25 4.25 0 0 0 7.75 20h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5Zm-4.25 3.25a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5Zm5.5-.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" />
              </svg>
            </a>
            <a href="#" className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#1F4E45] shadow-sm">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.99H7.898v-2.888h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.56v1.875h2.773l-.443 2.888h-2.33v6.99C18.343 21.128 22 16.991 22 12Z" />
              </svg>
            </a>
            <a href="#" className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#1F4E45] shadow-sm">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M20.948 7.696a1.177 1.177 0 0 0-1.664 0L12 15.047 4.716 7.696a1.177 1.177 0 0 0-1.664 1.664L10.324 16.71 2.973 24.06a1.177 1.177 0 1 0 1.664 1.664L12 18.373l7.363 7.35a1.177 1.177 0 0 0 1.664-1.664L13.676 16.71l7.295-7.35a1.177 1.177 0 0 0 0-1.664Z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-2 flex flex-col gap-4 border-t border-white/10 pt-5 text-sm text-slate-200 md:flex-row md:items-center md:justify-between md:max-w-374 mx-auto">
          <p>© 2026 LibraryNest. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="transition hover:text-white">Privacy Policy</a>
            <a href="#" className="transition hover:text-white">Terms of Service</a>
            <a href="#" className="transition hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
        </div>
    );
};

export default Footer;