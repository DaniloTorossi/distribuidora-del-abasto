import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import { useState, useEffect } from "react";
import { getDocs, collection, where, query } from "firebase/firestore";
import { db } from "../components/Firebase/Firebase";

function NavBar() {
  const [categoria, setCategoria] = useState([]);
  //Firestore
  useEffect(() => {
    //evaluo si existe la categoria o no
    const q = categoria
      ? query(collection(db, "items"), where("categoria", "==", categoria))
      : collection(db, "items");
    //hago el pedido a firebase
    getDocs(q).then((result) => {
      const lista = result.docs.map((product) => {
        return {
          id: product.id,
          ...product.data(),
        };
      });
      setCategoria(lista);
    });
  }, [categoria]);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Distribuidora del Abasto</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/Categoria/Juguetes">
              Juguetes
            </Nav.Link>
            <Nav.Link as={Link} to="/Categoria/Accesorios">
              Accesorios
            </Nav.Link>
            <Nav.Link as={Link} to="/Categoria/Alimentos">
              Alimentos
            </Nav.Link>
          </Nav>
        </Container>
        <div>
          <Nav.Link as={Link} to="/Cart">
            <CartWidget />
          </Nav.Link>
        </div>
      </Navbar>
      <section></section>
    </>
  );
}

export default NavBar;
