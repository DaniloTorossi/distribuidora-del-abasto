import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc, collection } from "firebase/firestore";


const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState([true]);
  const [result, setResult] = useState([]);
  const { id } = useParams();

 //Firestore itemDetail
 useEffect(() => {
  setLoading(true);
  const db = getFirestore();

  //ingreso a mi coleccion
  const colecionProductos = collection(db, "items");
  //Busco un producto en expecifico en mi coleccion
  const productRef = doc(colecionProductos, id);
  getDoc(productRef)
    .then((snapshot) => {
      //En este IF filtro productos y le digo, si existe traelo y si hay un error consologuealo.
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



  //Metodo de filtro para busqueda de datos del Json.
/* 
    useEffect(() => {
      const obtenerDatos = new Promise((resolve, reject) => {
        let condition = true;
          setTimeout(() => {
          if (condition) {
          resolve(Productos);
        } else {
          reject("No se encuentra el producto deseado");
        }
      }, 2000);
    });

    obtenerDatos
        .catch((err) => console.log("Hubo un error: " + err))
        .then((data)=>  setItem(data.filter((item) => item.id === id)[0]));
  }, [id]);
 */
  return (
    <div>
    <ItemDetail item={item} /> 
    </div>
  );
};

export default ItemDetailContainer;
