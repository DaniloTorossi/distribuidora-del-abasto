import React, { createContext, useState } from "react";

export const CartContex = createContext([]);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  //ingresa al carrito <-- esta funcion no esta andando coresctamente
  const isInCart = (id) => {
    const found = items.find((item) => item.id === id);
    return found;
  };
  //recibe item y cantidad de objetos a agregar al carrito
  const addItem = (item, qty) => {
    isInCart(item.id)
      ? setItems(
          items.map((prod) => {
            if (prod.id === item.id) {
              prod.qty += qty;
            }
            return prod;
          })
        )
      : setItems([
          ...items,
          {
            id: item.id,
            nombre: item.Nombre,
            precio: item.Precio,
            qty: item.Stock,
          },
        ]);
  };
  const removeItem = (prod) => {
    setItems(items.filter((item) => item.id !== prod.id));
  };

  return (
    <CartContex.Provider value={{ items, addItem, removeItem }}>
      {children}
    </CartContex.Provider>
  );
};
