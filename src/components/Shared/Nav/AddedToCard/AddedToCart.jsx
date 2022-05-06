import React from "react";
import { useContext, useState } from "react";
import { ContextCart } from "../../../Conetxt/Cart";

function AddToCart({ changeFilter, setCartToggle }) {
  const [cart, , changeNum, clearCart] = useContext(ContextCart);
  const [state, setState] = useState(0);
  const [state1, setState1] = useState(0);
  return (
    <>
      <div
        className="filter"
        onClick={() => {
          changeFilter();
          setCartToggle(false);
        }}
      ></div>
      <div className="addedToCart position-absolute">
        <div className="d-flex justify-content-between">
          <p className="fw-bold">CART ({cart.length})</p>
          <p className="fw-bold" onClick={clearCart}>
            Remove all
          </p>
        </div>
        <div>
          <div className="d-flex justify-content-between">
            <p className="fw-bold">TOTAL</p>
            <p className="fw-bold">$1000</p>
          </div>
          <div>
            {cart.map((el, i) => {
              return (
                <div
                  key={i}
                  className="d-flex justify-content-between align-items-center "
                >
                  <div className="d-flex align-items-center">
                    <img src={el.product.img} alt="" />
                    <p className="m-0">
                      <span>{el.product.smName || el.product.name}</span>
                      <span>{el.product.worth}</span>
                    </p>
                  </div>
                  <div className="d-flex inc-dec">
                    <div className=" d-flex align-items-center justify-content-between">
                      <div
                        className="h-100 d-flex align-items-center justify-content-center"
                        onClick={() => {
                          setState((state) => state + 1);
                          changeNum("-", el);
                        }}
                      >
                        <span>-</span>
                      </div>
                      <span className="text-black">{el.num}</span>
                      <div
                        className="h-100 d-flex align-items-center justify-content-center"
                        onClick={() => {
                          setState((state) => state - 1);
                          changeNum("+", el);
                        }}
                      >
                        <span>+</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <button className="button">CHECKOUT</button>
      </div>
    </>
  );
}

export default AddToCart;
