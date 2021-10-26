import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useRent from "../../hooks/useRent";
import "./Navigation.css";

const Navigation = () => {
  // Navbar using react- bootstrap
  const { user, logOut } = useRent();
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className="fs-1" href="/home">
          Online School
        </Navbar.Brand>
        <Nav className="ms-auto">
          <NavLink
            className="px-3 text-white text-decoration-none nav-item"
            to="/home"
          >
            Home
          </NavLink>
          <NavLink
            className="px-3 text-white text-decoration-none nav-item"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className="px-3 text-white text-decoration-none nav-item"
            to="/services"
          >
            Services
          </NavLink>
          <NavLink
            className="px-3 text-white text-decoration-none nav-item"
            to="/contact"
          >
            Contact us
          </NavLink>
          {user.email === "mbm.21.02.16@gmail.com" ? (
            <NavLink className="btn btn-info mx-3" to="/admin">
              Admin Panel
            </NavLink>
          ) : (
            ""
          )}
          {user.email ? (
            <Button onClick={logOut} variant="danger">
              Log Out
            </Button>
          ) : (
            <NavLink className="btn btn-success" to="/login">
              Login
            </NavLink>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
