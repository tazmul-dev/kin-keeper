import React, { useContext, useEffect, useState } from 'react';
import { FriendContext } from '../../../context/Context';

const TimelineCard = ({sort}) => {
     const {datas} = useContext(FriendContext)
        // console.log(datas)
        
     

        const [filterData, setFilterData] = useState([])
       
        useEffect(()=>{
            if(sort === 'call'){
               setFilterData(datas.filter(data => data.type == 'Call'))
            }
            else if(sort ==='text'){
                setFilterData( datas.filter(data => data.type == 'Text'))
            }else if(sort ==='video'){
                setFilterData(datas.filter(data => data.type == 'Video'))
            }else{
                setFilterData(datas)
            }


        },[sort, datas ])
        

    return (
        <div>
            {
                filterData.map((data, i)=>{
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