import logo from './logo.svg';
import './App.css';
import ButtonIncrement from './ButtonInrement';
import ButtonDecrement from './ButtonDecrement'
import { Todos } from './component/Todos';
import { ToDosForm } from './component/TodoForm';
import { createContext, useReducer, useState } from 'react';
import ActionType from './state/GlobalActionType';
import { initial, reducer } from './state/CounterReducerCtx';

export const RootContext = createContext()


const App = () => {

const [nilai, dispatch] = useReducer(reducer, initial)

const handleIncrement = (param) => {
  dispatch(param)
}

  return (
    <RootContext.Provider value={{nilai: nilai, dispatch : handleIncrement}}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <ButtonIncrement/>
      <ButtonDecrement/>
      {/* <ToDosForm/>
      <Todos/> */}
    </div>
    </RootContext.Provider>
  );
}


export default App;
