import React, { useContext } from "react";
import {Link} from 'react-router-dom'
import { CartContext } from "../context/useContex";

const Cart = () => {
  const { items, removeItem} = useContext(CartContext);
  return (
    <div className="container">
      <div className="col">
        {items.map((item) => (
          <div key={item.id} className="col-md-12 text-center fst-italic">
            <br></br>
            <h5>
              {item.qty} {item.nombre}{" "}
            </h5>
            <Link className='btn btn-success m-2' to='/ItemCart'>Terminar compra</Link>
            <button type="button" className="btn btn-danger" onClick={() => removeItem(item.id)}>Borrar Producto</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
