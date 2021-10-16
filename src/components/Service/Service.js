import React from "react";
import { Card, Button, Container } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "./Service.css";

const Service = (props) => {
  const history = useHistory();
  const { courseName, img, instructior, duration, price, description, id } =
    props.service;
  // enroll button route function
  const handleEnroll = () => {
    history.push("/enrolled");
  };
  return (
    // Single service for Services component
    <Container>
      <Card className="pb-5 mb-4 service-card">
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
            <Button onClick={handleEnroll} variant="warning">
              Enroll Now
            </Button>
            <p>Price: {price}TK</p>
          </div>
          <div>
            <h4 className="fw-bold">About This Course:</h4>
            <p className="text-start">{description}</p>
          </div>
        </Card.Body>
        <Link to={`/singleservice/${id}`}>
          <Button variant="primary">View Course</Button>
        </Link>
      </Card>
    </Container>
  );
};

export default Service;
