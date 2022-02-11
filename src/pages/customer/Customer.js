import { useNavigate, useParams } from "react-router-dom"

export const Customer = () => {
    let params = useParams();
    let navigate = useNavigate();
    console.log(params);
    return(
      <>
      <h2>Customer name : {params.name}</h2>
      <button onClick={ () => navigate("/productssss/form")}>Add Product</button>
      </>
    )
  }
  