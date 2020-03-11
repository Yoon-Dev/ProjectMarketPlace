import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from '../home/Home'
import Sign from '../sign/Sign'
import SignUp from '../signup/SignUp'
import AppNavigation from '../appnavigation/AppNavigation'
import { Autorization } from '../../utils/Autorization.js';

function App() {
  return (
    <div id="App">
      <Autorization>
        <Router>
          <AppNavigation/>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/sign">
              <Sign />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
          </Switch>
        </Router>
      </Autorization>
    </div>
  );
}

export default App;
