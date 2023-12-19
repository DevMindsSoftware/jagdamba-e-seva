import React, { useState } from "react";
import "./mainheaderone.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Header from "../../components/Pages/Header";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faClock } from "@fortawesome/free-solid-svg-icons";
const MainHeaderOne = () => {
  return (
    <header className="main-header main-header-one">
      {/* Main Header One Top */}
      <div className="Devmindsmain-first-header">
        <div className="main-container">
          <div className="Devmindsmain-inerheader">
            {/* Main Header One Top Left */}
            <div className="Devmindsmain-leftside-header">
              {/* Top Left Menu */}
              <ul className="Devmindsmain-leftsidemenu">
                <li>
                  <a href="#">Sachin</a>
                </li>
                <li>
                  <a href="#">Shivaji</a>
                </li>
                <li>
                  <a href="#">Jambhale</a>
                </li>
              </ul>

              {/* Top Left Social Links */}
              <ul className="Devmindsmain-leftheader">
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li className="mt-1">
                  <a href="#">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
              </ul>
            </div>

            {/* Main Header One Top Right */}
            <div className="DDevmindsmain-rightheader">
              <ul>
                <li>
                  <div className="icon">
                    <span className="mail-icon">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                  </div>
                  <div className="text">
                    <p>
                      <a href="mailto:sachinjambhale999.sj@gmail.com">sachinjambhale999.sj@gmail.com</a>
                    </p>
                  </div>
                </li>

                <li>
                  <div className="icon">
                    <span className="clock-icon">
                      <FontAwesomeIcon icon={faClock} />
                    </span>
                  </div>
                  <div className="text">
                    {/* <p>Open Hours: Mon - Fri 10.00 am - 7.00 pm</p> */}
                    <p>Open Hours: Mon - Fri 10.00 am - 7.00 pm Sat- 10:00 am- 02:00 pm</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End Main Header One Top */}

      <Header />
      {/* End Main Header One Bottom */}
    </header>
  );
};

export default MainHeaderOne;
