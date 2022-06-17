import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';



function App() {


  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer title={"Sunflower."} greeting={"Welcome! We love to have you here!"} />} />
            <Route path="/category/:categoryId" element={<ItemListContainer title={"Sunflower."} greeting={"Welcome! We love to have you here!"} />} />
            <Route path="/detail/:productId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<h1 className="itemDetailTitle">CART</h1>} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>


  );
}


export default App;
