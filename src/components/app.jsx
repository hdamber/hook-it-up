import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Users from "./users";
import SingleUser from './SingleUser';

function App() {
    return (
      <Router>
        <h2 style= {{ display: "flex", justifyContent: "center"}}>Hook It Up</h2>
        <Switch>
          <Route exact path="/" component={Users} />
          <Route path="/:id/details" component={SingleUser} />
        </Switch>
      </Router>
    );
  }

export default App;
