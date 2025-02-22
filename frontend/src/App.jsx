import './App.css'
import Goals from './components/Goals'
import Home from './components/Home'
import About from './components/About'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import NavBar from './components/NavBar'
import UpdateGoal from './components/UpdateGoal'


function App() {
  
  const router=createBrowserRouter([
    {path:"/goals"
      ,element:<div>
        <NavBar/>
      <Goals/>
      </div>
    },{path:"/update",
      element:<div>
        <NavBar/>
        <UpdateGoal/> 
      </div>
    },
    {path:"/",
      element:<div>
        <NavBar/>
        <Home/>
      </div>
    },
    { path:'/signup',
      element:<div>
        <NavBar/>
        <h1>
          signup
        </h1>
        <SignUp/>
      </div>
    },{
  path:"signin",
  element:<div>
    <NavBar/>
    <SignIn/>
  </div>
    },
    {path:"/aboutme",
      element:<div>
        <NavBar/>
        <About/>
      </div>
    },
    {path:"*",
      element:<div>
        <h1>404</h1>
        <h3>page is not found</h3>
      </div>
    }
  ])







 


  return (
  <RouterProvider router={router}>
     
  </RouterProvider>
  )
}

export default App
