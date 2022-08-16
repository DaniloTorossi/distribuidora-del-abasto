import React from "react";
import { useContext } from "react";
import { CartContex } from "../context/useContex";
import cart4 from "./img/cart4.svg";

const CartWidget = () => {
  const { items } = useContext(CartContex);
  let itemsInCart = 0;
  items.map((item) => {
    //puede ser que sea "item.Stock"
    itemsInCart = itemsInCart + item.qty;
  });
  return (
    <div>
      <div className="itemsInCart">{itemsInCart}</div>
      <img src={cart4} ClassName="cart" width={30} alt="CartWidget" />
    </div>
  );
};

export default CartWidget;
