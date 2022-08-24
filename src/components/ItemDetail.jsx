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
  const {addItem} = useContext(CartContext);
  const [loading, setLoading] = useState([true]);
  const [result, setResult] = useState([]);
  const { id } = useParams();


//Firestore itemDetail
useEffect(() => {
  const db = getFirestore();

  //Referencia del producto a traer

  const productRef = doc(db, 'items', id);

  getDoc(productRef)
  .then ((snapshot) => {
    setResult({...snapshot.data (), id: snapshot.id});
  })
  .catch((error) => { 
    console.log (error)
  })
  .finally(() => {
    setLoading (false);
  })

}, [id])

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
                  <Contador item={item} stock={item.Stock} initial={0} addItem={addItem} />
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
