import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Hero = () => {
    return (
        <div className='pb-10'>
            <div className=' text-center space-y-5  '>
                <h1 className='font-bold text-4xl'>Friends to keep close in your life</h1>
                <p className='text-[#64748B]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br /> relationships that matter most.</p>
            <div className='flex justify-center'>
                <button className='flex gap-2 items-center btn btn-primary mb-10'><FaPlus /> Add a Friend</button>
            </div>
            </div>
               
               <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                <div className='p-8 text-center bg-white shadow rounded-2xl'>
                    <h2 className='font-bold text-3xl mt-2'>10</h2>
                    <p className='text-[#64748B]'>Total Friends</p>
                </div>
                <div className='p-8 text-center bg-white shadow rounded-2xl'>
                    <h2 className='font-bold text-3xl mt-2'>3</h2>
                    <p className='text-[#64748B]'>On Track</p>
                </div>
                <div className='p-8 text-center bg-white shadow rounded-2xl'>
                    <h2 className='font-bold text-3xl mt-2'>6</h2>
                    <p className='text-[#64748B]'>Need Attention</p>
                </div>
                <div className='p-8 text-center bg-white shadow rounded-2xl'>
                    <h2 className='font-bold text-3xl mt-2'>12</h2>
                    <p className='text-[#64748B]'>Interactions This Month</p>
                </div>
               </div>
        </div>
    );
};

export default Hero;