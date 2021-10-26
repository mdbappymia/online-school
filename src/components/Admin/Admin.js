import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <Container>
      <div className="my-5 py-5 text-center">
        <Link to="/admin/insert">
          <Button>Insert Course</Button>
        </Link>
        <Link to="/admin/deleteORupdate">
          <Button className="ms-4">Delete OR Update a Course</Button>
        </Link>
      </div>
    </Container>
  );
};

export default Admin;
