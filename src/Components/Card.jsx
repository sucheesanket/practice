import React from 'react'

const Card = (props) => {
    console.log(props.user);
    
  return (
    <div>
      <h1 className='text-black text-2xl '>hey hello {props.user} and all of your age is {props.age} remembered it </h1>
    </div>
  )
}

export default Card
