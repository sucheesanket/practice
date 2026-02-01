import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
        <div className='flex items-center justify-center h-40 text-4xl font-medium capitalize underline'>
      <h1>contact Page</h1>
      <br />
      </div>
      <div className='flex flex-col p-10 text-4xl font-medium capitalize underline gap-10'>
      <Link to='/contact/men'>Men's website</Link>
      <Link to='/contact/women'>Women's website</Link>

      </div>
      
      
    

    </div>
    
  )
}

export default Contact
