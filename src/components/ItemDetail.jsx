import React, { useContext } from "react";
import { useState } from "react";
import Contador from "./Contador";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContex } from "../context/useContex";

const ItemDetail = ({ item }) => {
  console.log("ItemDetail", item);
  const [add, setAdd] = useState(false);
  
  const {addItem} = useContext(CartContex);


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
                  <h5>{item.Nombre} </h5>
                </div>
                <div className="col-md-12 text-center fst-italic">
                  <p>Numero de identificacion de producto: {item.id}</p>
                  <p>{item.Descripcion} </p>
                  <p>Precio: ${item.Precio} </p>
                  <p>Stock:{item.Stock} unidades. </p>
                  <p>Presentacion:{item.Presentacion} </p>
                </div>
              </Card.Text>
              <Card.Img
                variant="top"
                src={item.Imagen}
                alt={"Item.Imagen"}
                width={"10rem"}
              />

              <div>
                {add ? (
                  <div className="meta">!Agregado!</div>
                ) : (
                  <Contador item={item} stock={10} initial={0} addItem={addItem} />
                )}
              </div>
              <div className="d-grid gap-2 d-md-block">
                <Link to="/Cart" className="btn btn-success btn-lg ">
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
