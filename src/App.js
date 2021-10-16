import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Enrolled from "./components/Enrolled/Enrolled";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import Services from "./components/Services/Services";
import SingleService from "./components/SingleService/SingleService";
import NotFound from "./components/NotFound/NotFound";

const App = () => {
  return (
    <Router>
      <Navigation></Navigation>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/services">
          <Services></Services>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route path="/singleservice/:id">
          <SingleService></SingleService>
        </Route>
        <Route path="/enrolled">
          <Enrolled></Enrolled>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>

      <Footer></Footer>
    </Router>
  );
};

export default App;
