import { useNavigate } from "react-router-dom";

export const Home = () => {
    // Programmatically
    let navigate = useNavigate();
    return(
      <>
      <h2>Home</h2>
      <button onClick={ () => navigate("customers/20")}>Customer</button>
      </>
    )
  }
  