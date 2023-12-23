// Import necessary modules
import React, { useState } from "react";
import { Row, Col, Modal, Button } from "antd";
import "./opportunity.css";
import opportunityserverData from "../../ServerData/opportunityserverData";
// Component definition
const OPPORTUNITY = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="backgrounimagevideo">
      <div className="container ">
        {/* Ant Design Grid */}
        <Row gutter={[16, 16]}>
          {/* Replace the video URLs with your own */}
          <Col sm={24} md={24} lg={24} xl={24}>
            <div>
              <h6 className="devminds-tittlefirst">
                {opportunityserverData[0].maintexttitlecontent}
              </h6>
              <h3 className="devminds-videotitle">
                {opportunityserverData[0].maintitletext1} <br />
                {opportunityserverData[0].maintitletext2}
              </h3>
              <div className="devminds-contentHolder">
                <Button onClick={showModal} className="devminds-buttonstyle">
                  <i className="fas fa-play devminds-iconstylevideo"></i>
                </Button>
              </div>
              <Modal
                title={opportunityserverData[0].videotitle}
                open={isModalOpen}
                onCancel={handleCancel}
                footer={null}
                className="devmainds-modal"
                // style={{width:"100%"}}
              >
                <iframe
                  className="devmainds-iframevideo"
                  src={opportunityserverData[0].videoiframe}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </Modal>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default OPPORTUNITY;
