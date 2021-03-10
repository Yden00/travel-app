import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext'
import logo from '../assets/public-white-18dp.svg';
const Header = ({username}) => {
  const auth = useContext (AuthContext)
return (
  <header>
      <div className="header-wrapper">
          <div className="logo">
              <img src={logo} alt="Logo" />
              <h1>Travel App</h1>
          </div>
          <div className="search">
              <input className="search bar" type="text" placeholder="Search country..." />
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