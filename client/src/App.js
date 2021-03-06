import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.scss';

// components
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => (
  <div className="App">
    <Router>
      <Route exact path='/' component={Home}/>
      <Switch>
        <Route exact path='/about' component={About}/>
        <Route exact path='/contact' component={Contact}/>
      </Switch>
    </Router>
  </div>
);

export default App;
