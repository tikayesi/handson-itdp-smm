import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import ButtonIncrement from './ButtonInrement';
import ButtonDecrement from './ButtonDecrement'
import { Todos } from './component/Todos';
import { ToDosForm } from './component/TodoForm';

const App = () => {

  const counter = useSelector((state) => state.nilai)


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {counter}
      <ButtonIncrement/>
      <ButtonDecrement/>
      <ToDosForm/>
      <Todos/>
    </div>
  );
}


export default App;
