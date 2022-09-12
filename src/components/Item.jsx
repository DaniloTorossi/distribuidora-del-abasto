import React from "react";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  const { Nombre, Imagen } = producto;
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
            src={Imagen}
            className="card-img-top"
            alt={Nombre}
            style={{ height: "12rem" }}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{Nombre}</h5>
        </div>
      </div>
    </Link>
  );
};

export default Item;
