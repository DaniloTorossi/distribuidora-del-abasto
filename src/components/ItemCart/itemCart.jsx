import React from 'react'
import {useNavigate} from 'react-router-dom'
import { useCart } from '../../context/useContex'
import Cart from '../Cart'



export const ItemCart = () => {
  const navegar = useNavigate()
  const {items, emptyCart, cartTotal} = useCart()
  return (
    <div>
    {items.lenght
    ?
    <>
      <div className="Danger">
        <h2>
          <span>Tu carrito se encuentra vacio</span>
        </h2>
      </div>
      <h3>Visite nuestro Shop para encontrar las mejores ofertas. </h3>
      <button className='btn btn-primary' onClick={()=> navegar('/')}>Visitar Shop</button>
    </>
    :
    <>
      <div className='Success'>
        <h2><span> Tu carrito</span></h2>
        </div>
       <div>
         {items.map((item)=> <Cart key={item.id} item={item}/>)}
       </div>
       <span> Total a pagar: ${cartTotal ()}</span>
       <div>
        <button className='btn btn-success' onClick={()=>navegar('/checkout')}>Terminar compra</button>
        <button className='btn btn-danger' onClick={emptyCart}>Vaciar carrito</button>
      </div>
    </>
    }
    </div>
  )
}

export default ItemCart