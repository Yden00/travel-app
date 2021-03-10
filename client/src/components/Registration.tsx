import { Link } from 'react-router-dom'
import './registration.css'
import arrow from '../assets/arrow_right_alt-white-18dp.svg'
import { useHttp } from '../hooks/http.hook'
import { useState } from 'react'
export const RegPage = () => {
  const {loading, request} = useHttp()
  const [regForm, setRegForm] = useState({
    username: '',
    email: '',
    password: ''
  })

  const changeHandler = (e) => {
    setRegForm({...regForm, [e.target.name]: e.target.value })
  }

  const registerHandler = async () => {
    try {
      await request('/api/auth/register', 'POST', {...regForm})
    } catch (e) {}
  }

  return (
    <div className="registration-wrapper">
      <h1>Travel App</h1>
      <h3><Link to="/authorization">Have an account?</Link> <img src={arrow} alt="arrow"/></h3>
      <form className="registration-form">
        <input onChange={changeHandler} name="username"  autoComplete="off" className="input-form" placeholder='Username'/>
        <input onChange={changeHandler} name="email" type="mail" autoComplete="off" className="input-form" placeholder='Email'/>
        <input onChange={changeHandler} name="password" type="password" className="input-form" placeholder='Password'/> 
        <Link to="/authorization"><button onClick={registerHandler} disabled={loading} type="submit" className="btn-form">Submit</button></Link>
      </form>
    </div>
  )
}