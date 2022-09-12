import React, { useContext } from "react";
import { useState } from "react";
import Contador from "./Contador";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../context/useContex";

const ItemDetail = ({ item }) => {
  const [add, setAdd] = useState(false);
  const { addItem } = useContext(CartContext);
  const {Nombre, Descripcion, id, Stock, Precio, Presentacion, Imagen} = item; 

  return (
    <>
      <div className="container-fluid cardItem">
        <Card style={{ width: "18rem" }} className="row">
          <div>
            <Card.Body>
              <div className="col">
                <Card.Title>
                  <h3>Detalle de producto</h3>
                </Card.Title>
              </div>

              <Card.Text>
                <div className="text-center text-primary">
                  <h5>{Nombre}</h5>
                </div>
                <div className="col-md-12 text-center fst-italic">
                  <p>Numero de identificacion de producto:{id}</p>
                  <p>{Descripcion} </p>
                  <p>Precio: ${Precio}</p>
                  <p>Stock:{Stock} unidades. </p>
                  <p>Presentacion:{Presentacion} </p>
                </div>
              </Card.Text>
              <Card.Img
                variant="top"
                src={Imagen}
                alt={Imagen}
                width={"10rem"}
              />

              <div>
                {add ? (
                  <div className="meta">!Agregado!</div>
                ) : (
                  <Contador
                    item={item}
                    stock={item.Stock}
                    initial={0}
                    addItem={addItem}
                  />
                )}
              </div>
              <div className="d-grid gap-2 d-md-block">
                <Link to="/Cart" className="btn btn-success mt-2">
                  Finalizar compra
                </Link>
              </div>
            </Card.Body>
          </div>
        </Card>
      </div>
    </>
  );
};

export default ItemDetail;
