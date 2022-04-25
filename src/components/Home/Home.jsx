import React from "react";
import Head from "./Head/Head";
import Products from "../Shared/Products/Products";
import Sections from "./Sections/Sections";
import Info from "../Shared/Info/Info";

function Home({ func }) {
  return (
    <div className="home ">
      <Head />
      <div className="container-sm" style={{ fontSize: "12px" }}>
        <Products />
      </div>
      <Sections />
    </div>
  );
}

export default Home;
