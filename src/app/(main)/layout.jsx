import Navbar from '@/components/navbar/navbar';
import React from 'react';

const mainlayout = ({children}) => {
    return (
        <div>
            <Navbar></Navbar>
            {children}
        </div>
    );
};

export default mainlayout;