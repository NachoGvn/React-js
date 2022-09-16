import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './pages/itemListContainer/itemListContainer';
import OnAdd from './components/itemCount.js/itemCount';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    
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
    
      
    </div>
  );
}



export default App;
