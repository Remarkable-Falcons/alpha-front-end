import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Security from './core/components/security/Security';


export default () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Security}></Route>
        </Switch>
        </BrowserRouter>
    )
}