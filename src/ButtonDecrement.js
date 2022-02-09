import { useDispatch } from "react-redux";
import ActionType from "./state/GlobalActionType";

const ButtonDecrement = (props) => {

  const dispatch = useDispatch()

    return (
      <>
          {props.number}
          <br/>
        <button onClick={() => dispatch({type: ActionType.MINUS})}>-</button>
      </>
    );
  };
  
  export default ButtonDecrement;
  