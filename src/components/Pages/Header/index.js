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
    <div className="maindivheader ">
      <div>
        <Grid container spacing={2}>
          <Grid item xs={8} sm={4} md={3} lg={3} xl={3}>
            <Container>
              <h3>
                <Appheaderlogo />
              </h3>
            </Container>
          </Grid>
          <Grid item xs={4} sm={8} md={9} lg={9} xl={9}>
            <Container maxWidth="sm">
              <div className="desktopview">
                <div className="desktopheadercontact">
                  <div className="earphonesizeset">
                    <span className="iconsize">
                      <FontAwesomeIcon icon={faPhone} />
                    </span>
                  </div>
                  <div className="text">
                    <p
                      className={`animated-button ${
                        isHovered ? "hovered" : ""
                      }`}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      Call Anytime <br />
                      <a href="tel:9423841374" className="numberstyle">
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

              <div className="mobileVisible text-end">
                <div>
                  <MenuOutlined
                    onClick={showDrawer}
                    className="drawerbuttonmobile"
                  />
                </div>

                <Drawer placement="right" onClose={onClose} open={open}>
                  <div className="mobilehedermainallmenu">
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
