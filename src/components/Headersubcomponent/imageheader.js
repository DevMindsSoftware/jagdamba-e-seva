import React, { useState } from "react";
import "./hederpages.css";
const Appimageheader = ({ src, height, width }) => {
  const imageStyle = {
    height: `${height}px`, // Convert height to a string and add 'px' for proper styling
    width: `${width}px`,
  };

  return (
    <>
      <div className="text-end deskstopviewimages">
        <img
          className="headerimagessize mx-1"
          src={src}
          alt=""
          style={imageStyle}
        />
      </div>
    </>
  );
};

export default Appimageheader;
