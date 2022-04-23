import React from "react";
import Head from "./Head/Head";
import Products from "./Products/Products";
function Home() {
  return (
    <div className="home text-white">
      <Head />
      <div
        className="container-sm"
        style={{ marginTop: "10em ", fontSize: "12px" }}
      >
        <Products />
      </div>
    </div>
  );
}

export default Home;
