import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductListBloc = (productService) => {
    let {
        getProducts,
        deleteProduct
    } = productService()
    const [list, setList] = useState([])
    let navigate = useNavigate();

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
        await deleteProduct(data.id);
        await getListProduct()
        } catch (error){
            console.log("error: ", error);
        }
    }

    const handleAdd = () => {
        navigate('form')
    }

    const handleUpdate = (id) => {
        navigate(`form/${id}`)
    }

    return {
        list,
        getListProduct,
        handleDelete,
        handleAdd,
        handleUpdate
    }

}

export default ProductListBloc;