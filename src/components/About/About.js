import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Carousel, Container } from "react-bootstrap";
import Rating from "react-rating";
import Counter from "./../Counter/Counter";
import "./About.css";

const About = () => {
  // Load data for reviews
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("/api/studentDB.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <Container>
      <h1 className="text-center my-5 fw-bolder">About Us</h1>
      <div>
        <h3 className="fw-bold">What is Online Course</h3>

        <ol>
          <li>
            A set of instructional experiences using the digital network for
            interaction, learning and dialogue. An online course does not
            require any face-to-face meetings in a physical location. Similar
            courses such as web-centric courses (also called hybrid or blended
            courses) are similar to online courses, but require regular
            scheduled face-to-face classes or meetings. Learn more in: Designing
            Online Learning Programs
          </li>
          <li>
            An online course is the delivery of a series of lessons on a web
            browser or mobile device, which can be accessed anytime and
            anyplace. It is designed as an online environment for convenient
            learning asynchronously. Learn more in: Mobile Technologies Course
            Design: The Use of ICT Skills, Attitudes, and Self-Efficacy in EFL
            Instructors
          </li>
          <li>
            A course that is conducted completely online, whether synchronous or
            asynchronous. This type of course does not provide for any in-person
            teaching or learning with other students or faculty. Learn more in:
            Critical Success Factors and Methods to Increase Persistence for
            Non-Traditional Online Students
          </li>
          <li>
            A set of instructional experiences using the digital network for
            interaction, learning and dialogue. An online course does not
            require any face-to-face meetings in a physical location. Similar
            courses such as web-centric courses (also called hybrid or blended
            courses) are similar to online courses, but require regular
            scheduled face-to-face classes or meetings. Learn more in: Design
            Levels for Distance and Online Learning
          </li>
          <li>
            An online course is a course that is focused on use of information
            and communications technology for learning. Learn more in: Raising
            Motivation to Achieve Collaboration in Online Courses
          </li>
          <li>
            A class taught to students via Internet or in an online learning
            environment. Students access class objectives, lecture notes,
            instructional materials, and exams via Internet. Students and
            instructor interact online via e-mail, chat rooms, and threaded
            discussions. Also known as Web-based classroom, cyber-classrooms,
            e-learning, virtual education, and distance learning. Once
            considered a fad, online learning has developed into a
            “‘just-in-time’ hybrid of teaching any time, any place” (Crews,
            2003). Learn more in: Successful Strategies in Online Courses.
          </li>
          <li>
            This is when course instruction and interaction between instructor
            and students is primarily online. Learn more in: Fair Use,
            Copyright, and Academic Integrity in an Online Academic Environment
          </li>
        </ol>
      </div>
      <h1 className="text-center">
        <p>Total Student</p>
        <Counter></Counter>
      </h1>
      <h2 className="text-center my-5 fw-bold">Student Rating</h2>
      {/* Student review carousel  */}
      <Carousel className="w-75 m-auto my-5">
        {reviews.map((review) => (
          <Carousel.Item key={review.id}>
            <img
              className="d-block w-100 slide-image"
              src="https://ak.picdn.net/shutterstock/videos/5921018/thumb/1.jpg"
              alt="First slide"
            />

            <Carousel.Caption>
              <p className="text-center">
                Rating: <span> </span>
                <Rating
                  placeholderRating={review.star}
                  emptySymbol={
                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                  }
                  placeholderSymbol={
                    <FontAwesomeIcon
                      style={{ color: "goldenrod" }}
                      icon={faStar}
                    ></FontAwesomeIcon>
                  }
                  fullSymbol={<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>}
                />
              </p>
              <h3>{review.name}</h3>
              <p>{review.review}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default About;
