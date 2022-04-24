import React from "react";
import Head from "./Head/Head";
import Products from "../Products/Products";
import Sections from "./Sections/Sections";
import Info from "../Info/Info";
function Home() {
  return (
    <div className="home ">
      <Head />
      <div className="container-sm" style={{ fontSize: "12px" }}>
        <Products />
      </div>
      <Sections />
      <Info />
    </div>
  );
}

export default Home;
