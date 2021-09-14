import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dasahboard from './core/components/main/dashboard/Dashboard';
import Security from './core/components/security/Security';


export default () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Security}></Route>
            <Route path="/dashboard" exact component={Dasahboard}></Route>
        </Switch>
        </BrowserRouter>
    )
}