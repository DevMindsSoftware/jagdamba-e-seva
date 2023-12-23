import React, { useState } from "react";
import { Container, Grid } from "@mui/material";
import { Button, Drawer } from "antd";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import Appheaderlogo from "../../Headerpages/headerlogo";
import Appimageheader from "../../Headerpages/imageheader";
import DataHeader from "../../ServerData/dataheader";
import "./header.css";
import { MenuOutlined } from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

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
                      Call Anytime <br />
                      <a href="tel:9423841374" className="devminds-numberstyle">
                        9423841374
                      </a>
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

                <Drawer placement="right" onClose={onClose} open={open} className="devminds-maindrawer">
                  <div className="devminds-mobilehedermainallmenu">
                    <RouterLink
                      to="/"
                      className="mobilehedermenu"
                      onClick={onClose}
                    >
                      Home
                    </RouterLink>
                    <label
                      className="mobilehedermenu"
                      onClick={() => handleClickScroll("#about")}
                    >
                      About
                    </label>
                    <RouterLink
                      to="/photogallery"
                      className="text-dark mobilehedermenu"
                      onClick={onClose}
                    >
                      Photos
                    </RouterLink>
                    <label
                      className="mobilehedermenu"
                      onClick={() => handleClickScroll("#Events")}
                    >
                      Events
                    </label>
                    <label
                      className="mobilehedermenu"
                      onClick={() => handleClickScroll("#contact")}
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
