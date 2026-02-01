import React from 'react'
import { Link, Route } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-red-600 flex items-center gap-25 font-semibold justify-end p-5'>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/contact'>Contact Us</Link>
      <Link to='/field'>Field</Link>
      
     
    </div>
  )
}

export default Navbar
