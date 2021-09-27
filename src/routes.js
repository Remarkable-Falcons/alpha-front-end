import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dasahboard from "./core/components/core/dashboard/Dashboard";
import InsertRecords from "./core/components/core/record/insert/InsertRecord";
import Security from "./core/components/security/Login";
import { Router } from "react-router";

export default () => {
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/" exact component={Dasahboard}></Route>
        <Route path="/login" exact component={Security}></Route>
        <Route path="/main"  component={Dasahboard}>
            <Route path="" component={Dasahboard}></Route>
            <Route path="/record" component={InsertRecords}></Route>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
