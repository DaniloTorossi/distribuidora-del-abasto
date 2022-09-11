import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import {
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../components/Firebase/Firebase"

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const { id } = useParams();

  //Firestore
  useEffect(()=>{
    //evaluo si existe la categoria o no 
    const q = id 
    ? query(collection(db, "items"), where("categoria", "==", id)) 
    : collection(db, "items")
    //hago el pedido a firebase
    getDocs(q)
    .then((result)=>{
      const lista = result.docs.map((product)=> {
        return{
          id: product.id,
          ...product.data()
        }
      })
      setProductos(lista)
    })
   }, [id])


  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-10">
            <h1 className="title">Alimentos balanceados</h1>
            <ItemList productos={productos} />
          </div>
        </div>
      </div>
      <section>
        <footer className="container-fluid position-relative bottom-0 end-0 footer">
          <h3> Contacto </h3>
          <h5>Direccion: Salta 326, Alvarez</h5>
          <h5>Horario: L a V 09:00 a 18:00Hrs.</h5>
          <h5>Telefono: 0342-155449912</h5>
          <h5>Correo: distribuidoradelabasto@outlook.com</h5>
        </footer>
      </section>
    </div>
  );
}

export default ItemListContainer;
