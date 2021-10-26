import React, { useEffect, useState } from "react";
import { Card, Container, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./DeleteOrUpdate.css";

const DeleteOrUpdate = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  const handleDelete = (id) => {
    console.log(id);
    const isDelete = window.confirm("Are you sure? Think again");
    if (isDelete) {
      fetch(`http://localhost:5000/courses/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.deletedCount === 1) {
            alert("Successfully Deleted");
            const remainingUser = courses.filter((course) => course._id !== id);
            setCourses(remainingUser);
          }
        });
    }
  };
  return (
    <Container>
      <Row>
        {courses.map((course) => (
          <Col lg={4} className="my-3">
            <Card className="du-card">
              <Card.Img
                className="du-cart-img"
                variant="top"
                src={course.img}
              />
              <Card.Body>
                <Card.Title className="fw-bold">{course.courseName}</Card.Title>
              </Card.Body>
              <div className="mx-4 my-3 d-flex justify-content-between">
                <Link to={`/admin/update/${course._id}`}>
                  <Button variant="primary">Update</Button>
                </Link>
                <Button
                  onClick={() => handleDelete(course._id)}
                  variant="danger"
                >
                  Delete
                </Button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default DeleteOrUpdate;
