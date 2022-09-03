import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import {
  collection,
  getFirestore,
  getDocs,
  query,
  where,
} from "firebase/firestore";

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState([true]);
  const { id } = useParams();

  //Firestore
  useEffect(() => {
    const db = getFirestore();
    const itemsColecction = collection(db, "items");
    if (id) {
      const q = query(itemsColecction, where("Categoria", "==", id));
      getDocs(q)
        .then((snapshot) => {
          setProductos(
            snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
          );
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      getDocs(itemsColecction)
        .then((snapshot) => {
          setProductos(
            snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
          )
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [id]);

  //Codigo para traer array de producto del json. 
 /*  const data = new Promise((resolve, reject) => {
    let condition = true;
    setTimeout(() => {
      if (condition) {
        resolve(Productos);
      } else {
        reject("No hay stock del item seleccionado");
      }
    }, 2000);
  });

  useEffect(() => {
    data
      .then((res) => setProductos(res))
      .catch((err) => console.log("Hubo un error: " + err));
  }, []);
 */
  return (
    <div className="container">
    {/*   {productos.map ((productos) => <p key={productos.id}>{productos.nombre} </p>)}  */}
      <ItemList productos={productos} />
      
    </div>
  );
}

export default ItemListContainer;
