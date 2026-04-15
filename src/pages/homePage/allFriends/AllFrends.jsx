import React, { use } from 'react';
import Card from '../../../card/Card';

const AllFrends = ({ friendsPromis }) => {
    const friends = use(friendsPromis)
    console.log(friends)
    return (
        <div>
            <h1 className='my-10px font-bold'>Your Friends</h1>

            <div>
                {
                    friends.map((friend) => <Card key={friend.id} friend ={friend}></Card> )
                }
            </div>
        </div>
    );
};

export default AllFrends;