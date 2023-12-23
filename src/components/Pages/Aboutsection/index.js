import React from "react";
import { Row, Col, Button } from "antd";
import iimagedotted from "../../../images/backroundottedimage.png";
import manimage from "../../../images/manimage.png";
import sing from "../../../images/jagdhamb-sing.png";
import aboutsData from "../../ServerData/aboutsData";
import "./aboutsection.css";

const AboutSection = () => {
  return (
    <div className="devminds-stylediv1">
      <div className="devminds-about-container">
        <Row gutter={[16, 16]}>
          <Col sm={24} md={24} lg={12} xl={12}>
            <div className="devminds-stylediv1_all">
              <div className="devminds-titlesec">
                <div className="devminds-sub-title">
                  <h6>{aboutsData[0].aboutmentitle}</h6>
                </div>
                <h2>
                  {aboutsData[0].p1} <span> {aboutsData[0].p2}</span> <br />{" "}
                  {aboutsData[0].p3} <br /> {aboutsData[0].p4}
                </h2>
              </div>
              <div className="devminds-stylediv1_all-text">
                <p>{aboutsData[0].mainparagraph}</p>
              </div>
              <div className="devminds-stylediv1_all-signature">
                <img src={aboutsData[0].signature} alt="#" />
              </div>
              <ul className="devminds-stylediv1_all-list">
                {aboutsData[0].listcontent.map((item) => (
                  <li key={item.key}>
                    <div className="devminds-icon-box">
                      <span className="icon-check" />
                    </div>
                    <div className="text-box">
                      <p>{item.item}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="devminds-stylediv1_all-btn">
                <Button type="" href="#" className="devminds-btncolorsametem">
                  <span className="devminds-txt">Report an Issues</span>
                </Button>
              </div>
            </div>
          </Col>

          <Col sm={24} md={24} lg={12} xl={12}>
            <div className="devminds-stylediv1__img">
              <div className="devminds-imgshape1 ">
                <img src={iimagedotted} alt="#" />
              </div>
              <div className="devminds-imgshape2">
                <img src={iimagedotted} alt="#" />
              </div>
              <div className="devminds-imgshape3">
                <div className="devminds-stylediv1__img">
                  <img src={aboutsData[0].meansrc} alt="#" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AboutSection;
