import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./Common.css";
import Header from "./components/Pages/Header/index";
import Home from "./components/Pages/Home/index";
import Slider from "./components/Pages/Slider/index";
import Footer from "./components/Pages/Footer/index";
import Scrollingheader from "./components/Scrollingheader/index";
import Mainheaderone from "./components/Mainheaderone/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
function App() {
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
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default App;
