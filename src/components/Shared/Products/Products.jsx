import React from "react";
import image1 from "../../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import image2 from "../../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import image3 from "../../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import { Link } from "react-router-dom";
function Products() {
  return (
    <div className="products  bg-white text-dark w-100 justify-content-between">
      <div>
        <img src={image1} alt="" />
        <p className="m-0">HEADPHONES</p>
        <button className="btn">
          <Link to="/Audiophile-ws/headphones">SHOP</Link>
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
        <p className="m-0">SPEAKERS</p>
        <button className="btn">
          <Link to="/Audiophile-ws/speakers">SHOP</Link>
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
        <p className="m-0">EARPHONES</p>
        <button className="btn">
          <Link to="/Audiophile-ws/earphones">SHOP</Link>
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

export default Products;
