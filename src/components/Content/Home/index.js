import React from "react";
import Slider from "../Slider/index";
import Cardsmainsliderover from "../Cardsmainsliderover";
import AboutSection from "../Aboutsection";
import EFFICIENCY from "../EFFICIENCY";
import INSTANTSERVICES from "../INSTANTSERVICES";
import TESTIMONIALS from "../TESTIMONIALS";
import Instantservice2 from "../Instantservice2";
import OPPORTUNITY from "../OPPORTUNITY";
import Contact from "../Contact";

const Home = () => {
  return (
    <div>
      <Slider />
      <Cardsmainsliderover />
      <AboutSection />
      <EFFICIENCY />
      <INSTANTSERVICES />
      <TESTIMONIALS />
      <Instantservice2 />
      <OPPORTUNITY />
      <Contact />
    </div>
  );
};

export default Home;
