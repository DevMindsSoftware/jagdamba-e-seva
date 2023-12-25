import { Carousel, Col, Row } from "antd";
import React from "react";
import dataslider from "../../ServerData/dataslider";
import { Button } from "antd";
import { ArrowRightOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import "./slider.css";
import { Container } from "@mui/material";
import { useRef } from "react";

const Slider = () => {
  const ref = useRef();
  const onChange = (currentSlide) => {
    // console.log(currentSlide);
    console.log("id", currentSlide);
  };
  return (
    <div className="devminds-carousellmaindiv" id="sliderid">
      <Carousel
        afterChange={onChange}
        ref={ref}
        className="devminds-slidermain"
        autoplay
      >
        {/* autoplay */}
        {dataslider.map((val, ind) => (
          <div className="devminds-custom-carousel-item">
            {/* <div className="" key={item.key}> */}
            <Row>
              <Col
                xl={{
                  // order: 1,
                  span: 24,
                }}
                xs={{
                  //   order: 2,
                  span: 24,
                }}
                sm={{
                  //   order: 2,
                  span: 24,
                }}
                md={{
                  //   order: 2,
                  span: 24,
                }}
                lg={{
                  //   order: 1,
                  span: 24,
                }}
              >
                <div className="devminds-contaitextmargin ">
                  <img src={val.src} alt="" className="devminds-imageslider" />
                  <Container>
                    {/* <p>{val.title}</p> */}
                    <div className="devminds-posiontext">
                      <h2 className="devminds-slidertext">
                        {val.title1}
                        <br />
                        <span className="devminds-spantext">
                          {val.title2}
                        </span>{" "}
                        <br />
                        {val.title3}
                      </h2>
                      <div class="devminds-textp">
                        <p className="devminds-ptagtext">{val.ptitle1}</p>
                        <br />
                        <p>{val.ptitle2}</p>
                      </div>
                    </div>
                  </Container>
                </div>
              </Col>
            </Row>
          </div>
        ))}
      </Carousel>
      <div>
        <Button
          className="devminds-carausal-arrow-back devminds-arrowmain"
          // shape="circle"
          onClick={() => {
            ref.current.prev();
          }}
          icon={<ArrowLeftOutlined />}
        ></Button>
        {/* <Button 
      
      onClick={()=>{
        ref.current.goTo(0)
      }}
      >Reset
      </Button> */}

        <Button
          className="devminds-carausal-arrow-next devminds-arrowmain"
          // shape="circle"
          icon={<ArrowRightOutlined />}
          onClick={() => {
            ref.current.next();
          }}
        ></Button>
      </div>
    </div>
  );
};

export default Slider;
