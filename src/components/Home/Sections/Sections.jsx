import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
function Sections() {
  return (
    <div className="container-md d-flex flex-column" style={{ gap: "2em" }}>
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}

export default Sections;
