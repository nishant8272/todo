import React from 'react'
import { useNavigate } from 'react-router-dom'
function Home() {
    const navigator=useNavigate()
  return (
    <div>
      <div>
    <h1>My First React App</h1>
    </div>
    <button  onClick={()=>{
      navigator('/goals')
    }}>go to  gaols </button>
    <button onClick={()=>{
        navigator('/signup')
    }}>
        go to signup 
    </button>
    <button onClick={()=>{
        navigator('/update')
    }}>
        go to update 
    </button>
    </div>
  )
}

export default Home
