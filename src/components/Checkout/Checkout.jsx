import React, { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useCart } from "../../context/useContex";

const Checkout = () => {
  const [comprador, setComprador] = useState({});
  const { items, cartTotal, emptyCart } = useCart();
  const [orderId, setOrderId] = useState("");
  const datosComprador = (e) => {
    setComprador({
      ...comprador,
      [e.target.name]: e.target.value,
    });
  };

  const finalizarCompra = (e) => {
    e.preventDefault();
    const ventasCollection = collection(db, "ventas");
    addDoc(ventasCollection, {
      comprador,
      items: items,
      total: cartTotal(),
      date: serverTimestamp(),
    })
      .then((res) => {
        setOrderId(res.id);
        emptyCart();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {!orderId ? (
        <div>
          <h2> Checkout </h2>
          <form onSubmit={finalizarCompra}>
            <input
              type="text"
              placeholder="Nombre y apellido"
              name="nombre"
              onChange={datosComprador}
            />
            <input
              type="text"
              placeholder="Direccion"
              name="Direccion"
              onChange={datosComprador}
            />
            <input
              type="number"
              placeholder="Telefono"
              name="Telefono"
              onChange={datosComprador}
            />
            <input
              type="text"
              placeholder="E-mail"
              name="E-mail"
              onChange={datosComprador}
            />
            <button type="submit">Terminar Compra</button>
          </form>
        </div>
      ) : (
        <div>
          <h3>Muchas Gracias por su compra!</h3>
          <h4>Su pedido es el numero: {orderId}</h4>
          <button>Volver al inicio</button>
        </div>
      )}
    </>
  );
};

export default Checkout;
