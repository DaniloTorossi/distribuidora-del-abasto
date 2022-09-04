import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../NavBar";
import ItemListContainer from "../ItemListContainer";
import ItemDetailContainer from "../ItemDetailContainer";
import ItemCart from "../ItemCart/itemCart";
import Cart from "../Cart";
import Categoria from "../Categoria";
export const Router = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />}></Route>
          <Route path="/Item/:id" element={<ItemDetailContainer />}></Route>
          <Route
          //prueba si funciona caso contrario estaba "path=/categoria/:categoria"
            path="/Descripcion/:id"
            element={<ItemDetailContainer />}
          ></Route>
          <Route path="*" element={<ItemListContainer />}></Route>
          <Route path="/Cart/" element={<Cart/>}></Route>
          <Route path="/ItemCart" element={<ItemCart/>}></Route>
        </Routes>
        <Categoria/>
      </BrowserRouter>
    </>
  );
};
