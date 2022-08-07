import React from "react";


const Item = ({ producto }) => {
  console.log("item", producto);
  return (
    <div className="card" style={{ width: "12rem", margin: ".5rem" }}>
        <img
          src={producto.imagen}
          className="card-img-top"
          alt={producto.nombre}
        />
        <div className="card-body">
          <h5 className="card-title">{producto.nombre}</h5>
          <p className="card-text">{producto.descripcion} </p>
          <p className="card-text">${producto.precio} </p>
          <p className="card-text">stock:{producto.stock} </p>
        </div>
    </div>
  );
};

export default Item;
