import React from "react";
import { Row, Col } from "antd";
import "./Cardsmainsliderover.css"; // Import your CSS file if needed
import backanimationimage from "../../../images/backroundottedimage.png";
import cardsdataData from "../../ServerData/cardsdataData";

const Cardsmainsliderover = () => {
  return (
    <div className="cardsection1">
      <div className="div1"></div>
      <div className="imagediv2">
        <img src={backanimationimage} alt="#" />
      </div>
      <div className="devmainds-container">
        <div className="cardcontent1">
          <Row gutter={[16, 16]}>
            {cardsdataData.map((cardsdata, index) => (
              <Col
                key={index}
                xs={24}
                sm={24}
                xl={6}
                lg={12}
                md={12}
                className="colmain"
                data-wow-delay={`${index * 100}ms`}
                data-wow-duration="1500ms"
              >
                <div className="cardbox_one">
                  <div className="cardbox_icons">
                    {/* <span className={cardsdata.icon}></span> */}
                    <img src={cardsdata.icon} alt="" />
                  </div>
                  <div className="cardbox_contenttext">
                    <h3 className="carbox_hover">
                      <a href="#">{cardsdata.title}</a>
                    </h3>
                    <p>{cardsdata.description}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Cardsmainsliderover;
