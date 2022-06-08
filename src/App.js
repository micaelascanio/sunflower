import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
/*import Counter from './components/Counter/Counter';*/
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer title={"Sunflower."} greeting={"Welcome! We love to have you here!"} />}/>
          <Route path="/category/:categoryId" element={<ItemListContainer title={"Sunflower."} greeting={"Welcome! We love to have you here!"} />}/>
          <Route path="/detail/:productId" element={<ItemDetailContainer />}/>
        </Routes>
      </BrowserRouter>
    </div>
      

  );
}


export default App;
