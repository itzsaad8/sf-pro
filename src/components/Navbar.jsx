import React, { useState } from 'react'
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { FiFilter } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import Login from './Login';



const Navbar = () => {


  const [modal,setShowmodal]=useState(false)


    const [item,SetItem] = useState();
    const [filter ,SetFilter] =useState(true);
    const [menu ,SetMenu] = useState(false);


    const toggle=  ()=>{
        SetMenu(!menu)
    }


    const filterClick = () =>{
        SetFilter(!filter)
    }

    const itemClick = () =>{
        SetItem(!item)
    }

    

  return (
    <>
    
    <div className='mx-6 sm:mx-24  my-4 sm:my-8'>
      <div className='hidden sm:flex sm:justify-between text-[#96105A] font-semibold text-lg sm:text-2xl'>
        <div className=''>
            <ul className='flex sm:gap-8 md:gap-20 cursor-pointer'>
                <li className=' '>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Faq's</li>
            </ul>
        </div>

        {/* filter starts */}
      

      {item ?
             <div className=' ml-28'>
             <input className='w-1/2 border border-[#96105A] rounded-full px-2 py-0.5 text-center ' type="search" placeholder='Search !' />
            </div> 
            :
              <div className='' onClick={filterClick}>
           {filter ? 
            <div className='flex gap-3 items-center px-1 py-1 cursor-pointer'>
            <FiFilter />
            <p>Filter</p>
            </div>
       
          :
          <div className=' gap-3 items-center px-1 py-1 '>
            <div className='flex gap-3 items-center px-1 py-1 '>
            <FiFilter />
            <p className='cursor-pointer'>Filter</p>
            </div>

           
            <div className='bg-slate-300 border border-gray-400 py-5 px-5 fixed'>
            <ul className='cursor-pointer'>
                <li className='' onClick={itemClick}>Name</li>
                <li className='' onClick={itemClick}>Email</li>
                <li className='' onClick={itemClick}>Id</li>
            </ul>
         </div>
         </div>
        }
         </div>

      }
     

       {/* { filter? <div className='bg-slate-300 border border-gray-400 py-4 px-3'>
            <ul>
                <li>Name</li>
                <li>Email</li>
                <li>Id</li>
            </ul>
         </div>
         :null} */}
        {/* filter ends */}
        <div>
            <button onClick={()=> setShowmodal(!modal)}>{modal ? <RxCross1  className='items-center text-3xl font-semibold mr-2'/> :'Login' }</button>
        </div>
      </div>


      <div className='block sm:hidden text-4xl mt-8 ' onClick={toggle}>
         {menu ?
         
         
               <FiX  className='ml-auto text-[#96105A]'/>
               :
                <FiMenu  className='ml-auto text-[#96105A]'/>
                  
                  
         }
        
      </div>
    {menu?  <div className='block sm:hidden bg-slate-100 border border-gray-300 my-3 py-3 text-[#96105A] font-semibold text-lg sm:text-xl text-center'>
        <div className=''>
            <ul className=' '>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Faq's</li>
            </ul>
        </div>
       
        <div>
            <button onClick={()=> setShowmodal(!modal)}>{modal ? <RxCross1 /> :'Login' }</button>
        </div>
      </div>
      :
      <div></div>}

      {/* ////////////////////////////////// */}


      {/* /////// */}
     

    </div>
    {
      modal ? 
      <Login/>:''
    }
    
    </>
  )
}

export default Navbar