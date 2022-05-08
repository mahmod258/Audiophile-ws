import { useContext, useEffect, useState } from "react";
import Nav from "../Shared/Nav/Nav";
import Footer from "../Shared/Footer/Footer";
import Paid from "./Paid";
import { ContextCart } from "../Conetxt/Cart";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const [cart] = useContext(ContextCart);
  const [total, setTotal] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [chose, setChose] = useState(["chose", ""]);
  const [paid, setPaid] = useState(false);
  useEffect(() => {
    let total = 0;
    let shipping = 0;
    cart.forEach((pro) => {
      for (let i = 0; i < pro.num; i++) {
        shipping++;
        let neww = "";
        const x = pro.product.worth.substring(1, pro.product.worth.length);

        for (let i = 0; i < x.length; i++) {
          if (x[i] !== ",") {
            neww += x[i];
          }
        }
        total += +neww;
      }
    });
    setTotal(total);
    setShipping(shipping);
  });
  const changeChoose = (num) => {
    let arr = ["", ""];
    arr[num] = "chose";
    setChose(arr);
  };
  let navigate = useNavigate();
  window.onload = () => {
    navigate("/Audiophile-ws");
  };
  return (
    <>
      <Nav checkout={true} />
      <form
        className="checkout d-flex container-md justify-content-between"
        onSubmit={(e) => e.preventDefault()}
      >
        <div>
          <h1>CHECKOUT</h1>
          <div>
            <div>
              <p className="aTitle">BILLING DETAILS</p>
              <div>
                <div>
                  <p className="smTitle">Name</p>
                  <input
                    className="input"
                    type="text"
                    placeholder="Alexei Ward"
                  />
                </div>
                <div>
                  <p className="smTitle">Email Adress</p>
                  <input
                    className="input"
                    type="email"
                    placeholder="alexei@mail.com"
                  />
                </div>
                <div>
                  <p className="smTitle">Phone Number</p>
                  <input
                    className="input"
                    type="tel"
                    placeholder="+1 202-555-0136"
                  />
                </div>
              </div>
            </div>
            <div>
              <p className="aTitle">SHIPPING INFO</p>
              <div>
                <div>
                  <p className="smTitle">Adress</p>
                  <input
                    className="input"
                    type="text"
                    placeholder="1137 Williams Avenue"
                  />
                </div>
                <div>
                  <p className="smTitle">ZIP Code</p>
                  <input className="input" type="text" placeholder="10001" />
                </div>
                <div>
                  <p className="smTitle">City</p>
                  <input className="input" type="text" placeholder="New York" />
                </div>
                <div>
                  <p className="smTitle">Country</p>
                  <input
                    className="input"
                    type="text"
                    placeholder="United States"
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="paymentMethod">
                <p className="aTitle">Payment Method</p>
                <div className="d-flex flex-column">
                  <div className={"d-flex " + chose[0]}>
                    <div onClick={() => changeChoose(0)}></div>
                    <p>e-Money</p>
                  </div>
                  <div className={"d-flex " + chose[1]}>
                    <div onClick={() => changeChoose(1)}></div>
                    <p>Cash on Delivery</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <p className="smTitle">e-Money number</p>
                  <input
                    className="input"
                    type="text"
                    placeholder="238521993"
                  />
                </div>
                <div>
                  <p className="smTitle">e-Money PIN</p>
                  <input className="input" type="text" placeholder="6891" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* BOOOOOOOOOOOOOOOOOOOOOORDEEEEEEEEEEER */}
        <div>
          <h4>summary</h4>
          <div>
            {cart.map((pro) => {
              return (
                <div className="d-flex justify-content-between align-items-center">
                  <div className="common1">
                    <img src={pro.product.img} alt="" />
                    <p>
                      <span>{pro.product.smName}</span>
                      <span>{pro.product.worth}</span>
                    </p>
                  </div>
                  <p>x{pro.num}</p>
                </div>
              );
            })}
          </div>
          <div>
            <p className="d-flex justify-content-between mb-1">
              <span>TOTAL</span>
              <span>${total}</span>
            </p>
            <p className="d-flex justify-content-between mb-1">
              <span>SHIPPING</span>
              <span>${shipping}</span>
            </p>
            <p className="d-flex justify-content-between mb-1">
              <span>VAT (INCLUDED)</span>
              <span>${total / 10}</span>
            </p>
            <p className="d-flex justify-content-between mt-3">
              <span>GRAND TOTAL</span>
              <span>${total + shipping + total / 10}</span>
            </p>
          </div>

          <input
            className="button2 button"
            type="submit"
            value="CONTINUE & PAY"
            onClick={() => setPaid(true)}
          />
        </div>
      </form>
      {paid ? <Paid /> : null}
      <Footer />
    </>
  );
}

export default Checkout;
