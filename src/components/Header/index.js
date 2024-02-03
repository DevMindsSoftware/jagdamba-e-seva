import React, { useState } from "react";
import { Container, Grid } from "@mui/material";
import { Col, Drawer, Row } from "antd";
import { Link as RouterLink } from "react-router-dom";
import Appheaderlogo from "../Headersubcomponent/headerlogo";
import Appimageheader from "../Headersubcomponent/imageheader";
import DataHeader from "../ServerData/dataheader";
import "./header.css";
import { MenuOutlined } from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import Functiontext from "../../Common/Functiontext";
import { Button, Dropdown, Menu } from "antd";

const Header = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      let position = element.getBoundingClientRect();
      window.scrollTo(position.left, position.top + window.scrollY - 145);
    }
    onClose();
  };
  const [isHovered, setIsHovered] = useState(false);
  // console.log("DataHeader", DataHeader);
  if (!DataHeader || DataHeader.length === 0) {
    return null;
  }

  const textArray = DataHeader.map((data) => data.calltitle);
  // console.log("aboutsData-textArray", textArray);
  return (
    <div className="devminds-maindivheader ">
      <div>
        <Grid container spacing={2}>
          <Grid item xs={9} sm={5} md={5} lg={3} xl={3}>
            <Container>
              <h3>
                <Appheaderlogo />
              </h3>
            </Container>
          </Grid>
          <Grid item xs={3} sm={7} md={7} lg={9} xl={9}>
            <Container>
              <div className="devminds-desktopview">
                <div className="desktopheadercontact">
                  <div className="devminds-earphonesizeset">
                    <span className="devminds-iconsize">
                      <FontAwesomeIcon icon={faPhone} />
                    </span>
                  </div>
                  <div className="text">
                    <p
                      className={`devminds-animated-button ${
                        isHovered ? "hovered" : ""
                      }`}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      {/* {DataHeader[0].calltitle} */}
                      <div className="calllaanytime-text">
                        {textArray && textArray.length > 0 && (
                          <Functiontext textArray={textArray} />
                        )}
                      </div>

                      {/* <br /> */}
                      <div className="numbercall">
                        <a
                          href="tel:9423841374"
                          className="devminds-numberstyle"
                        >
                          {DataHeader[0].callnumber}
                        </a>
                      </div>
                    </p>
                  </div>
                </div>
                {DataHeader.map((val, ind) => (
                  <Appimageheader
                    key={ind}
                    src={val.src}
                    height={val.height}
                    width={val.width}
                  />
                ))}
              </div>

              <div className="devminds-mobileVisible text-end">
                <div>
                  <MenuOutlined
                    onClick={showDrawer}
                    className="devminds-drawerbuttonmobile"
                  />
                </div>

                <Drawer
                  placement="right"
                  onClose={onClose}
                  open={open}
                  className="devminds-maindrawer"
                  //  className={`devminds-maindrawer ${
                  //   open ? "devminds-drawer-open" : ""
                  // }`}
                >
                  <div className="devminds-mobilehedermainallmenu">
                    <label
                      className="mobilehedermenu"
                      onClick={() => handleClickScroll("sliderid")}
                    >
                      Home
                    </label>
                    {/* <label
                      className="mobilehedermenu"
                      onClick={() => handleClickScroll("cardhoveslider")}
                    >
                      cards
                    </label> */}
                    <label
                      className="mobilehedermenu"
                      onClick={() => handleClickScroll("about")}
                    >
                      About
                    </label>
                    <label
                      className="mobilehedermenu"
                      onClick={() => handleClickScroll("activity")}
                    >
                      activity
                    </label>
                    {/* <label
                      className="mobilehedermenu"
                      onClick={() => handleClickScroll("facilities")}
                    >
                      Other facilities
                    </label> */}
                    {/* <label
                      className="mobilehedermenu"
                      onClick={() => handleClickScroll("पुनरावलोकने")}
                    >
                      reviews
                    </label> */}
                    {/* <label
                      className="mobilehedermenu"
                      onClick={() => handleClickScroll("customer")}
                    >
                      customer
                    </label> */}
                    {/* <label
                      className="mobilehedermenu"
                      onClick={() => handleClickScroll("video")}
                    >
                      video
                    </label> */}
                    <label
                      className="mobilehedermenu"
                      onClick={() => handleClickScroll("contact")}
                    >
                      Contact
                    </label>
                  </div>
                </Drawer>
              </div>
            </Container>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Header;
