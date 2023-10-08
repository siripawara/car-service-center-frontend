import React from 'react'
import { useState } from 'react'
import '../Login/style.css'




const Login = () => {

const [username,setUsername] = useState("")
const [password,setPassword] = useState("")
const [wrongPassword, setWorngPassword] = useState(true)

const handleSubmit = (e)=>{
  e.preventDefault() 
  alert(`${username} / ${password}`)
  setWorngPassword(!wrongPassword)
}



return (
    <div className='containerMain'>
    <div className='container-fluid'>
      <div className='row mycontainer justify-content-end'>
        <div className='col-lg-4 mycontainer2'>
          <form>
            <h1 className='textColors'>Login </h1>
            <div className="mb-2">
              <label for="username" className='form-label textColors'>Username</label>
              <input type='text' className='form-control' id='username' onChange={(e)=>setUsername(e.target.value.trim())}/>
            </div>
            <div className='mb-2'>
              <label for="password" className='form-label textColors'>Password</label>
              <input type='password' className='form-control' id='password' onChange={(e)=>setPassword(e.target.value.trim())}/>
            </div>
            {wrongPassword? <span className='errorspan'>Your password or usename is incorrect</span>:<></>}<br/>
            <button type='submit' className='btn btn-primary btn2' onClick={handleSubmit}>Log in</button>
            <a href='#' className='a2'>Do you have an account?</a>
            
            
          </form>
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default Login