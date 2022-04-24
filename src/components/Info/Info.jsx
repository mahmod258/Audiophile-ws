import React from "react";
import image from "../../assets/shared/desktop/image-best-gear.jpg";
import image2 from "../../assets/shared/tablet/image-best-gear.jpg";
function Info() {
  return (
    <div className="info container-md d-flex align-items-center">
      <div className="w-100">
        <h1>
          <span>BRINGING YOU THE</span>
          <span>
            <span>BEST</span> AUDIO GEAR
          </span>
        </h1>
        <h1 className="d-none">
          <span>
            BRINGING YOU THE <span>BEST</span>
          </span>
          <span>AUDIO GEAR</span>
        </h1>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <div>
        <img className="" src={image} alt="" />
        <img className="w-100 d-none" src={image2} alt="" />
      </div>
    </div>
  );
}

export default Info;
