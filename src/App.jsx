import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import Content from './Components/Content'
import Card from './Components/Card'
import Button from './Components/Button'
import axios from 'axios'

const App = () => {
  // const users=["uschee","asknte","ebehatr","prutachi"]
  // const [gender, setGender] = useState("male")
  // function genderChanged(){
  //   if(gender=="male")
  //   setGender("female")
  // else
  //   setGender("male")
  // }

  const [username, setUsername] = useState('')
  const [num, setNum] = useState(0)
  const getdata= async ()=>{
    const response=await axios.get('https://randomuser.me/api/')
    console.log(response.data.results[0].name.first + " "+response.data.results[0].name.last ) ;
    setUsername(response.data.results[0].name.first + " "+response.data.results[0].name.last )
    

  }
  useEffect(function(){

    getdata()
  },[num])
  return (
    <div className='h-screen bg-black text-white p-5 text-2xl'>

      {username}
      <h1>{num}</h1>
      <button
      className='px-3 py-2 bg-emerald-400 active:scale-95' 
      onClick={()=>{
        setNum(num+1)
      }}
      >click here</button>
      {/* <Navbar /> */}
      {/* <Content /> */}
      {/* <Card/>
      <Card/> */}
      {/* {Card("Sanket")}
      {Card("zaatee")}
      {Card("linkan")}
      {Card()} */}
      {/* <Card user="Sarthak" age={29}/>
      <Card user="kumar" age={89}/>
      <Card user="sanket" age={49}/>
      <Card user="harsh" age={19}/>
      <Button content="Buy Now"/>
      <Button content="Explore Courses"/>
      <Button content="Buy Courses Now"/> 
      {users.map(function(elem){
        return<Button text={elem}/> //using array how to output on screens
      })} */}

      {/* <h1 className='text-xl m-5 px-4 py-2'>Your gender is {gender}</h1>
      <button onClick={genderChanged} className='m-5 px-4 py-1.5 w-fit bg-green-600 text-white text-2xl rounded-full active:scale-95'>click to change</button> */}

      


    </div>
  )
}

export default App
