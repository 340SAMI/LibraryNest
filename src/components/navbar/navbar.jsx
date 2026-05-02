"use client";
import Link from "next/link";
import Navlink from "./navlink";

export default function Navbar() {
  return (
    <div className="py-4 flex justify-center">
      <nav className="w-[90%] bg-slate-100 flex items-center justify-between px-6 py-3 border rounded-xl shadow-sm">

        {/* Logo */}
        <Link href={"/"}>  
              
            <div className="flex items-center gap-2 ">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <div className="font-bold  text-gray-900 text-xl font-stretch-condensed "> LibraryNest</div> 
            </div>
            
        </Link>


        {/* Center Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Navlink href={"/"}>
            Home
          </Navlink>
          <Navlink href={"/books"}>
            All Books
          </Navlink>
          <Navlink href={"/profile"}>
            My Profile
          </Navlink>
        </div>



        {/* Right Button */}
        <div>
          <button className="px-4 py-1.5 border rounded-lg text-sm hover:bg-gray-300 transition">
            Login
          </button>
        </div>

      </nav>
    </div>
  );
}