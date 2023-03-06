import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../Header/Header";
import ServiceHome from "../ServiceHome/ServiceHome";
import "./Home.css";

const Home = () => {
  const [homeService, setHomeService] = useState([]);
  // load data from fakeDB
  useEffect(() => {
    fetch("https://online-school-a1pm.onrender.com/courses")
      .then((res) => res.json())
      .then((data) => setHomeService(data));
  }, []);
  const services = homeService.slice(0, 4);
  return (
    <>
      {/* header component  */}
      <Header></Header>
      <Container>
        {/* view main 4 services  */}
        <h1 className="text-center py-5 fw-bold title">Services</h1>
        <Row xs={1} md={2} className="m-2">
          {services.map((service = {}) => (
            <Col key={service.id} className="my-2">
              <ServiceHome service={service || []}></ServiceHome>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Home;
