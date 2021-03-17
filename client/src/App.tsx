import React from 'react';
import { RegPage } from './components/Registration';
import { AuthPage } from './components/Authorization.jsx';
import { useAuth } from './hooks/auth.hook';
import { BrowserRouter as Router, Switch, Route,Redirect } from 'react-router-dom';
import Cards from './components/Cards';
import Country from './components/Country';
import Header from './components/Header'
import './App.css';
import { AuthContext } from './context/AuthContext';


function App() {
    const {token, login , logout, userId , username} = useAuth()
    const isAuthorized = !!token;
    console.log(token)
    if(isAuthorized){
    return (
        <AuthContext.Provider value={{
            token, login, logout, userId, isAuthorized
            }}>
            <div className="App">
                <Router>
                    <Header username = {username}/>
                    <Switch>
                        <Route exact path="/home" component={Cards} />
                        <Route exact path="/home/:countryId" component={Country} />
                        <Redirect to="/home" />
                    </Switch>
                </Router>
            </div>
        </AuthContext.Provider>
    );
    }
    return (
        <AuthContext.Provider value={{
            token, login, logout, userId, isAuthorized
        }}>
            <div className="App">
            <Router>
                <Route path="/registration" exact component={RegPage} />
                <Route path="/authorization" exact component={AuthPage} />
                <Redirect to="/authorization" />
            </Router>
            </div>
        </AuthContext.Provider>
    )
}
export default App;
