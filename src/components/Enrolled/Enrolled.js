import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import image from "./../../resourses/giphy.gif";

const Enrolled = () => {
  return (
    // View thumps up image
    <div className="text-center py-5">
      <img src={image} alt="" className="d-block mx-auto my-3" />
      <Link to="/home">
        <Button>Back to Home</Button>
      </Link>
    </div>
  );
};

export default Enrolled;
