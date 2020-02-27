import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Albums from "./Albums";
import Comments from "./comments";
import Users from "./users";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <div id="buttons" style={{display: "flex", justifyContent: "center", margin: "20px", padding: "20px"}}>
            <Link to="/">
              <button type="button" className="btn btn-outline-dark">
                Go Home
              </button>
            </Link>

            <Link to="/users/">
              <button type="button" className="btn btn-outline-dark">
                View Users
              </button>
            </Link>

            <Link to="/comments">
              <button type="button" className="btn btn-outline-dark">
                View Comments
              </button>
            </Link>

            <Link to="/Albums">
              <button type="button" className="btn btn-outline-dark">
                View Albums
              </button>
            </Link>
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/users/" component={Users} />
            <Route path="/comments/" component={Comments} />
            <Route path="/Albums/" component={Albums} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
