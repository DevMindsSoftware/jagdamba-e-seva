import { Col, Row } from "antd";
import React from "react";
import "./Instantservice2.css";
import Flip from "react-reveal/Flip";
import CountUp from "react-countup";
import serverinstantservicesData2 from "../../ServerData/Instantservice2Data";

const Instantservice2 = () => {
  return (
    <div className="devminds-insertbackgroun" id="customer">
      <div className="container devminds-secondcontent">
        <Row gutter={[16, 16]}>
          {/* Adjust the gutter as needed */}
          <Col xs={24} sm={24} md={24} lg={10} xl={10}>
            <h6 className="devmainds-maintitlstylee2">
              {serverinstantservicesData2[0].maintexttitle}
            </h6>
            <br />
            <h2 className="devminds-titletextstyle2">
              {serverinstantservicesData2[0].maintitle1}
              <br /> {serverinstantservicesData2[0].maintitle2}
            </h2>
          </Col>
          {serverinstantservicesData2[0].itemcount.map((countItem, index) => (
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={7}
              xl={7}
              key={`${countItem.key}-${index}`}
            >
              <Flip left>
                <h1>
                  <CountUp
                    start={countItem.startcount}
                    end={countItem.endtcount}
                    duration={countItem.durationcount}
                    className="devminds-countingtext"
                  />
                  <span className="devminds-counttitles">
                    {countItem.counttitle}
                  </span>
                  <br />
                  <span className="devminds-counttitles">
                    {countItem.countdecription1}
                  </span>
                  {/* <br /> */}
                  <span className="devminds-counttitles">
                    {countItem.countdecription2}
                  </span>
                </h1>
              </Flip>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Instantservice2;
