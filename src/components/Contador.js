import React, {useEffect, useState} from 'react';

export const Contador = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(parseInt(initial)); 
    const reducir = () => {
      setCount(count - 1); 
    }
    const aumentar = () => {
      setCount(count + 1); 
    }

    useEffect(() => {
      setCount(parseInt(initial));}, [initial]);

  return (
    <div className='Contador'>
    <button disabled={count <= 0} onClick={reducir}>-</button>
    <span className='ColorContador'> Total:{ count} </span>
    <button disabled={count >= stock} onClick={aumentar}>+</button>
    <button disabled={stock <=0} onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
  )
}



export default Contador;
