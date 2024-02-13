import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import img from '../assets/dppp.jpg';

const User = () => {
  const [item, setItem] = useState([]);
  const location = useLocation();
  const itemData = location.state?.itemData || {};

  const todoAdd = (event) => {
    event.preventDefault();
    let todoname = event.target.todoname.value;

    // Update the state using the setItem function
    if (todoname !== '') {
      setItem([...item, todoname]);

      // Clear the input field
      event.target.todoname.value = '';

    }

  };



  const newarray = item.map((value, index) => (
    <New key={index} value={value} item={item} indexnumber={index} setItem={setItem} />
  ));

  return (
    <div className='mx-12 bg-slate-300 rounded-2xl'>
      <div>
        <ul className='flex items-center justify-between text-center mb-2 shadow-lg p-1 sm:p-3 rounded-lg border border-gray-200 text-[10px] sm:text-base'>
          <img width={200} className='rounded-[20%]' src={img} alt="" />
          <li>
            <p className='hidden sm:block font-bold mb-3'>Customer ID</p>
            {itemData.customerid}
          </li>
          <li>
            <p className='hidden sm:block font-bold mb-3'>Name</p>
            {itemData.name}
          </li>
          <li>
            <p className=' hidden sm:block font-bold mb-3'>Email</p>
            {itemData.email}
          </li>
          <li>
            <p className='hidden sm:block font-bold mb-3'>Contact No</p>
            {itemData.contact}
          </li>
          <li>
            <p className=' hidden sm:block font-bold mb-3'>Location</p>
            {itemData.location}
          </li>
          <li>
            <p className='hidden sm:block font-bold mb-3'>Profile Details</p>
            <button className='bg-indigo-400 text-white rounded-md px-2 sm:px-5'>Open</button>
          </li>
        </ul>
      </div>

      <div className='text-center py-8'>
        <h2 className='text-2xl font-bold py-5'>Daily Tasks</h2>
        <form className='flex justify-center gap-20 mb-5' onSubmit={todoAdd}>
          <input className='w-[600px] px-2 py-1 rounded-lg ' placeholder='Enter your tasks ...' type="text" name='todoname' /> <button className='py-1 px-6 bg-black text-white rounded-lg' type='submit'>add</button>
        </form>
        <div>
          <ul className='flex flex-col justify-center items-center '>
            {newarray}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default User;




// new fumction  used above

function New({ value, indexnumber,item,setItem }) {

  let onDelete=()=>{
    let fdata= item.filter((v,i)=>i!==indexnumber)
    setItem(fdata)
  }


  return (
    <li className='w-1/2 text-center flex justify-between text-white bg-black mb-5 px-8 pb-1 items-center rounded-lg text-2xl'>
      {value} <span className='cursor-pointer text-red-900 text-4xl items-center' onClick={onDelete}>&times;</span>
    </li>
  );
}
