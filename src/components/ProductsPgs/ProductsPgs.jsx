import React from "react";
import Products from ".././Shared/Products/Products";

function ProductsPgs({ products }) {
  return (
    <div className="products-pgs">
      <header className="w-100 d-flex align-items-center justify-content-center">
        <h1>HEADPHONES</h1>
      </header>
      <div className="container-md type-products">
        {products.map((el) => {
          return (
            <div
              className="d-flex align-items-center"
              style={{ flexDirection: el.flexDirection }}
            >
              <img src={el.img} alt="" />
              <img src={el.smImg} alt="" />
              <div className="w-100 d-flex flex-column">
                <h5>{el.new ? "NEW PRODUCT" : null}</h5>
                <h1>{el.name}</h1>
                <p>{el.pragraph}</p>
                <button>SEE PRODUCT</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductsPgs;
