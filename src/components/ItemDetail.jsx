const ItemDetail = ({ item }) => {
  console.log("ItemDetail", item);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {/*  <h3>ItemDetail</h3>
        <h3>{item.Alimento} </h3>
        <h3>{item.Descripcion} </h3> */}
      {item.map((producto) => {
        return <ItemDetail key={item.id} item={item} />;
      })}
      {/* <img src={`$Item.imagen`} alt={`$Item.imagen`}></img> */}
    </div>
  );
};

export default ItemDetail;
