import React from "react";
import Slider from "../Slider/index";
import Cardsmainsliderover from "../Cardsmainsliderover";
import AboutSection from "../Aboutsection";
import EFFICIENCY from "../EFFICIENCY";

const Home = () => {
  return (
    <div>
      <Slider />
      <Cardsmainsliderover />
      <AboutSection />
      <EFFICIENCY />
    </div>
  );
};

export default Home;
