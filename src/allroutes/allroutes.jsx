import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Signup from '../components/Signup'
import Dashboard from '../components/Dashboard'
const Allroutes = () => {
  return (
    <div> 
    <Routes>
<Route path='/' element={<Signup />}/>
<Route path='/dashboard' element={<Dashboard />}/>

    </Routes>

    </div>
  )
}

export default Allroutes