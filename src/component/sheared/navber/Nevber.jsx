import React from 'react';
import { IoMdTime } from 'react-icons/io';

import { RiHome2Line } from 'react-icons/ri';
import { TfiStatsUp } from 'react-icons/tfi';
import { NavLink } from 'react-router';

const Nevber = () => {

    const link = <>
    
        <li className='mr-4'><NavLink to={'/'} className={({isActive})=> isActive ? "btn btn-info":" btn "} ><RiHome2Line />  Home</NavLink></li>
        
        <li className='mr-4'><NavLink to={"/timeline"} className={ ({isActive})=> isActive ? "btn btn-info":" btn "} ><IoMdTime /> Timeline</NavLink></li>
        
        <li className='mr-4'><NavLink to={"/stats"} className={({isActive})=> isActive ? "btn btn-info":" btn "} ><TfiStatsUp /> Stats</NavLink></li>
        
     
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm justify-between mb-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost sm:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {link}
                    </ul>
                </div>
                <h1 className="text-xl  ml-10"><span className='font-bold'>Keen</span>keeper</h1>
            </div>
            <div className="navbar-center hidden sm:flex">
                <ul className="menu menu-horizontal px-1">
                    {link}
                </ul>
            </div>
           
        </div>
    );
};

export default Nevber;