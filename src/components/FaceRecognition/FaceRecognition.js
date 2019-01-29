import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ img_url, box }) => {
  return (
    <div className="main">
      <div className="face_detect_box">
        <img
          id="input_image"
          alt="img"
          src={img_url}
          width="500px"
          height="auto"
        />
        <div
          className="bounding-box"
          style={{
            top: box.top_row,
            right: box.right_col,
            bottom: box.bottom_row,
            left: box.left_col
          }}
        />
      </div>
    </div>
  );
};

export default FaceRecognition;
