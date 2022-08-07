import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";



function App() {
  return (
    <div className="App">
      <>
        <div>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<ItemListContainer />}></Route>
              <Route path="/Item/:id" element={<ItemDetailContainer/>}></Route>
              <Route path="/categoria/:categoria" element={<ItemDetailContainer/>}></Route>
              <Route path="*" element={<ItemListContainer />}></Route>
            </Routes>
          </BrowserRouter>
        </div>
      </>
    </div>
  );
}

export default App;
