import React, { createContext, useState, useContext } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  //ingresa al carrito <-- esta funcion no esta andando correctamente
  const isInCart = (id) => {
    const found = items.find((items) => items.id === id);
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
    setItems(items.filter((items) => items.id !== prod.id));
  };

  const emptyCart = () => {
    setItems([])
}

  const cartQuantity = () => {
    return items.reduce((acc, prod) => (acc += prod.Stock), 0);
  };

  const cartTotal = () => {
    return items.reduce((acc, prod) => (acc += prod.Precio * prod.Stock), 0);
  };

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, cartTotal, cartQuantity, emptyCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext)