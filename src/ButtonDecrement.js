import { useContext } from "react";
import { RootContext } from "./App";
import ActionType from "./state/GlobalActionType";

const ButtonDecrement = () => {
  const nilai = useContext(RootContext)
    return (
      <>
          <button onClick={() => nilai.dispatch({type: ActionType.MINUS})}>-</button>
      </>
    );
  };
  
  export default ButtonDecrement;
  