import React from "react";
import Item from "./Item";
const ItemList = ({ productos }) => {

return (
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap:'wrap'}}>
    {productos.map((producto) => {
        return <Item key={producto.id} producto={producto} />;
        })}
    </div>
    );
};

export default ItemList;
