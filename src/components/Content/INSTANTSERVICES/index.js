import React from "react";
import { Col, Row } from "antd";
import "./instantservices.css";
import instantservicesData from "../../ServerData/instantservice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Functiontext from "../../../Common/Functiontext";

const INSTANTSERVICES = () => {
  // console.log("instantservicesData", instantservicesData);
  if (!instantservicesData) {
    return null;
  }

  const textArray = [instantservicesData.maintitle1]; // Wrap in an array if it's a single value
  // console.log("instantservicesData-textArray", textArray);
  return (
    <div className="container devminds-maindive" id="facilities">
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <div className="devminds-image-container">
            <img src={instantservicesData.src} alt="BigCo Inc. logo" />
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <div className="container mt-2">
            <h6 className="devmainds-maintitlstylee-instant">
              {/* {instantservicesData.maintitle1} */}
              {textArray && textArray.length > 0 && (
                <Functiontext textArray={textArray} />
              )}
            </h6>
            <br />
            <h2 className="devminds-titletextstyle">
              {instantservicesData.titletext}
            </h2>
            <br />
            <p className="paragraphtext-devminds">
              {instantservicesData.packagetext}
            </p>
            <br />

            <div className="devminds-text-container container">
              {/* <h2>{instantservicesData.contenttitle}</h2>
              <p>{instantservicesData.contenttext}</p> */}
              <ul className="devminds-lisstylline">
                {instantservicesData.Item.map((item) => (
                  <li key={item.key} className="ullist-devminds">
                    <Row>
                      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <FontAwesomeIcon
                          icon={item.iconcheck}
                          className="devminds-checkicon mx-3"
                        />
                        <span className="devminds-itemtext">{item.Item}</span>
                      </Col>
                      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <FontAwesomeIcon
                          icon={item.iconcheck}
                          className="devminds-checkicon mx-3"
                        />

                        <span className="devminds-itemtext">
                          {item.Itemcolum2}
                        </span>
                      </Col>
                    </Row>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default INSTANTSERVICES;
