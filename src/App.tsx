import React from 'react';
import './App.css';
import './components/cards/cards'
import logo from './assets/public-white-18dp.svg';
import Cards from './components/cards/cards.jsx';
function App() {
    return (
        <div className="App">
            <header>
                <div className="header-wrapper">
                    <div className="logo">
                        <img src={logo} alt="Logo" />
                        <h1>Travel App</h1>
                    </div>
                    <div className="search">
                        <input className="search bar" type="text" />
                        <button className="search btn"></button>
                    </div>
                    <button className="login">Login</button>
                </div>
            </header>
            <main className="country-cards">
              <Cards />
            </main>
            <footer>
                <div className="rss-logo"></div>
                <div className="developers">
                    <p>Developers:</p>
                </div>
            </footer>
        </div>
    );
}
export default App;
