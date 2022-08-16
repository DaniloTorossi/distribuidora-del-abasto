import React from "react";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <Link to={`/item/${producto.id}`}>
      <div
        className="card row"
        style={{
          width: "10rem",
          margin: "10px",
        }}
      >
      <div className="col">
      <img
          src={producto.Imagen}
          className="card-img-top"
          alt={producto.Nombre}
        style={{height:"12rem"}} /> 
      </div>
        <div className="card-body">
          <h5 className="card-title">{producto.Nombre}</h5>
        </div>
      </div>
    </Link>
  );
};

export default Item;
