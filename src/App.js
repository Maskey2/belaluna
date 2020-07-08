import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home'
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";

export default function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
       
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" exact component={About}></Route>
        <Route path="/contact" exact component={Contact}></Route>
        
      </Switch>
    
    </Router>
  );
}

