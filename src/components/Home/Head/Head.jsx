import React from "react";
import Bitmap from "../../../assets/home/desktop/Bitmap.png";

function Head() {
  return (
    <header className="d-flex align-items-center justify-content-center text-white">
      <div className="front-product container-md d-flex flex-row  justify-content-between align-items-center ">
        <div>
          <h4>
            NEW <span>PRODUCT</span>
          </h4>
          <h1>
            <span>XX99 MARK II </span> <span>HEADPHONES</span>
          </h1>
          <p>
            <span>Experience natural, lifelike audio and exceptional</span>
            <span>build quality made for the passionate music</span>
            <span>enthusiast.</span>
          </p>
          <button>SEE PRODUCT</button>
        </div>
        <div>
          <img src={Bitmap} alt="" />
        </div>
      </div>
    </header>
  );
}

export default Head;
