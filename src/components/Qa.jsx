import React, { useState } from 'react'
import query from '../qa'

const Qa = ({}) => {

    const [show,setShow] = useState(query[0].id)
  return (

    <>
     {/* <h1 className='text-center font-medium text-2xl'>Frequently Asked Question</h1> */}
     <div className='w-2/3 mx-auto items-center'>
        <h1 className='text-center font-bold text-3xl py-8'>Frequently Asked Questions</h1>
       {
        query.map((items,i)=>(
            <>
            <div className='mb-3 ' key={items.id}>
            <h1 onClick={()=> setShow(items.id)} className='bg-black text-white font-medium py-2 px-4  '>{items.question}</h1>
            <h1  className={show == items.id ? 'block border border-red-400 py-2 px-4' : 'hidden'}>{items.answer}</h1>
            </div>
            </>
        ))
       }
    
       
   </div>
    </>
    
  )
}

export default Qa