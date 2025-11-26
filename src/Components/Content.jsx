import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Content = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get("https://dummyjson.com/quotes")
      .then((res) => {
        console.log(res.data.quotes)
        setData(res.data.quotes)
      })
      .catch(err => console.log(err))

  }, [])   // run only once on mount

  return (
    <div className='bg-blue-700 flex-1 p-8 '>
  <section>
    
    {data.map((item) => (
      <div key={item.id}>
        <p className='m-4'>{item.quote}</p>
        <h2>{item.author}</h2>
      </div>
    ))}
  </section>
</div>

    
  )
}

export default Content
