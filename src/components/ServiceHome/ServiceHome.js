import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ServiceHome.css";
const ServiceHome = (props) => {
  const { id, courseName, img, instructior, duration, price } = props.service;
  return (
    // Service for Home component
    <Card className="home-card">
      <Card.Img variant="top" src={img} className="card-img" />
      <Card.Body>
        <Card.Title className="text-center fw-bold py-4">
          {courseName}
        </Card.Title>
        <div className="d-flex justify-content-between">
          <Card.Text>Course Instructor: {instructior}</Card.Text>
          <Card.Text>Duration: {duration} Hrs</Card.Text>
        </div>
        <hr />
        <div className="d-flex justify-content-between">
          <Link to={`/singleservice/${id}`}>
            <Button variant="primary">View Course</Button>
          </Link>
          <p>Price: {price}TK</p>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ServiceHome;
