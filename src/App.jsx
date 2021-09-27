import React from 'react';
import PortalUtil from './core/shared/utils/PortalUtil';
import SecurityUtil from './core/shared/utils/SecurityUtil';
import Routes from './routes';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Security from './core/components/security/Login';

export default () => {
    if (SecurityUtil.isAutenticated()) {
        return (
            <div className="App">
                <Routes></Routes>
            </div>
        )
    }
    return (
        <Security>
        </Security>
    );
}