import React from "react";
import Bitmap from "../../../assets/home/desktop/Bitmap.png";
import { Link } from "react-router-dom";

function Head() {
  return (
    <header className="d-flex align-items-center justify-content-center text-white">
      <div className="front-product  d-flex flex-row  justify-content-between align-items-center ">
        <div>
          <h4 className="new">NEW PRODUCT</h4>
          <h1>
            <span>XX99 MARK II </span> <span>HEADPHONES</span>
          </h1>
          <p>
            <span>Experience natural, lifelike audio and exceptional</span>
            <span>build quality made for the passionate music</span>
            <span>enthusiast.</span>
          </p>
          <Link to="/Audiophile-ws/headphones/XX99-MARK-II-HEADPHONES">
            <button className="button">SEE PRODUCT</button>
          </Link>
        </div>
        <div>
          <img src={Bitmap} alt="" />
        </div>
      </div>
    </header>
  );
}

export default Head;
