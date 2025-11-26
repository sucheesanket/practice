import React from 'react'
import Navbar from './Components/Navbar'
import Content from './Components/Content'

const App = () => {
  return (
    <div className='h-screen flex flex-col'>
      <Navbar />
      <Content />
    </div>
  )
}

export default App
