import React, { useEffect, useState } from 'react'
import Header from './Components/Header'
import axios from 'axios'

const App = () => {
  const [data, setData]=useState([])
  // const [input, setInput]=useState("")
  useEffect(()=>{
    axios.get("https://dummyjson.com/quotes").then((res)=>{
      console.log(res.data.quotes)
      setData(res.data.quotes)
    }).catch((err)=>{
      console.log(err)
    })
  },[])
  return (
    <>
      <section className=' w-screen bg-blue-600'>
        {
          (data)?(data.map((e,i)=>(
            
            <div className='p-4' key={i}>
          <p className='text-lg text-blue-50 w-screen lg:w-1/2 md:w-[80%]'>{e.quote}</p>
          <h1 className='text-2xl font-bold'>{e.author}</h1>
        </div>
            
          ))):(
              <h1>Nothing .....</h1>
              )
        }
      </section>
    </>
  )
}

export default App
