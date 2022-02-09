import { useContext } from "react";
import { RootContext } from "./App";
import ActionType from "./state/GlobalActionType";

const ButtonIncrement = () => {
const nilai = useContext(RootContext)
  return (
    <>
        {nilai.nilai.nilai}
        <br/>
      <button onClick={() => nilai.dispatch({type: ActionType.PLUS})}>+</button>
    </>
  );
};

export default ButtonIncrement;
