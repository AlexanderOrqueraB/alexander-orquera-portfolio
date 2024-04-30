import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <header className="App-header">
        <h1>Alexander Orquera Barrera</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Portfolio</h3>
        <a
          className="App-link"
          href="https://github.com/AlexanderOrqueraB"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visita mi Github!
        </a>
      </header>
  );
}

export default App;
