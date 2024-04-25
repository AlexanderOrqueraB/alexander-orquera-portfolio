import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <header className="App-header">
        <a>Alexander Orquera Barrera</a>
        <img src={logo} className="App-logo" alt="logo" />
        <a>Portfolio</a>
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
