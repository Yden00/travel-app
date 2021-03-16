import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext'
import logo from '../assets/public-white-18dp.svg';
import { Link } from 'react-router-dom'
const Header = ({username}) => {
  const auth = useContext (AuthContext)
  const [searchValue, setSearchValue] = useState('')

  const changeHandler = (e) => {
    setSearchValue(e.target.value)
  }
return (
  <header>
      <div className="header-wrapper">
          <div className="logo">
              <img src={logo} alt="Logo" />
              <Link to="/home"><h1>Travel App</h1></Link>
          </div>
          <div className="search">
              <input onChange={changeHandler} className="search bar" type="text" placeholder="Search country..." />
              <button className="search btn"></button>
          </div>
          <div>
              <div id="lang">
                  <select>
                      <option>English</option>
                      <option>Русский</option>
                      <option>日本語</option>
                  </select>
              </div>
              <span className='user'>Hello  {username}!</span> 
              <button  onClick={auth.logout} className="logout">Logout</button>
          </div>
      </div>
  </header>
)
}

export default Header