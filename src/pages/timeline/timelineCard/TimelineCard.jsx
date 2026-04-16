import React, { useContext } from 'react';
import { FriendContext } from '../../../context/Context';

const TimelineCard = () => {
     const {datas} = useContext(FriendContext)
        console.log(datas)
    return (
        <div>
            {
                datas.map((data, i)=>{
                    return <>
                    <div key={i} className='flex bg-white shadow gap-4 p-6 mt-6'>
                        <div>
                            <img src={data.image} alt="" />
                        </div>
                        <div>
                            <p><span className='text-[20px] font-medium text-[#244D3F]'>{data.type}</span> with <span>{data.name}</span></p>
                            <p>{data.date}</p>
                        </div>
                    </div>
                    </>
                })
            }
        </div>
    );
};

export default TimelineCard;