import React, { Suspense } from 'react';
import Hero from './hero/Hero';
import AllFrends from './allFriends/AllFrends';
const friendsPromis = fetch('/friendsData.json').then((res)=> res.json())
const HomePage = () => {
    return (
        <div className=' max-w-11/12 mx-auto pb-10'>  
           <Hero></Hero>
           <Suspense fallback ={<h1>loding ....</h1>}>
            <AllFrends friendsPromis={friendsPromis}></AllFrends>
           </Suspense>

        </div>
    );
};

export default HomePage;