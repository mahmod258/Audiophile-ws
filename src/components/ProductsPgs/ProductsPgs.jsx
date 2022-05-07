import { useEffect } from "react";
import Products from ".././Shared/Products/Products";
import Nav from "../Shared/Nav/Nav";
import { Link } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";

function ProductsPgs({ product }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);
  return (
    <>
      <Nav />
      <div className="products-pgs">
        <header className="w-100 d-flex align-items-center justify-content-center">
          <h1>HEADPHONES</h1>
        </header>
        <div className="container-md type-products">
          {product.map((el, i) => {
            return (
              <div
                key={i}
                className="d-flex align-items-center"
                style={{ flexDirection: el.flexDirection }}
              >
                <img src={el.img} alt="" />
                <img src={el.smImg} alt="" />
                <div className="w-100 d-flex flex-column">
                  <h5 className="new">{el.new ? "NEW PRODUCT" : null}</h5>
                  {el.title}
                  <p className="text">{el.pragraph}</p>
                  <Link to={el.path}>
                    <button className="button">SEE PRODUCT</button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductsPgs;
