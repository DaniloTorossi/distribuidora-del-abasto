import React from "react";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import Productos from "./Productos/Productos";

function ItemListContainer() {
    const [productos, setProductos] = useState([]);


const data = new Promise((resolve, reject) => {
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

    return (
    <div className="container">
      {/* {productos.map ((productos) => <p key={productos.id}>{productos.nombre} </p>)} */}
        <ItemList productos={productos} />
    </div>
    );
}

export default ItemListContainer;
