import React, { useState } from 'react'
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import { AiOutlineRetweet } from "react-icons/ai";

import img from '../assets/dppp.jpg'
import data from '../Data'
import Qa from './Qa';
import query from '../qa'
import { useNavigate } from 'react-router-dom';


const Customer = () => {
   

  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
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

     const filteredData = 
     data
     .filter((item) =>
     item.name.includes(searchTerm)
     
      )
      .sort((a, b) => {
        const priceA = parseFloat(a.price);
        const priceB = parseFloat(b.price);
        return sortOrder === 'asc' ? priceA - priceB : priceB - priceA; });

        const toggleSortOrder = () => {
          setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        };


  return (
    <div className='mx-2 sm:mx-24 my-10'>
      <div className='flex justify-between'>


            <input
                type="text"
                placeholder="Search by name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="mb-4 px-2 py-1 border rounded"
                />
                <div className='flex gap-2 items-center'>
                  <p className='text-lg mb-4'>Price:</p>
                <button className=' flex items-center gap-1 px-3 py-1 mb-4  border rounded cursor-pointer' onClick={toggleSortOrder}>
                <AiOutlineRetweet />
                {sortOrder == 'asc' ? 'high to low' : 'low to high' } 
                </button>

                </div>
               
           {/* <input
            type='text'
            placeholder={`${sortOrder == 'asc' ? 'high to low' : 'low to high' }  `}
            // <AiOutlineRetweet />
            onClick={toggleSortOrder}
            readOnly
            className='px-2 py-1 border rounded cursor-pointer'
            /> */}

      </div>

<ul className='flex sm:hidden  items-center justify-between text-center mb-2 shadow-lg p-1 sm:p-3 rounded-lg border border-gray-200 text-[10px] sm:text-base'>
                    <li>Dp</li>
                    <li>Customer Id</li>
                    <li>Name </li>
                    <li>Email </li>
                    <li>Contact no</li>
                    <li>Location</li>
                    <li>Price</li>
                    <li>Profile Details</li>
                  </ul>


                  {/* {sortOrder === 'asc' ? (
            <div className='absolute top-full left-0 mt-1 p-2 bg-white border rounded shadow'>
              <div onClick={toggleSortOrder} className='cursor-pointer'>
                Low to High
              </div>
              
            </div>
          ) : (
            <div className='absolute top-full left-0 mt-1 p-2 bg-white border rounded shadow'>
              <div onClick={toggleSortOrder} className='cursor-pointer'>
                High to Low
              </div>
             
            </div>
          )} */}

                  
        
        {
            
            
            filteredData.slice(first,last).map((item, i)=>(
                
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
                        <p className=' hidden sm:block font-bold mb-3'>Price</p>$ {item.price} </li>
                       
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