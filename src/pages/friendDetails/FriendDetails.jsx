
import { useContext } from 'react';
import { MdOutlineNotificationsPaused } from 'react-icons/md';
import { PiArchiveBold } from 'react-icons/pi';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useLoaderData, useParams } from 'react-router';
import { FriendContext } from '../../context/Context';
import { toast } from 'react-toastify';


const FriendDetails = () => {
    const { id } = useParams()
   

    const friends = useLoaderData();
    // console.log(friends)

    const expectFriends = friends.find((friend) => friend.id == id);
    const { name, picture, status, tags, days_since_contact, bio, email, goal, next_due_date } = expectFriends
    let statu = ""

    if (status.includes("on-track")) {
        statu = <p className='badge badge-success'>On-track</p>
    } else if (status.includes("almost due")) {
        statu = <p className='badge badge-warning'>On-track</p>
    } else {
        statu = <p className='badge badge-error'>overdue</p>

    }
  
    const {datas, setData} = useContext(FriendContext)
    
   
    //  setData(prev => [...prev, ...call])

    const handelText = ()=>{

        toast.success('success send text')
        const now = new Date();
      let text ={

        type: "Text",
        name: name,
        date: now.toLocaleDateString("en-US"),
        image:"https://i.ibb.co.com/27WFqgrf/text.png"
        
       }
        
        setData( [...datas, text])

    }
    
    const handelCall = ()=>{
      toast.success('success call')
          const now = new Date();
        let call ={
             name: name,
            type: "Call",
            image:"https://i.ibb.co.com/pvf1R6wC/call.png",
            date: now.toLocaleDateString("en-US"),
           
        }
          
        setData([...datas, call])
    }

    const handelVideo = ()=>{
         toast.success('success video call')
          const now = new Date();
        let video = {
             name: name,
            type:"Video",
            image:"https://i.ibb.co.com/bMB6ytvS/video.png",
            date: now.toLocaleDateString("en-US"),
        }
       

        setData( [...datas, video])
    }


    return (
        <div className='grid grid-cols-5 gap-4 max-w-285 mx-auto pb-5'>
            <div className=' grid col-span-5 md:col-span-2'>

                <div className="card bg-base-100 shadow-sm mb-4">
                    <figure className="px-10 pt-10">
                        <img
                            src={picture}
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title"> {name} </h2>
                        {statu}
                        <div className=' space-x-2'> {tags.map((tag, i) => <span key={i} className='badge badge-soft badge-accent'>{tag}</span>)} </div>
                        <p>{bio}</p>
                        <p>Preferred: {email} </p>



                    </div>
                </div>
                <div className='p-4 flex justify-center items-center gap-2 font-medium bg-white shadow rounded-xl mb-4'>
                    <span><MdOutlineNotificationsPaused /></span> <h3>Snooze 2 weeks</h3>
                </div>

                <div className='p-4 flex justify-center items-center gap-2 font-medium bg-white shadow rounded-xl mb-4'>
                    <span><PiArchiveBold /></span> <h3>Archive</h3>
                </div>

                <div className='p-4 flex justify-center items-center gap-2 font-medium bg-white shadow rounded-xl text-red-400 mb-4'>
                    <span><RiDeleteBinLine /></span> <h3 className='text-red-400'>Delete</h3>
                </div>

            </div>


            <div className='grid col-span-5 md:col-span-3 space-y-5'>

                {/* cards */}

                <div className='grid sm:grid-cols-3 gap-4'>

                    <div className='p-8 text-center bg-white shadow rounded-2xl'>
                        <h2 className='font-bold text-3xl mt-2'>{days_since_contact}</h2>
                        <p className='text-[#64748B]'>Days Since Contact</p>
                    </div>
                    <div className='p-8 text-center bg-white shadow rounded-2xl'>
                        <h2 className='font-bold text-3xl mt-2'>{goal}</h2>
                        <p className='text-[#64748B]'>Goal (Days)</p>
                    </div>
                    <div className='p-8 text-center bg-white shadow rounded-2xl'>
                        <h2 className='font-bold text-2xl mt-2'>{next_due_date}</h2>
                        <p className='text-[#64748B]'>Next Due</p>
                    </div>

                </div>

                <div className=' bg-white shadow p-6 space-y-2'>
                    <div className='flex justify-between items-center'>
                        <h2 className='font-medium text-xl text-[#244D3F]'>Relationship Goal</h2>
                        <button className='btn'>Edit</button>
                    </div>
                    <p>Connect every <span className='font-bold'> {goal} days</span></p>
                </div>

                {/* button section */}

                <div className='  bg-white p-4'>
                    <h2 className='mb-8'>Quick Check-In</h2>

                    <div className='grid grid-cols-3 gap-4'>
                        <button onClick={handelCall} className='flex flex-col items-center shadow p-6 cursor-pointer bg-[#F8FAFC]'>
                          <img className='w-6' src="/image/call.png" alt="" />
                          <p className='mt-4'>Call</p>
                        </button>
                        <button onClick={handelText} className='flex flex-col items-center p-6 cursor-pointer bg-[#F8FAFC] shadow'>
                          <img className='w-6' src="/image/text.png" alt="" />
                          <p className='mt-4'>Text</p>
                        </button>
                        <button onClick={handelVideo} className='flex flex-col items-center p-6 cursor-pointer bg-[#F8FAFC] shadow'>
                          <img className='w-6' src="/image/video.png" alt="" />
                          <p className='mt-4'>Video</p>
                        </button>
                        
                    </div>
                </div>


            </div>
        </div>
    );
};

export default FriendDetails;