import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../components/Firebase/Firebase"
import {doc, getDoc, collection } from "firebase/firestore";


const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState([true]);
  const [result, setResult] = useState([]);
  const { id } = useParams();

 //Firestore itemDetail
 useEffect(()=>{
  //le decimos nuestra base de datos y en que coleccion esta
  const coleccionProductos = collection(db, "items")
  //la referencia de que tiene q traer (id)
  const referenciaDoc = doc(coleccionProductos, id)
  //traemos un solo documento
  getDoc(referenciaDoc)
  .then((result)=>{
   setItem({
      id:result.id,
      ...result.data()
    })
  })
  .catch((error)=> console.log(error))
  .finally(()=> setLoading(false))
},[id])


  
  return (
    <div>
    <ItemDetail item={item} /> 
    </div>
  );
};

export default ItemDetailContainer;
