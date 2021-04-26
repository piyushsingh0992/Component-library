import React from "react";
import "./App.css";
import Hero from "./hero/Hero.js";
import Documentation from "./documentation/Documentation.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact component={Hero} />
          <Route path="/Documentation" exact component={Documentation} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
