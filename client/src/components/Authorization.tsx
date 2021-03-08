import './authorization.css'
import { Link } from 'react-router-dom'
import arrow from '../assets/arrow_right_alt-white-18dp.svg'
import { useState } from 'react'
import { useHttp } from '../hooks/http.hook'
export const AuthPage = () => {
  const {loading,error,request} = useHttp()
  const [authForm, setAuthForm] = useState({
    email: '',
    password: ''
  })

  const changeHandler = (e) => {
    setAuthForm({...authForm, [e.target.name]: e.target.value })
  }

  const loginHandler = async () => {
    try {
      const data = request('/api/auth/register', 'GET',{...authForm})
      console.log(data)
    } catch (error) {
      
    }
  }

  return (
    <div className="authorization-wrapper">
      <h1>Travel App</h1>
      <h3><Link to="/registration"> <p>Create an account?</p> <img src={arrow} alt="arrow"/></Link></h3>
      <form className="authorization-form">
        <input onChange={changeHandler}  name="email" autoComplete="off" className="input-form" placeholder='Email'/>
        <input onChange={changeHandler} name="password" type="password" className="input-form" placeholder='Password'/> 
        <button onClick={loginHandler} type="submit" disabled={loading} className="btn-form"><a href="/">Submit</a></button>  
      </form>
    </div>
  )
}