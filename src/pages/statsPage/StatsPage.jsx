import React, { useContext } from 'react';
import { FriendContext } from '../../context/Context';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';

const StatsPage = () => {

    const { datas } = useContext(FriendContext)
    const text = datas.filter(data => data.type === "Text")
    const call = datas.filter(data => data.type === "Call")
    const video = datas.filter(data => data.type === "Video")

    const data = [
        { name: 'text', value: text.length, fill: '#0088FE' },
        { name: 'call', value: call.length, fill: '#00C49F' },
        { name: 'video', value: video.length, fill: '#FFBB28' },

    ];

    return (
        <div className='max-w-11/12 mx-auto'>
            <h1 className='font-bold text-5xl mb-6'>Friendship Analytics</h1>

            <div className='bg-white shadow p-6'>
                <h1 className='font-medium text-2xl text-[#244D3F]'>By Interaction Type</h1>
                <div className='flex justify-center'>
                    <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '60vh', aspectRatio: 1 }} responsive>
                        <Pie
                            data={data}
                            innerRadius="80%"
                            outerRadius="100%"
                            // Corner radius is the rounded edge of each pie slice
                            cornerRadius="50%"
                            fill="#8884d8"
                            // padding angle is the gap between each pie slice
                            paddingAngle={5}
                            dataKey="value"
                            isAnimationActive={true}
                        />
                        <Legend></Legend>
                        <Tooltip></Tooltip>
                    </PieChart>
                </div>
            </div>





        </div>
    );
};

export default StatsPage;