import { Card, Carousel, Col, Row } from "antd";
import React from "react";
import dataslider from "../../ServerData/dataslider";
import { Button } from "antd";
import {
  LeftOutlined,
  RightOutlined,
  ArrowRightOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import "./slider.css";
import { Flip } from "react-reveal";
import { Container } from "@mui/material";
import { useRef } from "react";

const Slider = () => {
  const ref = useRef();
  const contentStyle = {
    // height: "80vh;",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  const onChange = (currentSlide) => {
    // console.log(currentSlide);
    console.log("id", currentSlide);
    // let id = currentSlide;
  };
  return (
    <div className="carousellmaindiv">
      <Carousel
        afterChange={onChange}
        ref={ref}
        className="slidermain"
        autoplay
      >
        {/* autoplay */}
        {dataslider.map((val, ind) => (
          <div className="custom-carousel-item">
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
                <div className="contaitextmargin ">
                  <img src={val.src} alt="" className="imageslider" />
                  <Container>
                    {/* <p>{val.title}</p> */}
                    <div className="posiontext">
                      <h2 className="slidertext">
                        {val.title1}
                        <br />
                        <span className="spantext">{val.title2}</span> <br />
                        {val.title3}
                      </h2>
                      <div class="textp">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit <br /> Turpis ridiculus tellus.
                        </p>
                      </div>
                    </div>
                    {/* <p>{val.title}</p>
                                                                                <p>{val.title}</p> */}
                  </Container>
                </div>
              </Col>
            </Row>
          </div>
        ))}
      </Carousel>
      <div>
        <Button
          className="carausal-arrow-back arrowmain"
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
          className="carausal-arrow-next arrowmain"
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
