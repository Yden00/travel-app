import React from 'react';
import './App.css';
import Cards from './components/Cards';
import { BrowserRouter as Router, Switch, Route,Redirect } from 'react-router-dom';
import Country from './components/Country';
import Header from './components/Header'
import { RegPage } from './components/Registration';
import { AuthPage } from './components/Authorization';


function App({isAuthorized}) {
    if(isAuthorized){
    return (
        <div className="App">
            <Header/>
            <Router>
                <Switch>
                    <Route exact path="/home" component={Cards}/>
                    <Route exact path="/:countryId" component={Country}/>
                    <Redirect to="/home"/>
                </Switch> 
            </Router>
        </div>
    );
    }
    return (
        <div className="App">
        <Router>
            <Route path="/registration" exact component={RegPage}/>
            <Route path="/authorization" exact component={AuthPage}/>
            <Redirect to="/authorization"/>
        </Router>
        </div>
    )
}
export default App;
