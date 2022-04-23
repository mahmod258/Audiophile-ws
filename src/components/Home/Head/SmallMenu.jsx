import React from "react";
import image1 from "../../../assets/home/mobile/image-removebg-preview(41).png";
import image2 from "../../../assets/home/mobile/image-removebg-preview(42).png";
import image3 from "../../../assets/home/mobile/image-removebg-preview(38).png";

function SmallMenu() {
  return (
    <div className="small-menu  bg-white text-dark w-100 justify-content-between">
      <div>
        <img src={image1} alt="" />
        <p>HEADPHONES</p>
        <button className="btn">
          SHOP
          <svg
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.32227 1L6.32227 6L1.32227 11"
              stroke="#D87D4A"
              stroke-width="2"
            />
          </svg>
        </button>
      </div>
      <div>
        <img src={image3} alt="" />
        <p>SPEAKERS</p>
        <button className="btn">
          SHOP
          <svg
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.32227 1L6.32227 6L1.32227 11"
              stroke="#D87D4A"
              stroke-width="2"
            />
          </svg>
        </button>
      </div>
      <div>
        <img src={image2} alt="" />
        <p>EARPHONES</p>
        <button className="btn">
          SHOP
          <svg
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.32227 1L6.32227 6L1.32227 11"
              stroke="#D87D4A"
              stroke-width="2"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default SmallMenu;
