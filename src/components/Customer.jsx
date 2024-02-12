import React, { useState } from 'react'
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";

import img from '../assets/dppp.jpg'
import data from '../Data'
import Qa from './Qa';
import query from '../qa'
import { useNavigate } from 'react-router-dom';


const Customer = () => {
   
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
   
     const navigate = useNavigate();

     const setData = (item) =>{

       navigate('/profile' , { state : { itemData : item } });
     }


  return (
    <div className='mx-2 sm:mx-24 my-10'>


<ul className='flex sm:hidden  items-center justify-between text-center mb-2 shadow-lg p-1 sm:p-3 rounded-lg border border-gray-200 text-[10px] sm:text-base'>
                    <li>Dp</li>
                    <li>Customer Id</li>
                    <li>Name </li>
                    <li>Email </li>
                    <li>Contact no</li>
                    <li>Location</li>
                    <li>Profile Details</li>
                  </ul>
        
        {
            
            
            data.slice(first,last).map((item, i)=>(
                
                <>
                <a href="/profile">

                
                <div className='' onClick={()=> setData(item)}>

                    <ul  className='flex items-center justify-between text-center mb-2 shadow-lg p-1 sm:p-3 rounded-lg border border-gray-200 text-[10px] sm:text-base'>
                        
                        <img   width={55} className='rounded-[50%]' src={img} alt="" />
                        
                        <li><p className='hidden sm:block font-bold mb-3'>Customer ID</p>
                            {item.customerid}</li>
                        
                        <li>
                        <p className='hidden sm:block font-bold mb-3'>Name</p>{item.name}</li>
                       
                        <li>
                        <p className=' hidden sm:block font-bold mb-3'>Email</p>{item.email}</li>
                       
                        <li>
                        <p className='hidden sm:block font-bold mb-3'>Contact No</p>{item.contact}</li>
                        
                        <li>
                        <p className=' hidden sm:block font-bold mb-3'>Location</p>{item.location}</li>
                       
                        <li>
                        <p className='hidden sm:block font-bold mb-3'>Profile Details</p>
                        <button className='bg-indigo-400 text-white rounded-md px-2 sm:px-5'>Open</button>
                        </li>
                        
                    </ul>

                </div>
                </a>

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


        
            

            <Qa />
            
        
    </div>



  )
}

export default Customer