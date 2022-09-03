import "./App.css";
import { Router } from "./components/Router/Router";
import { CartProvider } from "./context/useContex";
import { doc, getDoc, getFirestore} from "firebase/firestore";
import { useEffect, useState } from "react";




function App() {
  const [value, setValue] = useState([])
  return ( 
/*  Llama a un producto especifico de la db por medio de un useEffect  
useEffect (()=> {
      const db = getFirestore()
      const docRef = doc(db, 'items', 'xzbI9B98Y80YRsYd0q3H')
      getDoc(docRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = {
            id: snapshot.id,
            ...snapshot.data()
          }
          console.log(data)
          setValue(data)
        }
      })
      .catch((err) => console.error(err))
      }, []), */

    <div className="App">
      <>
        <div>
        <CartProvider>
          <Router/>
        </CartProvider> 
        </div>
      </>
    </div>
  );
}

export default App;
