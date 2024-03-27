import React from "react";
import Functiontext from "../../../Common/Functiontext";
import { Button, Col, Collapse, Menu, Row } from "antd";
import servicesData from "../../ServerData/engservicesData";
import "./Documentservices.css";

const { Panel } = Collapse;

const Documentservices = () => {
  // console.log("aboutsData", servicesData);
  if (!servicesData || servicesData.length === 0) {
    return null;
  }

  const textArray = servicesData.map((data) => data.servicestitle);
  const textArray1 = servicesData.map((data) => data.maintitle);
  // console.log("servicesData", textArray);
  return (
    <>
      <div className="container">
        <div className="devminds-services-title">
          <h6 className="devminds-servicestitle">
            {textArray && textArray.length > 0 && (
              <Functiontext textArray={textArray} />
            )}
          </h6>
        </div>

        <div className="mt-3 mb-5">
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <Collapse  className="devminds-collapestyle" >
                {servicesData.map((service) => (
                  <Panel
                    // header={service?.maintitle}
                    header={textArray1 && textArray1.length > 0 && (
                      <Functiontext textArray={textArray1} />
                    )}
                    key={service?.key}
                    className="maintitletextstyle"
                  >
                    <Menu>
                      <Menu.ItemGroup
                        title={service?.servicestitle}
                        className="devminds-titleservicepersonaltext"
                      >
                        <Menu.Item
                          key={service?.key + "_1"}
                          className="devminds-documentiteams"
                        >
                          {service?.rentagrementtitle}
                        </Menu.Item>
                        <Menu.Item
                          key={service?.key + "_2"}
                          className="devminds-documentiteams"
                        >
                          {service?.Noticettitle}
                        </Menu.Item>
                        <Row gutter={[16, 16]}>
                          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <Menu.ItemGroup
                              key={service.key + "_3"}
                              title={
                                service.servicePersonalDocument[0].personaltext
                              }
                              className="devminds-titleservicepersonaltext"
                            >
                              <Row gutter={[8, 8]}>
                                {service.servicePersonalDocument[0].personaldocumentList.map(
                                  (document, index) => (
                                    <Col
                                      key={index}
                                      xs={24}
                                      sm={24}
                                      md={12}
                                      lg={6}
                                      xl={6}
                                    >
                                      <Menu.Item
                                        key={service.key + "_3_" + index}
                                        className="devminds-documentiteams"
                                      >
                                        {document}
                                      </Menu.Item>
                                    </Col>
                                  )
                                )}
                              </Row>
                            </Menu.ItemGroup>
                          </Col>
                          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <Menu.ItemGroup
                              key={service.key + "_4"}
                              title={
                                service.servicePersonalDocument[1].Propertytext
                              }
                              className="devminds-titleservicepersonaltext"
                            >
                              <Row gutter={[8, 8]}>
                                {service.servicePersonalDocument[1].PropertydocumentList.map(
                                  (document, index) => (
                                    <Col
                                      key={index}
                                      xs={24}
                                      sm={24}
                                      md={12}
                                      lg={6}
                                      xl={6}
                                    >
                                      <Menu.Item
                                        key={service.key + "_4_" + index}
                                        className="devminds-documentiteams"
                                      >
                                        {document}
                                      </Menu.Item>
                                    </Col>
                                  )
                                )}
                              </Row>
                            </Menu.ItemGroup>
                          </Col>

                          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <Menu.ItemGroup
                              key={service.key + "_5"}
                              title={
                                service.servicePersonalDocument[2].Loantext
                              }
                              className="devminds-titleservicepersonaltext"
                            >
                              <Row gutter={[8, 8]}>
                                {service.servicePersonalDocument[2].LoandocumentList.map(
                                  (document, index) => (
                                    <Col
                                      key={index}
                                      xs={24}
                                      sm={24}
                                      md={12}
                                      lg={6}
                                      xl={6}
                                    >
                                      <Menu.Item
                                        key={service.key + "_5_" + index}
                                        className="devminds-documentiteams"
                                      >
                                        {document}
                                      </Menu.Item>
                                    </Col>
                                  )
                                )}
                              </Row>
                            </Menu.ItemGroup>
                          </Col>

                          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <Menu.ItemGroup
                              key={service.key + "_6"}
                              title={
                                service.servicePersonalDocument[3].Businesstext
                              }
                              className="devminds-titleservicepersonaltext"
                            >
                              <Row gutter={[8, 8]}>
                                {service.servicePersonalDocument[3].BusinessdocumentList.map(
                                  (document, index) => (
                                    <Col
                                      key={index}
                                      xs={24}
                                      sm={24}
                                      md={12}
                                      lg={6}
                                      xl={6}
                                    >
                                      <Menu.Item
                                        key={service.key + "_6_" + index}
                                        className="devminds-documentiteams"
                                      >
                                        {document}
                                      </Menu.Item>
                                    </Col>
                                  )
                                )}
                              </Row>
                            </Menu.ItemGroup>
                          </Col>

                          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <Menu.ItemGroup
                              key={service.key + "_7"}
                              title={
                                service.servicePersonalDocument[4].Othertext
                              }
                              className="devminds-titleservicepersonaltext"
                            >
                              <Row gutter={[8, 8]}>
                                {service.servicePersonalDocument[4].OtherdocumentList.map(
                                  (document, index) => (
                                    <Col
                                      key={index}
                                      xs={24}
                                      sm={24}
                                      md={12}
                                      lg={6}
                                      xl={6}
                                    >
                                      <Menu.Item
                                        key={service.key + "_7_" + index}
                                        className="devminds-documentiteams"
                                      >
                                        {document}
                                      </Menu.Item>
                                    </Col>
                                  )
                                )}
                              </Row>
                            </Menu.ItemGroup>
                          </Col>
                        </Row>
                      </Menu.ItemGroup>
                    </Menu>
                  </Panel>
                ))}
              </Collapse>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Documentservices;
