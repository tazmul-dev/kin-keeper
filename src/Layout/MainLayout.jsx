import React from 'react';
import Nevber from '../component/sheared/navber/Nevber';
import { Outlet } from 'react-router';
import Footer from '../component/sheared/footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <Nevber></Nevber>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;