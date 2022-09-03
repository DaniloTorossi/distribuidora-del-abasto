import React from 'react'
import {useState, useEffect} from 'react'
import { getDocs, getFirestore, collection} from 'firebase/firestore';
import Nav from "react-bootstrap/Nav"
import {Link} from 'react-router-dom';


export default function Categoria() {
    const [categoria, setCategoria]= useState ([])

useEffect(() => {
    const db = getFirestore();
    const categoriaColecction =  collection(db, 'items');

    getDocs(categoriaColecction)
    .then((snapshot) => {
    setCategoria(snapshot.docs.map((doc) => doc.data ().Categoria))
    }).catch((error) => {
        console.log(error);
    });
})


  return (
    <>
 {/*    Este codigo deberia mapear los items del db y permitir filtrar por categoria 
   {
        categoria.map((el)=> (
       <li className='nav-item' key={el}>
           <Nav.Link to={'/Categoria/'+ el} className='nav-link'>
           {el}
             </Nav.Link>
       </li>
        ))
      } */}
    </>
  )
}

