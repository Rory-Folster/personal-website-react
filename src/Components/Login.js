import React from 'react'
import '../styles/login.css'

function Login() {

  return (
    <div className='login-input'>
        <form>
        <label>Username: </label>
        <input></input>
        <label>Password: </label>
        <input type='password'></input>
        <button className='login-btn'>Submit</button>
        </form>
    </div>
  )
}

export default Login