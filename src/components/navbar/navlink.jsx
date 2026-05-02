"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';


const Navlink = ({href,children}) => {
    const pathname = usePathname(); 
    const isactive = href === pathname;
    return (
        <div>
            <Link href={href} className={`${isactive?"text-black border-b-2 border-black pb-1":"text-gray-500"}`}>
            {children}
            </Link>
        </div>
    );
};

export default Navlink;