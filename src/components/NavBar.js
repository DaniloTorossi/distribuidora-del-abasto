import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Outlet, Link } from "react-router-dom";
import Contador from "./Contador";
import image from "./image/carrito.svg";

function NavBar() {
  const onAdd = (quantity) => {
    console.log(`Selecciono ${quantity} productos`);
  };
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Distribuidora del Abasto</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="Mascotas">
              Mascotas
            </Nav.Link>
            <Nav.Link as={Link} to="Dietetica">
              Dietetica
            </Nav.Link>
            <Nav.Link as={Link} to="Precios">
              Precios
            </Nav.Link>
          </Nav>
        </Container>
        <container>
          <img src={image} className="cart" alt="carrito" />
          <Contador initial={0} stock={10} onAdd={onAdd} />
        </container>
      </Navbar>
      <section></section>
    </>
  );
}

export default NavBar;
