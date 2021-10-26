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
import AllProvider from "./contexts/AllProvider";
import Login from "./components/Login/Login";
import PrivetRoute from "./components/PrivetRoute/PrivetRoute";
import AdminRoute from "./components/AdminRoute/AdminRoute";
import Admin from "./components/Admin/Admin";
import InsertCourse from "./components/Admin/InsertCourse/InsertCourse";
import DeleteOrUpdate from "./components/Admin/DeleteOrUpdate/DeleteOrUpdate";
import Update from "./components/Admin/Update/Update";

const App = () => {
  return (
    <AllProvider>
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
          <PrivetRoute path="/singleservice/:_id">
            <SingleService></SingleService>
          </PrivetRoute>
          <PrivetRoute path="/enrolled">
            <Enrolled></Enrolled>
          </PrivetRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <AdminRoute exact path="/admin">
            <Admin></Admin>
          </AdminRoute>
          <AdminRoute path="/admin/insert">
            <InsertCourse></InsertCourse>
          </AdminRoute>
          <AdminRoute path="/admin/deleteORupdate">
            <DeleteOrUpdate></DeleteOrUpdate>
          </AdminRoute>
          <AdminRoute path="/admin/update/:id">
            <Update></Update>
          </AdminRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>

        <Footer></Footer>
      </Router>
    </AllProvider>
  );
};

export default App;
