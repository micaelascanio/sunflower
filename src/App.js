import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Counter from './components/Counter/Counter';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
      <ItemListContainer title = {"Sunflower."} greeting= {"Welcome! We love to have you here!"}/>      
      </header>
     {/* <Counter/> */}
    </div>

  );
}


export default App;
