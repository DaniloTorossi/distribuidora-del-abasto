import "./App.css";
import { Router } from "./components/Router/Router";
import { CartProvider } from "./context/useContex";



function App() {
  return (
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
