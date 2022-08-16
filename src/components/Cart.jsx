import React, { useContext } from "react";
import { CartContex } from "../context/useContex";

const Cart = () => {
  const { items, removeItem} = useContext(CartContex);
  return (
    <div className="container">
      <div className="contain">
        {items.map((item) => (
          <div key={item.id}>
            <br></br>
            <h5>
              {item.qty} {item.nombre}{" "}
            </h5>
            <button type="button" className="btn btn-danger" onClick={() => removeItem(item.id)}>Borrar Producto</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
