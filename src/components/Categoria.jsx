import React from 'react'
import {useState, useEffect} from 'react'
import {itemsColecction, getDocs, getFirestore, onSnapshot, collection} from 'firebase/firestore';
import {Link} from 'react-router-dom';


export default function Categoria() {
    const [categorias, setCategorias]= useState ([])

useEffect(() => {
    const db = getFirestore();
    const categoriaColecction =  collection(db, 'items');

    getDocs(categoriaColecction)
    .then((snapshot) => {
        console.log (snapshot.docs.map((doc) => doc.data ()))
    }).catch((error) => {
        console.log(error);
    });
})


  return (
    <div>Categoria</div>
  )
}

