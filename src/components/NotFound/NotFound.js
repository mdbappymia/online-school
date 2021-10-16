import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      {/* NotFound pase using image on internet. It might be remove owner. If it remove the oner, that image will be not shown */}
      <img
        className="d-block m-auto my-5"
        src="https://freefrontend.com/assets/img/html-funny-404-pages/HTML-404-Crying-Baby-Page.gif"
        alt=""
      />
      <p className="text-center fs-2">
        <Link to="/home">Back to home</Link>
      </p>
    </div>
  );
};

export default NotFound;
