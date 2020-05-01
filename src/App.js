import React from 'react';
import './App.css';
import Layout from "./components/Layout/Layout";
import {Redirect, Route, Switch} from "react-router";
import Home from "./components/Home/Home";

const App = () => {
    return (
        <div className="App">
            <Layout>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Redirect to="/"/>
                </Switch>
            </Layout>
        </div>
    );
}

export default App;
