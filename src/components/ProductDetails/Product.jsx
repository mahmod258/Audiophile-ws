import React, { useState } from "react";

function Product({ product, card, setCard }) {
  const [num, setNum] = useState(1);
  const addToCard = () => {
    let inCard = false;
    let where = null;
    for (let i = 0; i < card.length; i++) {
      if (card[i].product.name === product.name) {
        inCard = true;
        where = i;
      }
    }
    if (!inCard) {
      let arr = card;
      arr.push({ product, num });
      setCard(arr);
    } else if (inCard) {
      let arr = card;
      card[0] = { product, num };
      setCard(arr);
    }
    console.log(card);
  };
  return (
    <div className="product d-flex align-items-center justify-content-between">
      <img className="w-50" src={product.img} alt="" />
      <img className="w-50" src={product.tbImg} alt="" />
      <div className="w-50 ">
        <h5 className="new">{product.new ? "NEW PRODUCT" : null}</h5>
        {product.title}
        <p className="text">{product.pragraph}</p>
        <p className="fw-bold">{product.worth}</p>
        <div className="d-flex ">
          <div className=" d-flex align-items-center justify-content-between">
            <div
              className="h-100 d-flex align-items-center justify-content-center"
              onClick={() => (num !== 1 ? setNum(num - 1) : null)}
            >
              <span>-</span>
            </div>
            <span className="text-black">{num}</span>
            <div
              className="h-100 d-flex align-items-center justify-content-center"
              onClick={() => setNum(num + 1)}
            >
              <span>+</span>
            </div>
          </div>
          <button className="button" onClick={addToCard}>
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
