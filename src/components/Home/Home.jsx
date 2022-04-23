import React from "react";
import Head from "./Head/Head";
import Products from "../Products/Products";
import Sections from "./Sections/Sections";
function Home() {
  return (
    <div className="home">
      <Head />
      <div
        className="container-sm"
        style={{ marginTop: "10em ", fontSize: "12px" }}
      >
        <Products />
      </div>
      <Sections />
    </div>
  );
}

export default Home;
