import { useNavigate } from "react-router-dom";

export const Product = () => {
    let navigate = useNavigate();
    return(
      <>
      <h2>Product</h2>
      <button onClick={ () => navigate("form")}>Add Product</button>
      </>
    )
  }