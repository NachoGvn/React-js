import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './pages/itemListContainer/itemListContainer';
import OnAdd from './components/itemCount/itemCount';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {CartProvider} from './context/CartProvider'

function App() {
  return (
    <div className="App">

  <CartProvider>
  <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='home' element={<ItemListContainer/>} />
        <Route path='contacto' element={<div>Contacto</div>} />
        <Route path='productos' element={<div>Productos</div>} />
        <Route path='aboutus' element={<div>About us</div>} />
        <Route path='detail/:id' element={<ItemDetailContainer/>} />
      </Routes>
     </BrowserRouter>
  </CartProvider>
    
    
      
    </div>
  );
}



export default App;
