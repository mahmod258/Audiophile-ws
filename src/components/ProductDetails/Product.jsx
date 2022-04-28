import React, { useState } from "react";

function Product({ product }) {
  const [num, setNum] = useState(0);
  return (
    <div className="product d-flex align-items-center justify-content-between">
      <img className="w-50" src={product.img} alt="" />
      <img className="w-50" src={product.tbImg} alt="" />
      <div className="w-50 ">
        <h5 className="new">{product.new ? "NEW PRODUCT" : null}</h5>
        {product.title}
        <p className="text">{product.pragraph}</p>
        <p className="fw-bold">{product.worth}</p>
        <div className="d-flex ">
          <div className=" d-flex align-items-center justify-content-between">
            <div
              className="h-100 d-flex align-items-center justify-content-center"
              onClick={() => (num !== 0 ? setNum(num - 1) : null)}
            >
              <span>-</span>
            </div>
            <span className="text-black">{num}</span>
            <div
              className="h-100 d-flex align-items-center justify-content-center"
              onClick={() => setNum(num + 1)}
            >
              <span>+</span>
            </div>
          </div>
          <button className="button">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
