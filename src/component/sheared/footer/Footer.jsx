import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#244D3F] text-white max-w-full pt-20 mt-10 pb-10'>
            
            <div className='main-div max-w-11/12 mx-auto'>
           
           {/* logo and title */}

           <div className='flex flex-col items-center gap-4'>
            <img className=' max-w-40 md:max-w-80 lg:max-w-125' src={'/image/logo-xl.png'} alt="logo" />
            <p className='text-gray-300'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
           </div>

           {/* social */}
           <div className='flex flex-col items-center mt-6 mb-10'>
            <h3>Social Links</h3>
            <ul className='flex gap-4 mt-4'>
                <li><img src={'/image/facebook.png'} alt=" facebook logo" /></li>
                <li><img src={'/image/instagram.png'} alt=" instagram logo" /> </li>
                <li><img src={'/public/image/twitter.png'} alt=" instagram logo" /></li>
            </ul>
           </div>

            {/* footer */}
         
            <div className=' flex flex-col items-center gap-5 md:flex-row justify-between text-gray-300 pt-10'>
                <p>© 2026 KeenKeeper. All rights reserved.</p>
                <ul className='flex gap-8 '>
                    <li> Privacy Policy</li>
                    <li> Terms of Service  </li>
                    <li> Cookies</li>
                </ul>
            </div>
            </div>

        </div>
    );
};

export default Footer;