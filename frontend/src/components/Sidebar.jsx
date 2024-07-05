import React from 'react'
import { IoMdStar } from 'react-icons/io';
import { LuPen } from "react-icons/lu";
import { MdInbox,  MdOutlineDrafts, MdOutlineKeyboardArrowDown, MdOutlineWatchLater } from "react-icons/md";
import { TbSend2 } from 'react-icons/tb';
import { useDispatch } from 'react-redux';
import { setOpen } from '../redux/appSlice';

const SidebarItems =[
    {
        icon:<MdInbox size={'24px'} />,
        text:"Inbox"
    },
    {
        icon:<IoMdStar size={'24px'} />,
        text:"Started"
    },
    {
        icon:<MdOutlineWatchLater size={'24px'} />,
        text:"Snoozed"
    },
    {
        icon:<TbSend2 size={'24px'} />,
        text:"Sent"
    },
    {
        icon:<MdOutlineDrafts size={'24px'} />,
        text:"Drafts"
    },
    {
        icon:<MdOutlineKeyboardArrowDown size={'24px'} />,
        text:"More"
    },
]

const Sidebar = () => {
    const dispatch = useDispatch();
  return (
    <div className='w-[15%] '>
        <div className='p-3'>
        <button onClick={()=>dispatch (setOpen(true))} className='flex items-center gap-2 bg-[#C2E7FF] p-4 rounded-2xl hover:shadow-md'>
        <LuPen size={'24px'} />
            Compose
        </button>
        </div>
        <div className='text-gray-500'>
            {
                SidebarItems.map((item,index)=>{
                    return  (
                        <div className='flex items-center pl-6 py-1 rounded-r-full gap-4 my-2 hover:cursor-pointer hover:bg-gray-200'>
                        {item.icon}
                        <p>{item.text}</p>
                        </div>
                    )
                })
            }
           
        
        </div>
    </div>
  )
}

export default Sidebar