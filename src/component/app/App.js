import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from '../home/Home'
import Sign from '../sign/Sign'
import AppNavigation from '../appnavigation/AppNavigation'

function App() {
  return (
        <Router>
          <AppNavigation/>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/sign">
              <Sign />
            </Route>
          </Switch>
        </Router>
  );
}

export default App;
