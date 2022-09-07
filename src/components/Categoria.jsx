import React from 'react'
import {useState, useEffect} from 'react'
import { getDocs, getFirestore, collection} from 'firebase/firestore';



export default function Categoria() {
    const [categoria, setCategoria]= useState ([])

useEffect(() => {
    const db = getFirestore();
    const categoriaColecction =  collection(db, 'Categoria');
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

