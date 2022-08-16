import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Link } from "react-router-dom";
import CartWidget from "./CartWidget";

function NavBar() {
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
        <div>
        <CartWidget/> 
        </div>
      </Navbar>
      <section></section>
    </>
  );
}

export default NavBar;
