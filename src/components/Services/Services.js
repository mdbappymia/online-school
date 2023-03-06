import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  // load the total data on the fakeDB
  useEffect(() => {
    fetch("https://online-school-a1pm.onrender.com/courses")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="text-center">
      <h1 className="fw-bolder text-warning py-5">Our Services</h1>
      {/* Service Section  */}
      <Row>
        {services.map((service = {}) => (
          <Col md="6">
            <Service key={service._id} service={service}></Service>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Services;
