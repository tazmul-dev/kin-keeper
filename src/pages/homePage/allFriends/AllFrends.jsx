import React, { use } from 'react';
import Card from '../../../card/Card';

const AllFrends = ({ friendsPromis }) => {
    const friends = use(friendsPromis)
    // console.log(friends)
    return (
        <div>
            <h1 className='my-10px font-bold mb-4'>Your Friends</h1>

            <div className='grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {
                    friends.map((friend) => <Card key={friend.id} friend ={friend}></Card> )
                }
            </div>
        </div>
    );
};

export default AllFrends;