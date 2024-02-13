import React, { useState } from 'react'
// import 'react-notifications/lib/notifications.css';
// import { NotificationContainer, NotificationManager } from 'react-notifications';

const Login = () => {
 

  // const shownotiation = ()=>{
  //   NotificationManager.info('Info message');
  // }
 

  return (
    <div className='w-[100%]  h-[100%]  bg-black/50 fixed '>
       
        <div className='w-2/3 sm:w-1/3 h-1/2 bg-slate-300 py-2 m-auto my-6 rounded-3xl'>
        
        <section className="h-full flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
    
      <div className="md:w-1/2 max-w-sm">
        <h1 className='text-center font-semibold text-xl py-3 text-[#96105A]'>Login here </h1>
     
        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded" type="text" placeholder="Email Address" />
        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="password" placeholder="Password" />
        <div className="mt-4 flex justify-between font-semibold text-sm">
          <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
            <input className="mr-1" type="checkbox" />
            <span>Remember Me</span>
          </label>
          <a className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4" href="#">Forgot Password?</a>
        </div>
        <div className="text-center md:text-left">
          <button
          //  onClick={()=>shownotiation}
          className="mt-4 bg-indigo-400 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit">Login</button>
        </div>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Don't have an account? <a className="text-red-600 hover:underline hover:underline-offset-4" href="#">Register</a>
        </div>
      </div>
    </section>
            
        </div>

{/* <NotificationContainer/> */}
    </div>
  )
}

export default Login