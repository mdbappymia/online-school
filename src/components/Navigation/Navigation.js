import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  // Navbar using react- bootstrap
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
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
