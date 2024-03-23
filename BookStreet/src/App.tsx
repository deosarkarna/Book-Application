// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
// import BookTemplate from './components/BookTemplate'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <h2>Book Street Home</h2>
      <p>Cheaper than streets</p>
      <BookTemplate/> */}
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default App
