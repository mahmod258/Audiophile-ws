import React from "react";
import image from "../../../assets/home/desktop/image-speaker-zx9.png";
import { Link } from "react-router-dom";

function Section1() {
  return (
    <div className="section-1 d-flex justify-content-center align-items-center text-white">
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <h1>
          <span>ZX9</span> <span>SPEAKER</span>
        </h1>
        <p>
          <span>Upgrade to premium speakers that are</span>{" "}
          <span>phenomenally built to deliver truly remarkable</span> sound.
        </p>
        <Link to="/Audiophile-ws/speakers/ZX9-SPEAKER">
          <button className="button">SEE PRODUCT</button>
        </Link>
      </div>
    </div>
  );
}

export default Section1;
