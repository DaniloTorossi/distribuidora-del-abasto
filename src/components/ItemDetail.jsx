const ItemDetail = ({ item }) => {
  console.log("ItemDetail", item);
  return (
    <div
      style={{
        display: "flex",
        "align-items": "center",
        "justify-content": "center",
      }}
      className="row"
    >
      <div className="text-center col">
        <h3>Detalle de producto</h3>
      </div>

      <div className="text-center text-primary">
        <h5>{item.Nombre} </h5>
      </div>
 <div className="col-md-12 text-center fst-italic">
       <p>Numero de identificacion de producto: {item.id}</p>
       <p>{item.Descripcion} </p>
       <p>Precio: ${item.Precio} </p>
       <p>Stock:{item.Stock} unidades. </p>
       <p>Presentacion:{item.Presentacion} </p>
 </div>
      <img src={item.Imagen} alt={"Item.Imagen"} style={{"max-width":"10rem"}} ></img>
    </div>
  );
};

export default ItemDetail;
