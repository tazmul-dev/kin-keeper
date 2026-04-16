import React from 'react';
import { Link } from 'react-router';

const Card = ({friend}) => {
   const {name, picture, days_since_contact, status, tags} = friend
    let statu = ""

    if(status.includes("on-track")){
        statu = <p className='badge badge-success'>On-track</p>
    }else if(status.includes("almost due")){
        statu = <p className='badge badge-warning'>On-track</p>
    }else{
        statu = <p className='badge badge-error'>overdue</p>
    
    }

    return (
        <Link to={`/friendDelails/${friend.id}`} className="card bg-base-100 shadow-sm">
                                <figure className="px-10 pt-10">
                                    <img
                                        src={picture}
                                        alt="Shoes"
                                        className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title"> {name} </h2>
                                    <p>{days_since_contact}d ago</p>
                                   <div className=' space-x-2'> {tags.map((tag,i)=> <span key={i} className='badge badge-soft badge-accent'>{tag}</span>)} </div>

                                    {statu}

                                   
                                </div>
             </Link>
    );
};

export default Card;