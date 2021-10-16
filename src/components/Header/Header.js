import { faSchool } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <Container>
        <Row>
          {/* left section  */}
          <Col>
            <div className="py-5 mx-auto">
              <h1 className="header-title">Online school</h1>
              <div className="school-icon">
                <FontAwesomeIcon icon={faSchool}></FontAwesomeIcon>
              </div>
            </div>
          </Col>
          {/* right section  */}
          <Col className="py-5">
            <h2 className="m-auto text-center bg-warning rounded text-primary fw-bold px-5 py-3">
              Our facility
            </h2>
            <div className="fs-4 mx-2">
              <li className="facility-item">Job Preparation</li>
              <li className="facility-item">
                To be a profressional software Engineer
              </li>
              <li className="facility-item">To be a Web developer</li>
              <li className="facility-item">Android App developer</li>
              <li className="facility-item">Wordpress developer</li>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
