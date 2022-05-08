import { useState, createContext } from "react";
export const ContextCart = createContext();

function Cart({ children }) {
  const [cart, setCart] = useState([]);
  const addToCart = ({ product, num }) => {
    let inCart = false;
    let where = null;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].product.name === product.name) {
        inCart = true;
        where = i;
        break;
      }
    }
    if (!inCart) {
      setCart([...cart, { product, num }]);
    } else if (inCart) {
      let arr = cart;
      arr[where] = { product, num };
      setCart(arr);
    }
  };
  const changeNum = (p, product) => {
    let arr = cart;
    switch (p) {
      case "+":
        arr[arr.indexOf(product)].num += 1;
        break;
      case "-":
        if (arr[arr.indexOf(product)].num - 1 >= 1) {
          arr[arr.indexOf(product)].num -= 1;
        }
        break;
    }
    setCart(arr);
  };
  const clearCart = () => {
    setCart([]);
  };
  return (
    <ContextCart.Provider value={[cart, addToCart, changeNum, clearCart]}>
      {children}
    </ContextCart.Provider>
  );
}

export default Cart;
