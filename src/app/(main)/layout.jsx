import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/navbar';
import React from 'react';

const mainlayout = ({children}) => {
    return (
        <div>
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default mainlayout;