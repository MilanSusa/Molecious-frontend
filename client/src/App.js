import React from 'react';
import './App.css';
import Layout from "./components/Layout/Layout";
import {Redirect, Route, Switch} from "react-router";
import Home from "./components/Home/Home";
import Signup from "./containers/Signup/Signup";
import Login from "./containers/Login/Login";
import Logout from "./components/Logout/Logout";

const App = () => {
    return (
        <div className="App">
            <Layout>
                <Switch>
                    <Route path="/signup" render={props => <Signup {...props} />}/>
                    <Route path="/login" render={props => <Login {...props} />}/>
                    <Route path="/logout" render={props => <Logout {...props} />}/>
                    <Route path="/" exact component={Home}/>
                    <Redirect to="/"/>
                </Switch>
            </Layout>
        </div>
    );
}

export default App;
