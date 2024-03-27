import React, { useEffect, useRef } from "react";
import { Row, Col, Button } from "antd";
import iimagedotted from "../../../images/backroundottedimage.png";
import aboutsData from "../../ServerData/aboutsData";
import "./aboutsection.css";
import Functiontext from "../../../Common/Functiontext";

const AboutSection = () => {
  // console.log("aboutsData", aboutsData);
  if (!aboutsData || aboutsData.length === 0) {
    return null;
  }

  const textArray = aboutsData.map((data) => data.aboutmentitle);
  // console.log("aboutsData-textArray", textArray);
  return (
    <div className="devminds-stylediv1" id="about">
      <div className="devminds-about-container">
        <Row gutter={[16, 16]}>
          <Col sm={24} md={24} lg={12} xl={12}>
            <div className="devminds-stylediv1_all">
              <div className="devminds-titlesec">
                <div className="devminds-sub-title">
                  {/* <marquee> */}{" "}
                  <h6 className="aboutmentitle">
                    {/* {aboutsData[0].aboutmentitle} */}
                    {textArray && textArray.length > 0 && (
                      <Functiontext textArray={textArray} />
                    )}
                  </h6>
                  {/* </marquee> */}
                </div>
                <h2>
                  <span> {aboutsData[0].p1}</span> {aboutsData[0].p2} <br />{" "}
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
              {/* <div className="devminds-stylediv1_all-btn">
                <Button type="" href="#" className="devminds-btncolorsametem">
                  <span className="devminds-txt">Check</span>
                </Button>
              </div> */}
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
