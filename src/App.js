import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="row">
        <Menu />
      </div>
    </div>
  );
}

export default App;
