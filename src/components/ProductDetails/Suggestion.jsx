import React from "react";

function Suggestion({ sug }) {
  return (
    <div className="suggestion">
      <h1 className="title">YOU MAY ALSO LIKE</h1>
      <div className="d-flex justify-content-between">
        {sug.map((el) => {
          return (
            <div>
              <img src={el.img} alt="" />
              <p>{el.smName === null ? el.name : el.smName}</p>
              <button className="button">SEE PRODUCT</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Suggestion;
