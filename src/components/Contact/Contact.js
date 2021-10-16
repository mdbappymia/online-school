import React from "react";
import { Container, Form, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <Container>
      <h1 className="text-center fw-bolder text-white my-5">Contact US</h1>
      {/* Adding contact form from react-bootstrap */}
      <Form className="my-4">
        <div className="d-flex">
          <Form.Group
            className="mb-3 me-3 w-50 "
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label>First Name:</Form.Label>
            <Form.Control type="Text" placeholder="" />
          </Form.Group>
          <Form.Group
            className="mb-3 w-50 "
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label>Last Name:</Form.Label>
            <Form.Control type="email" placeholder="" />
          </Form.Group>
        </div>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button varient="primary">Submit</Button>
      </Form>
      <h1 className="text-center fw-bolder text-white my-5">Our Location</h1>
      <div className="my-5">
        {/* Adding map from google map  */}
        {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.82239127668!2d90.2792372758085!3d23.78088745685752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1633327508479!5m2!1sen!2sbd"
          style={{
            border: 0,
            width: "90%",
            height: "400px",
            display: "block",
            margin: "auto",
          }}
        ></iframe>
      </div>
    </Container>
  );
};

export default Contact;
