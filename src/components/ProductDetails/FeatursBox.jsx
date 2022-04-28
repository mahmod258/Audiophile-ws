import React from "react";

function FeatursBox({ featurs, inTheBox }) {
  return (
    <div className="d-flex featursBox justify-content-between">
      <div>
        <h1>FEATURS</h1>
        <p className="text">{featurs[0]}</p>
        <p className="text">{featurs[1]}</p>
      </div>
      <div className="d-flex flex-column">
        <h1>IN THE BOX</h1>
        <ul className="list-unstyled">
          {inTheBox.map((item, i) => {
            return (
              <li key={i}>
                <span>{item.substring(0, 2)}</span>
                {item.substring(2, item.length)}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default FeatursBox;
