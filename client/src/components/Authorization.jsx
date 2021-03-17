import './authorization.css'
import { Link } from 'react-router-dom'
import arrow from '../assets/arrow_right_alt-white-18dp.svg'
import { useContext, useState } from 'react'
import { useHttp } from '../hooks/http.hook'
import { AuthContext } from '../context/AuthContext'
export const AuthPage = (props) => {
  const auth = useContext(AuthContext)
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
      const data = await request('/api/auth/login', 'POST', {...authForm})
      auth.login(data.token, data.userId, data.username)
      props.history.replace('/home')
    } catch (e) {
      console.log(error)
    }
  }

  return (
    <div className="authorization-wrapper">
      <h1>Travel App</h1>
      <h3><Link to="/registration">Create an account?</Link> <img src={arrow} alt="arrow"/></h3>
      <form className="authorization-form">
        <input onChange={changeHandler}  name="email" autoComplete="off" className="input-form" placeholder='Email'/>
        <input onChange={changeHandler} name="password" type="password" className="input-form" placeholder='Password'/> 
        <button onClick={loginHandler} type="submit" disabled={loading} className="btn-form">Submit</button>  
      </form>
    </div>
  )
}