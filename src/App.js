import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./Common.css";
import Header from "./components/Pages/Header/index";
import Home from "./components/Pages/Home/index";
import Slider from "./components/Pages/Slider/index";
import Footer from "./components/Pages/Footer/index";
import Scrollingheader from "./components/Scrollingheader/index";
import Mainheaderone from "./components/Mainheaderone/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "antd";
function App() {
  const [open, setOpen] = useState(false);
  const [bgColor, setBgColor] = useState(false);
  const listenScrollEvent = (e) => {
    if (window.scrollY > 200) {
      setBgColor(true);
    } else {
      setBgColor(false);
    }
  };
  useEffect(() => {
    listenScrollEvent();
    window.addEventListener("scroll", listenScrollEvent);
  });
  const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      let position = element.getBoundingClientRect();
      // scrolls to 20px above element
      // window.scrollTo(position.left, position.top + window.scrollY - 70);
      window.scrollTo(position.left, position.top + window.scrollY - 120);
    }
  };
  return (
    <div className="">
      {/* <Header /> */}
      <Scrollingheader />
      <Mainheaderone />
      <Home />

      <Routes>{/* <Route path="/" element={<Home />} /> */}</Routes>
      <div className="whatsappmaindiv">
        <div className="bottom-whatsapp">
          <a href="https://wa.me/9423841374" target="_blank">
            <FontAwesomeIcon icon={faWhatsapp} className="whatsappicon" />
            <i
              // className="fa fa-whatsapp text-white"
              style={{ fontSize: "25px" }}
            ></i>
          </a>
          <span class="on-hover-text">
            <div className="arrow"></div>
            <a href="https://wa.me/9423841374" target="_blank">
              Contact us
            </a>
          </span>
          {/* <Link to="#"> */}

          {/* </Link> */}
        </div>
      </div>
      <div
        onClick={() => {
          handleClickScroll("sliderid");
          setOpen(false);
        }}
        // className="devminds-uperarrowscroll"
      >
        {/* <FontAwesomeIcon icon={faArrowUp} /> */}
        <Button
          className="devminds-uperarrowscroll"
          type=""
          shape="circle"
          icon={<FontAwesomeIcon icon={faArrowUp} />}
        />
      </div>

      <Footer />
    </div>
  );
}

export default App;
