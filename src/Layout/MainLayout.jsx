import React from 'react';
import Nevber from '../component/sheared/navber/Nevber';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <Nevber></Nevber>

            <Outlet></Outlet>
            
        </div>
    );
};

export default MainLayout;