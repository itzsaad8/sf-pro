import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Customer from './components/Customer'
import Dpchange from './components/Dpchange'
// import User from './components/User'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Customer/>
     <Dpchange/>
     {/* <User/> */}
     
    </>
  )
}

export default App
