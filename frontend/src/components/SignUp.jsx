import React from 'react'
import { useState } from 'react';
import "./Signup.css"

function SignUp() {
   const [email, setMail] = useState("");
   const [password, setPassword] = useState("");
   const [name, setName] = useState("");


   async function Handlepage(){
   const response = await fetch('http://localhost:8000/api/users/register', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({name: name, email: email, password: password })
        });
     
        const data = await response.json();
        alert(data.message)
   }

    return (
        <div className='card'>
            <h1>Sign Up</h1>
           <form onSubmit={(e)=>{
            e.preventDefault();
            console.log(email, password);
            Handlepage();
           }}>
           <div>
            <label >
                Name: <input type="text" name="name" onChange={(e)=>{
                    setName(e.target.value);
                }} />
            </label>
            </div>
            <div>
                <label>
                    mail: <input type="text" placeholder="enter your email"  onChange={(e)=>{
                        setMail(e.target.value);
                    }}/>
                </label>
            </div>
           <div>
           <label>
                password: <input type="password" placeholder="enter your password"  onChange={(e)=>{
                    setPassword(e.target.value);
                }}/>
            </label>
           </div>
            <button>submit</button>
           </form>
        </div>
    )
}

export default SignUp
