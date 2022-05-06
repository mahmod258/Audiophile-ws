import React from "react";
import image1 from "../../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import image2 from "../../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import image3 from "../../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import { Link } from "react-router-dom";
import Info from "../Info/Info";
function Products() {
  return (
    <div className="products  bg-white text-dark w-100 justify-content-between">
      <div>
        <img src={image1} alt="" />
        <p className="m-0">HEADPHONES</p>
        <Link to="/Audiophile-ws/headphones">
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
        </Link>
      </div>
      <div>
        <img src={image2} alt="" />
        <p className="m-0">SPEAKERS</p>
        <Link to="/Audiophile-ws/speaker">
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
        </Link>
      </div>
      <div>
        <img src={image3} alt="" />
        <p className="m-0">EARPHONES</p>
        <Link to="/Audiophile-ws/earphones">
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
        </Link>
      </div>
    </div>
  );
}

export default Products;
