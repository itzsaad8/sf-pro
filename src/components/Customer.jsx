import React, { useState } from 'react'
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";

import img from '../assets/dppp.jpg'
import data from '../Data'


const Customer = () => {
    // const [showMore, setShowMore] = useState(false);
    const [first,setFirst] = useState(0);
    const [last,setLast]= useState(9);

    const loadmore = () =>{
        setFirst(9)
        setLast(19)
    }
    const prev =()=>{
        setFirst(0)
        setLast(9)
    }
    // const itemsToShow = showMore ? data : data.slice({first}, {last});
  
    // const handleLoadMoreClick = () => {
    //   setShowMore(true);
    // };
  return (
    <div className='mx-24 my-10'>



        
        {
            
            
            data.slice(first,last).map((item, i)=>(
                
                <>
                <div className=''>
                    <ul className='flex justify-between text-center mb-2 shadow-lg p-3 rounded-lg border border-gray-200'>
                        
                        <img  width={55} className='rounded-[50%]' src={img} alt="" />
                        
                        <li><p className='font-bold mb-3'>Customer ID</p>
                            {item.customerid}</li>
                        
                        <li>
                        <p className='font-bold mb-3'>Name</p>{item.name}</li>
                       
                        <li>
                        <p className='font-bold mb-3'>Email</p>{item.email}</li>
                       
                        <li>
                        <p className='font-bold mb-3'>Contact No</p>{item.contact}</li>
                        
                        <li>
                        <p className='font-bold mb-3'>Location</p>{item.location}</li>
                       
                        <li>
                        <p className='font-bold mb-3'>Profile Details</p>
                        <button className='bg-indigo-400 text-white rounded-md px-5'>Open</button>
                        </li>
                        
                    </ul>

                </div>
                </>
                   
       
        
        ))

        }

           {/* {!showMore && (
        <button
          className='bg-indigo-400 text-white rounded-md px-5'
          onClick={handleLoadMoreClick}
        >
          Load More
        </button>
      )} */}


         {/* {items < data.length && (
        <button onClick={loadmore} className='bg-blue-500 text-white rounded-md px-5 mt-3'>
          Load More
        </button>
      )} */}
 
        <div className='text-center my-4  flex gap-5 justify-center'>
        
        <button className='bg-indigo-400 text-white rounded-md px-5  py-2 flex items-center gap-3' onClick={prev}><FiChevronLeft />1</button>
        <button className='bg-indigo-400 text-white rounded-md px-5  py-2 flex items-center gap-3' onClick={loadmore}>2<FiChevronRight /></button>
        </div>
    </div>
  )
}

export default Customer