import React from "react";
import { useState, useEffect } from "react";
import ItemList from './ItemList'

const datos = [
    { id:'01', nombre: 'Criadores', descripcion: '21 Kg + 3 kg de Regalo', precio: 6.608, imagen:'https://i.postimg.cc/02xwGz7V/criadores.jpg', stock: 15},
    { id:'02', nombre: "Royal Canin", descripcion: '15Kg', precio: 13.698, imagen: 'https://i.postimg.cc/NjC2wbSn/Royal-Canin.jpg', stock: 0},
    { id:'03', nombre: "Dog Chow", descripcion: "Adultos Medianas Y Grandes 21kg + 3kg De Regalo", precio: '6.643', imagen: 'https://i.postimg.cc/vHz60Gzb/DogChow.jpg', stock: 20},
    { id:'04', nombre: 'Mapu', descripcion: "Perro Adulto 15 Kg", precio: '5.766', imagen: 'https://i.postimg.cc/jjWwqPrS/mapu.jpg', stock: 12},
    { id:'05', nombre: 'Excellent', descripcion: "Adult Dog Raza Mediana Y Grande Smart 20kg +2kg Regalo", precio: '7.862', imagen:'https://i.postimg.cc/K883VCqL/excellent.jpg', stock: 5}
]

function ItemListContainer(){ 
    const [productos, setProductos] = useState([])
    console.log('itemListContainer', productos)
    const data = new Promise ((resolve, reject ) => {
        let condition = true;
        setTimeout(() => {
        if (condition) {
        resolve(datos) 
        }else {
            reject('No hay stock del item seleccionado')   
        }}, 2000)
    })

useEffect(()=>{
    data
        .then((res) => setProductos(res))
        .catch((err) => console.log ('Hubo un error: ' + err))
}, [])




return (
    <div className="container">
 {/* {productos.map ((productos) => <p key={productos.id}>{productos.nombre} </p>)} */}
 <ItemList productos={productos}/>
    </div>
)
}

export default ItemListContainer