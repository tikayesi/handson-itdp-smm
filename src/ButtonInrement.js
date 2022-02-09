import { useDispatch } from "react-redux";
import ActionType from "./state/GlobalActionType";

const ButtonIncrement = (props) => {
const dispatch = useDispatch()
  return (
    <>
        {props.number}
        <br/>
      <button onClick={() => dispatch({type: ActionType.PLUS})}>+</button>
    </>
  );
};

export default ButtonIncrement;
