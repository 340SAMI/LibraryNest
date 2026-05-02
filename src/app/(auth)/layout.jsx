import Navbar from '@/components/navbar/navbar';
import React from 'react';

const authlayout = ({ children }) => {
    return (
        <div>
            <Navbar></Navbar>
            {children}
        </div>
    );
};

export default authlayout;