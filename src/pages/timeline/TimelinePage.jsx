import React, { useState } from 'react';
import TimelineCard from './timelineCard/TimelineCard';

const TimelinePage = () => {
  const [sort, setSort] = useState()
  

    return (
        <div className='max-w-11/12 mx-auto'>
            <h1 className='font-bold text-5xl mt-6'>This is time line page</h1>
            <div className="dropdown dropdown-bottom">
                <div tabIndex={0} role="button" className="btn m-1"><button onClick={()=>setSort('all')}>Filter timeline ⬇️</button></div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li onClick={()=>setSort('call')}><a>Call</a></li>
                    <li onClick={()=>setSort('text')}><a>text</a></li>
                    <li onClick={()=>setSort('video')}><a>video</a></li>
                </ul>
            </div>

            <TimelineCard sort = {sort} ></TimelineCard>
        </div>
    );
};

export default TimelinePage;