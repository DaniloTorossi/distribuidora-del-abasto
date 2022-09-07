import React, { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useCart } from "../../context/useContex";
import { db } from "../Firebase/Firebase";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Checkout = () => {
  const [comprador, setComprador] = useState({});
  const { items, cartTotal, emptyCart } = useCart();
  const [orderId, setOrderId] = useState("");
  const Alert = () => {
    Swal.fire(
      "Error",
      "Los campos ingresados estan incompletos o son invalidos",
      "error"
    );
  };

  const datosComprador = (e) => {
    setComprador({
      ...comprador,
      [e.target.name]: e.target.value,
    });
  };
  const finalizarCompra = (e) => {
    e.preventDefault();
    if (Object.values(comprador).length !== 4) {
      Alert();
    } else {
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
    }
  };
  return (
    <>
      {!orderId ? (
        <div className="container-sm checkout">
          <div>
            <h2>Checkout </h2>
            <form onSubmit={finalizarCompra}>
              <div className="checkout-div">
                <input
                  type="text"
                  placeholder="Nombre y apellido"
                  name="nombre"
                  onChange={datosComprador}
                />
              </div>
              <div className="checkout-div container">
                <input
                  type="text"
                  placeholder="Direccion"
                  name="Direccion"
                  onChange={datosComprador}
                />
              </div>
              <div className="checkout-div">
                <input
                  type="number"
                  placeholder="Telefono"
                  name="Telefono"
                  onChange={datosComprador}
                />
              </div>
              <div className="checkout-div">
                <input
                  type="text"
                  placeholder="E-mail"
                  name="E-mail"
                  onChange={datosComprador}
                />
              </div>
              <button type="submit" className="btn btn-outline-success">
                Terminar Compra
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div>
          <h3>Muchas Gracias por su compra!</h3>
          <h4>Su pedido es el numero: {orderId}</h4>
          <Link className="btn btn-success" to="/ItemListContainer">
            Volver al inicio
          </Link>
        </div>
      )}
    </>
  );
};

export default Checkout;
