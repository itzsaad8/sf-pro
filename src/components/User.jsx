import React from 'react'
import { useLocation } from 'react-router-dom'
import img from '../assets/dppp.jpg'

const User = () => {
    const location = useLocation()
    const itemData = location.state?.itemData || {};
  return (
    <div className='mx-12 bg-slate-300 rounded-2xl'>
         <div>
         <ul  className='flex items-center justify-between text-center mb-2 shadow-lg p-1 sm:p-3 rounded-lg border border-gray-200 text-[10px] sm:text-base'>
                        
                        <img   width={200} className='rounded-[50%]' src={img} alt="" />
                        
                        <li><p className='hidden sm:block font-bold mb-3'>Customer ID</p>
                            {itemData.customerid}</li>
                        
                        <li>
                        <p className='hidden sm:block font-bold mb-3'>Name</p>{itemData.name}</li>
                       
                        <li>
                        <p className=' hidden sm:block font-bold mb-3'>Email</p>{itemData.email}</li>
                       
                        <li>
                        <p className='hidden sm:block font-bold mb-3'>Contact No</p>{itemData.contact}</li>
                        
                        <li>
                        <p className=' hidden sm:block font-bold mb-3'>Location</p>{itemData.location}</li>
                       
                        <li>
                        <p className='hidden sm:block font-bold mb-3'>Profile Details</p>
                        <button className='bg-indigo-400 text-white rounded-md px-2 sm:px-5'>Open</button>
                        </li>
                        
                    </ul>
         </div>
       
        
    </div>
  )
}

export default User