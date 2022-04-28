import React from "react";
import Products from ".././Shared/Products/Products";
import { Link } from "react-router-dom";

function ProductsPgs({ product, obj }) {
  return (
    <div className="products-pgs">
      <header className="w-100 d-flex align-items-center justify-content-center">
        <h1>HEADPHONES</h1>
      </header>
      <div className="container-md type-products">
        {product.map((el, i) => {
          return (
            <div
              key={i}
              className="d-flex align-items-center"
              style={{ flexDirection: el.flexDirection }}
            >
              <img src={el.img} alt="" />
              <img src={el.smImg} alt="" />
              <div className="w-100 d-flex flex-column">
                <h5 className="new">{el.new ? "NEW PRODUCT" : null}</h5>
                {el.title}
                <p className="text">{el.pragraph}</p>
                <Link to={el.path}>
                  <button className="button">SEE PRODUCT</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductsPgs;
