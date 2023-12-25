import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./testimonials.css";
import testimonialsData from "../../ServerData/testimonialsData";

const TESTIMONIALS = () => {
  const [rating, setRating] = useState(3);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleStarClick = (value) => {
    setRating(value);
  };
  return (
    <div className="devmindsdiv" id="पुनरावलोकने">
      <div className="container">
        <div className="devminds-content">
          <h6 className="devmainds-maintitlstylee">
            {testimonialsData[0].title1}
          </h6>
          <h3 className="devminds-titletextstyle">
            {testimonialsData[0].title2} <br />
            {testimonialsData[0].title3}
          </h3>
        </div>

        <Slider {...settings} className="devminnds-messageslider">
          {testimonialsData.map((testimonial, index) => (
            <div key={index}>
              <div className="devminds-mesagecardd">
                <div className="star-rating">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <span
                      key={value}
                      className={`star ${value <= rating ? "filled" : ""}`}
                      onClick={() => handleStarClick(value)}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <div className="devminds-messagearrow"></div>
                <h6 className="devminds-contenth6">{testimonial.content}</h6>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TESTIMONIALS;
