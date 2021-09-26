import React, { Component, useState } from "react";
import { Switch, Route } from "react-router-dom";
import InsertRecords from "../record/insert/InsertRecord";

export default (props) => {
  const { match } = props.props; // props do elemento pai
  return (
    <Switch>
      <Route path={`${match.url}/record`} component={InsertRecords} />
    </Switch>
  );
};
