import React, { createContext, useState, useContext } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const isInCart = (item) => {
    const found = items.find((prod) => prod.id === item.id);
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
            stock: item.Stock,
            qty: qty,
          },
        ]);
  };
  const removeItem = (id) => {
    setItems(items.filter((items) => items.id !== id));
  };

  const emptyCart = () => {
    setItems([])
}

  const cartQuantity = () => {
    return items.reduce((acc, prod) => acc += prod.precio * prod.qty, 0);
  };

  const cartTotal = () => {
    return items.reduce((acc, prod) => acc += prod.precio * prod.qty, 0);
  };

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, cartTotal, cartQuantity, emptyCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext)