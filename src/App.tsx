import React from 'react';
import './App.css';
import './components/cards/cards';
import logo from './assets/public-white-18dp.svg';
import Cards from './components/cards/cards.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Country from './components/cards/country';

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
                        <button className="login">Login</button>
                    </div>
                </div>
            </header>
            <Router>
                <Switch>
                    <Route exact path="/" component={Cards}/>
                    <Route exact path="/:countryId" component={Country}/>
                </Switch> 
            </Router>
        </div>
    );
}
export default App;
