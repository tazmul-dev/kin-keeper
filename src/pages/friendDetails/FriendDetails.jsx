import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const FriendDetails = () => {
    let params = useParams()
    console.log(params)

    const friends = useLoaderData();
    console.log(friends)


    return (
        <div>
            <h1>This is friend details page</h1>
        </div>
    );
};

export default FriendDetails;