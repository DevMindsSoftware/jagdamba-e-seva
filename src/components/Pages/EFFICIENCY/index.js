import React from "react";
import "./efficiency.css";
import { Card, Row, Col } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import efficlencyData from "../../ServerData/efficlencyData";

const EFFICIENCY = () => {
  console.log("efficlencyData", efficlencyData);
  return (
    <>
      <div className="devminds-maindiveffincy">
        <div className="devminds-maintittle">
          <h6 className="devminds-title1">{efficlencyData[0].maintitle}</h6>

          <h2 className="devminds-title2">
            {efficlencyData[0].pareghrap1} <br />
            {efficlencyData[0].pareghrap2}
            {/* City Municipality Services <br />
            And Departments */}
          </h2>
        </div>
      </div>
      <br />
      <br />
      <div className="container mb-5">
        <Row gutter={[16, 16]}>
          {efficlencyData.map((card, index) => (
            <Col key={index} xs={24} sm={24} md={12} lg={8} xl={6}>
              <div className="devminds-carddiv">
                <div className="devminds-rounderundericon">
                  <FontAwesomeIcon icon={card.icons} />
                </div>
                {/* <br /> */}
                {/* <div className="tittlewidth"> */}
                <div>
                  <label className="devminds-contenttext">
                    <span className="devminds-tittlemain">{card.title}</span>
                    <br />
                    {card.content}
                  </label>
                </div>
                <br />
                <br />
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default EFFICIENCY;
