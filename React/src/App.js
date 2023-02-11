import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
            <div>
                hello world
            </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
