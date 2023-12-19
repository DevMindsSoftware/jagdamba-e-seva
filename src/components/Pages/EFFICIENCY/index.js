import React from "react";
import "./efficiency.css";
import { Card, Row, Col } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import efficlencyData from "../../ServerData/efficlencyData";

const EFFICIENCY = () => {
  return (
    <>
      <div className="maindiveffincy">
        <div className="maintittle">
          <h6 className="title1">महाराष्ट्र व भारत सरकारचा उपक्रम</h6>

          <h2 className="title2">
            सर्व प्रकारच्या शासकीय दाखल्यांसाठी <br />
            लागणाऱ्या कागदपत्रांची यादी
            {/* City Municipality Services <br />
            And Departments */}
          </h2>
        </div>
      </div>
      <br />
      <br />
      <div className="container">
        <Row gutter={[16, 16]}>
          {efficlencyData.map((card, index) => (
            <Col key={index} xs={24} sm={24} md={12} lg={6}>
              <div className="devminds-carddiv">
                <div className="rounderundericon">
                  <FontAwesomeIcon icon={card.icons} />
                </div>
                {/* <br /> */}
                {/* <div className="tittlewidth"> */}
                <div>
                  <label className="contenttext">
                    <span className="tittlemain">{card.title}</span>
                    <br />
                    {card.content}
                  </label>
                </div>
                <br />
                <br />
                {/* <div className="arrowicon" >
                  <FontAwesomeIcon icon={card.icons} />
                </div> */}
                {/* </div> */}
                {/* <div className="maincards">
                <Card className="cardmain">
                  <div className="rounderundericon text-white">akki</div>
                  <label className="contenttext">{card.content}</label>
                  <div className="arrowicon">
                    <FontAwesomeIcon icon={card.icons}  />
                  </div>
                </Card>
              </div> */}
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default EFFICIENCY;
