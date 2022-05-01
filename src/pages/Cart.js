import React, { useEffect, useState } from "react";

import CartUi from "../components/cartUi/cartUi";
import "./Cart.css";
import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SerachBar";

import { CartProduct } from "../jsonData/cart";

const Cart = () => {
  const [cartItem, setCartItem] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const [cartQuantity, setCartQuantity] = useState(0);

  const deleteItem = (id) => {
    const filterdProd = cartItem.filter((item) => item.pid !== id);
    setCartItem(filterdProd);
  };

  const increment = (id) => {
    console.log(id);
    const newProducts = cartItem.map((item) => {
      if (item.pid === id) {
        item.quantity = item.quantity + 1;
      }
      return item;
    });

    setCartItem(newProducts);
  };

  const decrement = (id) => {
    const newProducts = cartItem.map((item) => {
      if (item.pid === id) {
        item.quantity = item.quantity - 1;
      }
      return item;
    });
    setCartItem(newProducts);
  };

  useEffect(() => {
    setCartItem(CartProduct);
  }, []);

  useEffect(() => {
    const total = cartItem.reduce((acc, curr) => {
      return acc + curr.price * curr.quantity;
    }, 0);
    setSubTotal(total);
    setCartQuantity(cartItem.length);
  }, [cartItem, subTotal]);

  return (
    <>
      <Header />
      <div className="cart-container">
        <SearchBar />
        <div className="cart-body">
          {cartItem.length > 0 ? (
            cartItem.map((item, index) => (
              <CartUi
                deleteItem={deleteItem}
                increment={increment}
                decrement={decrement}
                detail={item}
                key={index}
              />
            ))
          ) : (
            <div>Cart is empty</div>
          )}
        </div>
        <footer>
          <span>SubTotal: ${subTotal && subTotal}</span>
          <button>Proceed to buy ({cartQuantity && cartQuantity} items)</button>
        </footer>
      </div>
    </>
  );
};

export default Cart;
