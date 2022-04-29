import React, { useEffect, useState } from "react";
import Product from "./Product";
import FeatursBox from "./FeatursBox";
import Form from "./Form";
import Suggestion from "./Suggestion";
import Products from "../Shared/Products/Products";

function ProductDetails({ product, products, card, setCard }) {
  let sug = Object.values(products);
  let exp = [...sug[0], ...sug[1], ...sug[2]];
  const [suggestions, setSuggestions] = useState([]);
  for (let i = 0; i < exp.length; i++) {
    if (exp[i].id !== product.id && suggestions.length < 3) {
      setSuggestions([...suggestions, exp[i]]);
      let arr = suggestions;
      arr.push(exp[i]);
      setSuggestions(arr);
    }
  }
  return (
    <div className="productDetails container-md">
      <Product product={product} card={card} setCard={setCard} />
      <FeatursBox featurs={product.featurs} inTheBox={product.inTheBox} />
      <Form imgs={product.imgs} />
      <Suggestion sug={suggestions} />
      <Products />
    </div>
  );
}

export default ProductDetails;
