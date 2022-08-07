import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import Productos from "./Productos/Productos";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  console.log("item", item);
  const { id } = useParams();

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

  useEffect(() => {
    obtenerDatos
      .then((res) => setItem(res))
      .catch((err) => console.log("Hubo un error: " + err));
    //.then((data)=>  setItem(data.filter((item) => item.id === parseInt(id))[0]))//
  }, [id]);

  return (
    <div>
      <ItemDetail item={item} /> *
      {/* {item.map ((item) => <p key={item.id}>{item.nombre} </p>)}  */}
    </div>
  );
};

export default ItemDetailContainer;