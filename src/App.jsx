import React from 'react'
import Navbar from './Components/Navbar'
import Content from './Components/Content'
import Card from './Components/Card'
import Button from './Components/Button'

const App = () => {
  const users=["uschee","asknte","ebehatr","prutachi"]
  return (
    <div className='h-screen flex flex-col'>
      {/* <Navbar /> */}
      {/* <Content /> */}
      {/* <Card/>
      <Card/> */}
      {/* {Card("Sanket")}
      {Card("zaatee")}
      {Card("linkan")}
      {Card()} */}
      <Card user="Sarthak" age={29}/>
      <Card user="kumar" age={89}/>
      <Card user="sanket" age={49}/>
      <Card user="harsh" age={19}/>
      <Button content="Buy Now"/>
      <Button content="Explore Courses"/>
      <Button content="Buy Courses Now"/> 
      {users.map(function(elem){
        return<Button text={elem}/> //using array how to output on screens
      })}

    </div>
  )
}

export default App
