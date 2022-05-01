import React from "react";

import "./cartUi.css";

const CartUi = ({ detail, deleteItem, increment, decrement }) => {
  const CheckDecrement = (detail) => {
    if (detail.quantity > 1) {
      decrement(detail.pid);
      return;
    }
    deleteItem(detail.pid);
  };

  return (
    <>
      <div className="cart">
        <div className="cart-img-qunat">
          <img src="https://i.graphicmama.com/blog/wp-content/uploads/2020/10/30131032/P-amazing-3D-logo-design-concept-in-20211.jpg" />

          <div className="cart-quant">
            <button onClick={() => CheckDecrement(detail)}>-</button>
            <span>{detail && detail.quantity}</span>
            <button onClick={() => increment(detail.pid)}>+</button>
          </div>
        </div>
        <div className="cart-detail">
          <p>{detail && detail.name}</p>
          <span className="bold">
            $ {detail && detail.quantity * detail.price}
          </span>
          <div>
            <span className="bold">Color :</span>
            <span>Red</span>
          </div>
          <span className="bold">In Stock</span>
          <div className="cart-btn">
            <button
              className="cart-delete-btn"
              onClick={() => deleteItem(detail.pid)}
            >
              Delete
            </button>
            <button className="cart-more-btn">See more like this</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartUi;
