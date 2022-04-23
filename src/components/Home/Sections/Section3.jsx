import React from "react";
import image from "../../../assets/home/desktop/image-earphones-yx1.jpg";

function Section3() {
  return (
    <div className="section-3 d-flex justify-content-between">
      <div className="w-100">
        <img src={image} alt="" />
      </div>
      <div className="w-100 d-flex align-items-center">
        <div>
          <h1>YX1 EARPHONES</h1>
          <button>SEE PRODUCT</button>
        </div>
      </div>
    </div>
  );
}

export default Section3;
