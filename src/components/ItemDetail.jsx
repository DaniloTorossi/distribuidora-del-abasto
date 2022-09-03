import React, { useContext } from "react";
import { useState, useEffect } from "react";
import Contador from "./Contador";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/useContex";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetail = ({ item }) => {
  const [add, setAdd] = useState(false);
  const { addItem } = useContext(CartContext);
  const [loading, setLoading] = useState([true]);
  const [result, setResult] = useState([]);
  const { id } = useParams();
  const { Nombre, Descripcion, Presentacion, Precio, Stock, Imagen } = item;

  //Firestore itemDetail
  useEffect(() => {
    const db = getFirestore();

    //Referencia del producto a traer

    const productRef = doc(db, "Categoria", "id");
    setLoading(true);
    getDoc(productRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = {
            id: snapshot.id,
            ...snapshot.data(),
          };
          setResult(data);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

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
                  <h5>{Nombre} </h5>
                </div>
                <div className="col-md-12 text-center fst-italic">
                  <p>Numero de identificacion de producto: {id}</p>
                  <p>{Descripcion} </p>
                  <p>Precio: ${Precio} </p>
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
