import React, {useState} from 'react';

export const Contador = ({initial, stock, addItem, item}) => {
    const [qty, setQty] = useState(initial); 
 
    const aumentar = () => {
      setQty(qty + 1); 
    }
    const reducir = () => {
      setQty(qty - 1); 
    }

  return (
    <> 
    <div className='Contador'>
    <button className="btn btn-danger m-2" type="button" value="Submit"  disabled={qty <= 0} onClick={reducir}>-</button>
    <span className='ColorContador'> Total:{ qty} </span>
    <button className="btn btn-success m-2" type="button" value="Submit" disabled={qty >= stock} onClick={aumentar}>+</button>
    <button className="btn btn-primary" type="button" disabled={stock <=0} onClick={() => addItem(item, qty)}>
    <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-cart"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>Agregar al carrito</button>
    </div>
    </>
  )
}



export default Contador;
