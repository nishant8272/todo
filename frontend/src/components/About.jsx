import React, { useEffect, useState } from 'react'

function About() {
  const [user, setUser] = useState({})
   const token=localStorage.getItem("token")
   const realtoken=`Bearer ${token}`

 async function aboutme(){

  const response = await fetch('http://localhost:8000/api/users/me',{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': realtoken
      }
      })
      const data = await response.json()
     setUser(data)
  }
  useEffect(()=>{
    aboutme();
  },[])

  return (
    <div>
   <h1>users details</h1>
   <h2>name: {user.name}</h2>
   <h3>email: {user.email}</h3>
     
    </div>
  )
}

export default About
