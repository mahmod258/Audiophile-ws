import React from "react";

function Form({ imgs }) {
  return (
    <div className="form d-flex">
      <div className="d-flex flex-column">
        <div style={{ backgroundImage: `url(${imgs[0]})` }}></div>
        <div style={{ backgroundImage: `url(${imgs[1]})` }}></div>
      </div>
      <div>
        <div style={{ backgroundImage: `url(${imgs[2]})` }}></div>
      </div>
    </div>
  );
}

export default Form;
