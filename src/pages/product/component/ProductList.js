import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteProduct, getProducts } from "../service/ProductService";

export const ProductList = () => {
    const [list, setList] = useState([])
    let navigate = useNavigate();

    useEffect(() => {
        getListProduct()
    }, [])

    const getListProduct = async () => {
        try{
       const response = await getProducts();
       setList(response.data.products);
       console.log("response: ", response);
        } catch (error) {
            console.log(error);
        }
    }   

    const handleDelete = async (data) => {
        try{
            if(window.confirm(`Are you sure to delete ${data.name} ?`)){
        await deleteProduct(data.id);
        // navigate('form',{state: data})
        await getListProduct()}
        } catch (error){
            console.log("error: ", error);
        }
    }

    return(
        <>
        <div>
        <h2>Product List</h2>
        <button type="button" className="btn btn-success" onClick={() => navigate('form')}>
          Add Product
        </button>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Id</th>
              <th scope="col">Product Name</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {list.map((product, index) => {
              return (
                <tr key={product.id}>
                  <td>{index + 1}</td>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>
                  <button onClick={() => navigate(`form/${product.id}`, {name: "gio"})}>Update</button>
                      <button onClick={() => handleDelete(product)}>Delete</button>
                      </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
    )
  }