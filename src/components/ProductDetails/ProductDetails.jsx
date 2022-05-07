import { useState, useEffect } from "react";
import Product from "./Product";
import FeatursBox from "./FeatursBox";
import Form from "./Form";
import Suggestion from "./Suggestion";
import Products from "../Shared/Products/Products";
import Nav from "../Shared/Nav/Nav";
import Info from "../Shared/Info/Info";
import Footer from "../Shared/Footer/Footer";

function ProductDetails({ product, products }) {
  const [suggestions, setSuggestions] = useState([]);
  window.scrollTo(0, 0);

  useEffect(() => {
    let sug = Object.values(products);
    let exp = [];
    sug.forEach((el) => {
      exp.push(...el);
    });

    exp = exp.sort(() => Math.random() - 0.5);
    let arr = [];
    for (let i = 0; i < exp.length; i++) {
      if (exp[i].id !== product.id && arr.length < 3) {
        arr.push(exp[i]);
      }
    }
    setSuggestions(arr);
  }, [product, products]);
  return (
    <>
      <Nav />
      <div className="productDetails container-md">
        <Product product={product} />
        <FeatursBox featurs={product.featurs} inTheBox={product.inTheBox} />
        <Form imgs={product.imgs} />
        <Suggestion sug={suggestions} />
        <Products />
      </div>
      <Footer />
    </>
  );
}

export default ProductDetails;
