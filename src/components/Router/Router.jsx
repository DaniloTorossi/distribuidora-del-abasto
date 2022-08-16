import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../NavBar";
import ItemListContainer from "../ItemListContainer";
import ItemDetailContainer from "../ItemDetailContainer";
import Cart from "../Cart";
export const Router = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />}></Route>
          <Route path="/Item/:id" element={<ItemDetailContainer />}></Route>
          <Route
            path="/categoria/:categoria"
            element={<ItemDetailContainer />}
          ></Route>
          <Route path="*" element={<ItemListContainer />}></Route>
          <Route path="/Cart/" element={<Cart/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
