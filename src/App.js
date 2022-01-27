import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import BodyComponent from './BodyComponent';

class App extends Component {

  name = "Jeremy"

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <p>{this.name}</p>
      <BodyComponent nameFromParent = {this.name} address = "Medan"/>
      <BodyComponent nameFromParent = "Gde" address = "Bali"/>
      <BodyComponent nameFromParent = "Hariadi" address = "Jogja"/>
    </div>
  );
}
}


export default App;
