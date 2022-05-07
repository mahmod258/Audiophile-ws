import { useContext, useState, useEffect } from "react";
import { ContextCart } from "../../../Conetxt/Cart";
import { Link } from "react-router-dom";

function AddToCart({ changeFilter, setCartToggle }) {
  const [cart, , changeNum, clearCart] = useContext(ContextCart);
  const [state, setState] = useState(0);
  const [state1, setState1] = useState(0);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let sTotal = 0;
    cart.forEach((pro) => {
      for (let i = 0; i < pro.num; i++) {
        let neww = "";
        const x = pro.product.worth.substring(1, pro.product.worth.length);

        for (let i = 0; i < x.length; i++) {
          if (x[i] !== ",") {
            neww += x[i];
          }
        }
        sTotal += +neww;
      }
    });
    setTotal(sTotal);
  });
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
            <p className="fw-bold">{"$" + total}</p>
          </div>
          <div>
            {cart.map((el, i) => {
              return (
                <div
                  key={i}
                  className="d-flex justify-content-between align-items-center "
                >
                  <div className="common1">
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
        {cart.length ? (
          <Link to="/Audiophile-ws/checkout">
            <button className="button">CHECKOUT</button>
          </Link>
        ) : (
          <button className="button">CHECKOUT</button>
        )}
      </div>
    </>
  );
}

export default AddToCart;
