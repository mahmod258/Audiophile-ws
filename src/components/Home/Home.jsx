import { useEffect } from "react";
import Head from "./Head/Head";
import Products from "../Shared/Products/Products";
import Sections from "./Sections/Sections";
import Info from "../Shared/Info/Info";
import Nav from "../Shared/Nav/Nav";
import Footer from "../Shared/Footer/Footer";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Nav />
      <div className="home ">
        <Head />
        <div className="container-sm" style={{ fontSize: "12px" }}>
          <Products />
        </div>
        <Sections />
        <Info />
      </div>
      <Footer />
    </>
  );
}

export default Home;
