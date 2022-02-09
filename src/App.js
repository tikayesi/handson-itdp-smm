import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ButtonIncrement from './ButtonInrement';
import ButtonDecrement from './ButtonDecrement';

const App = () => {
  const [number, setNumber] = useState(0)

  const setNumberValue = (number) => {
    setNumber(number)
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {number}
      <br/>
      <ButtonIncrement number={number} increment={setNumberValue}/>
      <br/>
      <ButtonDecrement number={number} decrement={setNumberValue}/>
    </div>
  );
}


export default App;
