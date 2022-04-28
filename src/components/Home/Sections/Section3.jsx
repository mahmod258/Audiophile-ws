import React from "react";
import image from "../../../assets/home/desktop/image-earphones-yx1.jpg";
import { Link } from "react-router-dom";

function Section3() {
  return (
    <div className="section-3 d-flex justify-content-between">
      <div className="w-100">
        <img src={image} alt="" />
      </div>
      <div className="w-100 d-flex align-items-center">
        <div>
          <h1>YX1 EARPHONES</h1>
          <Link to="/Audiophile-ws/earphones/YX1-WIRELESS-EARPHONES">
            <button className="button">SEE PRODUCT</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Section3;
