import React from "react";

function Paid() {
  return (
    <>
      <div className="paid">
        <div>
          <div>
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
          <h1>
            <span>THANK YOU</span> <span>FOR YOUR ORDER</span>
          </h1>
          <p>You will receive an email confirmation shortly.</p>
          <div></div>
          <button className="button button2">BACK TO MOVE</button>
        </div>
      </div>
    </>
  );
}

export default Paid;
