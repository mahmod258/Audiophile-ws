import React from "react";
import { Link } from "react-router-dom";

function Suggestion({ sug }) {
  return (
    <div className="suggestion">
      <h1 className="title">YOU MAY ALSO LIKE</h1>
      <div className="d-flex justify-content-between">
        {sug.map((el, i) => {
          return (
            <div key={i}>
              <img src={el.img} alt="" />
              <p>{el.smName === null ? el.name : el.smName}</p>
              <Link to={el.path}>
                <button className="button">SEE PRODUCT</button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Suggestion;
