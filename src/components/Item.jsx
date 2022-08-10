import React from "react";
import { Link } from "react-router-dom";


const Item = ({ producto }) => {
  return (
    <Link to={`/item/${producto.id}`}>
    <div className="card" style={{ width: "10rem", margin: ".5rem", height:"100%" }}>
        <img
          src={producto.Imagen}
          className="card-img-top"
          alt={producto.Nombre}
        />
        <div className="card-body">
          <h5 className="card-title">{producto.Nombre}</h5>
        </div>
    </div>
  </Link>
  );
};

export default Item;
