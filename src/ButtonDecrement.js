const ButtonDecrement = (props) => {

    const decrement = () => {
        if(props.number > 0){
            props.decrement(props.number-1)
        }
      }

    return (
      <>
          {props.number}
          <br/>
        <button onClick={decrement}>-</button>
      </>
    );
  };
  
  export default ButtonDecrement;
  