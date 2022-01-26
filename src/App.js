import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'Jeremy'
  function getButtonText() {
    return "Click Me"
  }
  const buttonName = {text: "Click Me"}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome {name}!</h1>
        <label htmlFor="name">Enter Name</label>
        <input id='name' type="text"/>
        <button>{getButtonText()}</button>
        <button>{buttonName.text}</button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
