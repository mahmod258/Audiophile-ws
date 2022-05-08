import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ContextCart } from "../Conetxt/Cart";
import { ContextFilter } from "../Conetxt/Filter";

function Paid() {
  const [, changeFilter] = useContext(ContextFilter);
  const [cart, , , clearCart] = useContext(ContextCart);
  useEffect(() => {
    changeFilter();
  }, []);
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
    sTotal += sTotal / 10 + cart.length * 10;
    console.log(sTotal);

    setTotal(sTotal);
  });
  return (
    <>
      <div className="filter"></div>
      <div className="paid">
        <div>
          <div className="mb-4 success">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="21"
              viewBox="0 0 26 21"
              fill="none"
            >
              <path
                d="M1.75391 11.3328L8.50542 18.0843L24.3085 2.28125"
                stroke="white"
                stroke-width="4"
              />
            </svg>
          </div>
          <h1 className="mt-4">
            <span>THANK YOU</span> <span>FOR YOUR ORDER</span>
          </h1>
          <p className="mt-4">
            You will receive an email confirmation shortly.
          </p>
          <div className="whatYouBought d-flex justify-content-between mt-4">
            <div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="common1">
                  <img src={cart[0].product.img} alt="" />
                  <p>
                    <span>{cart[0].product.smName}</span>
                    <span>{cart[0].product.worth}</span>
                  </p>
                </div>
                <p className="fw-bold">x{cart[0].num}</p>
              </div>
              <hr />
              {cart.length > 1 ? (
                <p className="other">
                  and {cart.length - 1} other item
                  {cart.length > 2 ? "(s)" : null}
                </p>
              ) : null}
            </div>
            <div className="d-flex justify-content-center flex-column">
              <p>GRAND TOTAL</p>
              <p>${total}</p>
            </div>
          </div>
          <Link to="/Audiophile-ws">
            <button className="button button2 mt-4" onClick={clearCart}>
              BACK TO MOVE
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Paid;
