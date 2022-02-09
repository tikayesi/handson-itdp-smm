const ButtonIncrement = (props) => {

    const increment = () => {
        props.increment(props.number+1)
      }

  return (
    <>
        {props.number}
        <br/>
      <button onClick={increment}>+</button>
    </>
  );
};

export default ButtonIncrement;
