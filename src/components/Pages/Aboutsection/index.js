import React from "react";
import { Row, Col, Button } from "antd";
import iimagedotted from "../../../images/backroundottedimage.png";
import manimage from "../../../images/manimage.png";
import sing from "../../../images/jagdhamb-sing.png"
import "./aboutsection.css";

const AboutSection = () => {
  return (
    <div className="stylediv1">
      <div className="about-container">
        <Row gutter={[16, 16]}>
          <Col sm={24} md={24} lg={12} xl={12}>
            <div className="stylediv1_all">
              <div className="sec-title">
                <div className="sub-title">
                  <h6>About Leader</h6>
                </div>
                <h2>
                  Meet <span>Ideological</span> <br /> Leader for Youth <br />{" "}
                  Generation
                </h2>
              </div>
              <div className="stylediv1_all-text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  felis, suscipit mi urna nulla at tincidunt feugiat vulputate.
                  Ante facilisis face pellentesque quis egestas metus, mauris
                  dictum sollicitudin hendrerit quis in magna cras adipiscing
                  posuere augue imperdiet arcu.
                </p>
              </div>
              <div className="stylediv1_all-signature">
                <img
                  src={sing}
                  alt="#"
                />
              </div>
              <ul className="stylediv1_all-list">
                <li>
                  <div className="icon-box">
                    <span className="icon-check" />
                  </div>
                  <div className="text-box">
                    <p>Improving all types of opportunities</p>
                  </div>
                </li>
                <li>
                  <div className="icon-box">
                    <span className="icon-check" />
                  </div>
                  <div className="text-box">
                    <p>Quick solutions for daily problems</p>
                  </div>
                </li>
                <li>
                  <div className="icon-box">
                    <span className="icon-check" />
                  </div>
                  <div className="text-box">
                    <p>Community that grows larger</p>
                  </div>
                </li>
              </ul>
              <div className="stylediv1_all-btn">
                <Button type="" href="#" className="btncolorsametem">
                  <span className="txt">Report an Issues</span>
                </Button>
              </div>
            </div>
          </Col>

          <Col sm={24} md={24} lg={12} xl={12}>
            <div className="stylediv1__img">
              <div className="imgshape1 ">
                <img src={iimagedotted} alt="#" />
              </div>
              <div className="imgshape2">
                <img src={iimagedotted} alt="#" />
              </div>
              <div className="imgshape3">
                <div className="stylediv1__img">
                  <img src={manimage} alt="#" />
                </div>
              </div>

              {/* <div className="textvalue">
                <div className="yesrtext">
                  <h3>
                    Years Of <br /> Exps
                  </h3>
                </div>
              </div>
              <div className="stylediv1_imagdevminds">
                <h3>Jordon Cooper</h3>
                <p>City Mayor</p>
              </div> */}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AboutSection;
