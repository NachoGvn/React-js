import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import OnAdd from './components/itemCount.js/itemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
        <ItemDetailContainer/>
        <OnAdd/>
      </header>
      
    </div>
  );
}


export default App;
