import React, { useEffect, useState } from 'react'
import CreateGoal from './CreateGoal';
import { useNavigate } from 'react-router-dom';
import UpdateGoal from './UpdateGoal';

function Goals() {
  const navigator=useNavigate()

  const [goals, setGoals] = useState([])
  useEffect(() => {
    handleGoals();
  }, [setGoals])
  const token = localStorage.getItem("token")
  const realtoken = `Bearer ${token}`


  const handleGoals = async () => {
    const response = await fetch("http://localhost:8000/api/goals", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "authorization": realtoken
      }
    })
    const data = await response.json()
    setGoals(data.goals)
  }

  function deleteTodo(id) {
    const response = fetch(`http://localhost:8000/api/goals/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "authorization": realtoken
      }
    })
    response.then((res) => {
      if (res.ok) {
        handleGoals()
      }
    })
  }

  return (
    <div>
      <h1>Goals</h1>
      <CreateGoal data={goals} setdata={setGoals} />
      {goals.map((value) => {
        return (
          <div key={value._id} id={value._id} style={{ background: "green", color: "white", padding: "10px", margin: "10px", borderRadius: "10px" }}>
            <h1>{value.text}
            </h1>
            <button onClick={() => {
              const id = value._id
              deleteTodo(id)
            }}>delete goal</button>
          <UpdateGoal id={value._id} handleGoals={handleGoals} />
          </div>
        )
      })}

    </div>
  )
}

export default Goals
