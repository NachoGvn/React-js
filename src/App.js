import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import OnAdd from './components/itemCount.js/itemCount';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ItemListContainer/>
        <OnAdd/>
      </header>
      
    </div>
  );
}


export default App;
