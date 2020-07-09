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
import Drawer from './components/Drawer'
import Products from './components/Products'
import { Box } from "@material-ui/core";
import Footer from "./components/Footer";
import Customer from "./components/Customers";
import Blog from "./components/Blog";

export default function App() {
  return (
    <Router>
      <Navbar/>
      <Box display={{ md: 'block', lg: 'none' }} ><Drawer/></Box>
      <Box display={{ xs: 'none', sm: 'block', md: 'none' }}><br/><br/><br/></Box>
      <Switch>
       
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" exact component={About}></Route>
        <Route path="/contact" exact component={Contact}></Route>
        <Route path="/products" exact component={Products}></Route>
        <Route path="/customer" exact component={Customer}></Route>
        <Route path="/blogs" exact component={Blog}></Route>
      </Switch>
    <Footer/>
    </Router>
  );
}

