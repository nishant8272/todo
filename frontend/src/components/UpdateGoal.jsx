import React, { useState } from 'react'
function UpdateGoal({id,handleGoals}) {
   
    const token = localStorage.getItem("token")
  const realtoken = `Bearer ${token}`


  const[newData,setNewData]=useState("")
  
    function editGoal({ id, data }) {
        fetch(`http://localhost:8000/api/goals/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "authorization": realtoken
            },
            body: JSON.stringify({ text: data })
        })
            .then(async (res) => {
                const value = await res.json()
                console.log(value)
                if (res.ok) {
                    handleGoals()
                }
            })
    }

    return (
        <div>
            <form onSubmit={(e)=>{
              e.preventDefault()
                editGoal({ id: id, data:newData })
            }} >
                <input type="text" placeholder="Enter update goal" onChange={(e)=>{
                    setNewData(e.target.value)
                }} />
                <button type='submit'>Update Goal</button>
            </form>
        </div>
    )
}

export default UpdateGoal
