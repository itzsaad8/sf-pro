import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Customer from './components/Customer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Customer/>
     
    </>
  )
}

export default App
