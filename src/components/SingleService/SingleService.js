import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./SingleService.css";

const SingleService = () => {
  const { id } = useParams();
  const [course, setCourse] = useState();
  // loda data from single api/fakeDB
  useEffect(() => {
    fetch(`/api/fakeDB${id}.json`)
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, [id]);
  const {
    img,
    courseName,
    trainerIMG,
    instructior,
    aboutTrainer,
    description,
    include,
    price,
    duration,
  } = course || {};
  const courseInclude = include || [];
  return (
    // Details single item
    <Container className="py-5">
      <img className="course-img" src={img} alt="" />
      <h2 className="text-center fw-bold">Course Name: {courseName}</h2>
      <p className="fw-bolder text-white">
        Price: <span className="text-warning">{price}TK</span>
      </p>
      <h4 className="fw-bolder">Duration: {duration}Hours</h4>
      <div className="trainer-part">
        <h3>{instructior}</h3>
        <div className="d-flex">
          <img src={trainerIMG} alt="" />

          <p>
            <small>About:{aboutTrainer}</small>
          </p>
        </div>
      </div>
      <h4>About The Course</h4>
      <p>{description}</p>
      <div>
        <h5>Major Focus on:</h5>
        {courseInclude.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </div>
      <br />
      <Link to="/enrolled">
        <Button varient="success">Enroll Now</Button>
      </Link>
      <Link to="/services">
        <Button className="ms-3" varient="success">
          Back
        </Button>
      </Link>
    </Container>
  );
};

export default SingleService;
