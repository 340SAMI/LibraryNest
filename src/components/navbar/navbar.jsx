"use client";
import Link from "next/link";
import Navlink from "./navlink";
import { authClient } from "@/lib/auth-client";
import { ClipLoader } from 'react-spinners';

export default function Navbar() {

  const { data: session, isPending } = authClient.useSession();

  
  const user = session?.user;
  console.log(user, isPending);

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
        {isPending ? (
          <div className="flex items-center">
            <ClipLoader size={20} color="#3b82f6" />
          </div>
        ) : user ? (
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-gray-700">
              <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">Hello, {user.name}!</span>
            </div>
            <button 
              onClick={() => authClient.signOut()}
              className="px-4 py-1.5 border border-red-300 text-red-600 rounded-lg text-sm hover:bg-red-50 transition"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <Link href={"/login"}>
              <button className="px-4 py-1.5 border rounded-lg text-sm hover:bg-gray-300 transition">
                Sign In
              </button>
            </Link>
            <Link href={"/register"}>
              <button className="px-4 py-1.5 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition">
                Register
              </button>
            </Link>
          </div>
        )}

      </nav>
    </div>
  );
}