import Header from './components/Header.jsx'
import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header brandName="Test" />
      <main className="App__main">
        <img src={logo} className="App__main__logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App__main__link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </main>
    </div>
  );
}

export default App;
