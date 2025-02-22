import React from 'react'
import { useState } from 'react';

function CreateGoal({data,setdata}) {
    const [goal, setGoal] = useState('')

    async function GoalCreate(goal){
        const token=localStorage.getItem("token")
        const realtoken=`Bearer ${token}`
        console.log(realtoken)
     const response=await fetch(`http://localhost:8000/api/goals`, {
        method:"POST",
        headers:{
            "Content-Type": "application/json",
            "Authorization":realtoken
        },
        body:JSON.stringify({text:goal})
     })
     alert("gaol is created.")
     setdata([...data,{text:goal}])
     setGoal("")
    }

  return (
    <div>
      <form onSubmit={(e)=>{
        e.preventDefault();
           GoalCreate(goal)
      }} >
        <div>
            <label>
                goal: <input type="text" value={goal} placeholder='enter your goal' onChange={(e)=>{
                    setGoal(e.target.value)
                }}/>
            </label>
            <button type='submit'>submit</button>
        </div>
      </form>
    </div>
  )
}

export default CreateGoal
