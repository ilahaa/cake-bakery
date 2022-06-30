import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from '../components/Home';
import OurCakes from '../components/OurCakes';
import Menu from "../components/Menu"
import AboutUs from "../components/AboutUs"
import Footer from "../components/Footer";
import Nav from "../components/Nav";

class AppRouters extends Component {
  render() {
    return (
      <BrowserRouter>
        <Footer />
      <Nav />
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/ourcakes" component={OurCakes}></Route>
            <Route path="/menu" component={Menu}></Route>
            <Route path="/aboutus" component={AboutUs}></Route>
            {/* <Route component={NotFoundPage}></Route> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default AppRouters;