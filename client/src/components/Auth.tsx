import React from 'react'
import './auth.css'
export const AuthPage = () => {
  return (
    <div className="authorization-wrapper">
      <h1>Travel App</h1>
      <h3><a href="/">Have an account?</a></h3>
      <form className="authorization-form">
        <input className="input-form" placeholder='Username'/>
        <input type="mail" className="input-form" placeholder='Mail'/>
        <input type="password" className="input-form" placeholder='Password'/> 
        <input type="password" className="input-form" placeholder='Repeat-password'/> 
        <button type="submit" className="btn-form"><a href="/">Submit</a></button>  
      </form>
    </div>
  )
}