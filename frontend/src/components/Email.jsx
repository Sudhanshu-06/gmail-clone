import React from 'react'
import { MdCropSquare } from 'react-icons/md'
import { MdStarOutline } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Email = () => {
    const navigate = useNavigate();
    const openMail =() =>{
        navigate("/mail/1234");

    }
  return (
    <div onClick={openMail} className='flex items-center justify-between border-b border-gray-200 px-4 py-3 text-sm hover:cursor-pointer hover:sh'>
       <div className='flex items-center gap-3'>
        <div className='text-gray-400'>
            <MdCropSquare size={'24px'} />
        </div>
        <div className='text-gray-400'> 
            < MdStarOutline size={'24px'} />
        </div>
        <div>
            <h1 className='font-semibold'>30 days coding</h1>
        </div>

        </div>  
        <div className='flex-1 ml-4'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime debitis vel totam iusto qui tempore beatae placeat nesciunt quaerat natus.</p>
        </div>
        <div className='flex-none text-gary text-sm'>
            <p>12 days ago</p>
        </div>
    </div>
  )
}

export default Email