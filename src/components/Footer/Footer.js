import {
  faFacebook,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="bg-dark py-5">
      <Container>
        <div className="d-flex justify-content-between">
          <div>
            <h3 className=" text-secondary">Address</h3>
            <div className="text-secondary">
              <p>Email: online@school.com</p>
              <p>Phone: +8801752432222</p>
            </div>
          </div>
          <div className=" text-light">
            {/* all social link  */}
            <h4>Our social Link</h4>
            <div className="text-info">
              <FontAwesomeIcon
                className="social-icon-footer"
                icon={faFacebook}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                className="social-icon-footer"
                icon={faLinkedin}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                className="social-icon-footer"
                icon={faTwitter}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                className="social-icon-footer"
                icon={faYoutube}
              ></FontAwesomeIcon>
            </div>
          </div>
        </div>
        <p className="text-center text-secondary">
          Copywrignt &copy; 2021 all right receved
        </p>
      </Container>
    </div>
  );
};

export default Footer;
