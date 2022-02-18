import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductFormBloc = (productService) => {
  let {
    getProduct,
    createProduct,
    updateProduct
  } = productService();
  
    let params = useParams();
    const readable = params.id ? true : false;
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const getProductById = async() =>{
        try{
        const res = await getProduct(params.id)
            return res;
        } catch(error){
            console.log(error);
        }
      }
  
      const handleSubmit = async (values) => {
          try{
              setLoading(true);
             let res = await createProduct(values);
             setLoading(false)
              console.log(res);
              console.log(res.data);
            navigate("/products");
          } catch (error) {
            console.error(error);
          }
      }
  
      const handleUpdate = async (values) => {
          try{
              setLoading(true)
              let res = await updateProduct(values)
              setLoading(false)
               console.log(res);
               console.log(res.data);
             navigate("/products");
           } catch (error) {
             console.error(error);
           }
      }

      const handleCancel = () => {
        navigate("..")
      }

      return {
          params,
          readable,
          getProductById,
          handleSubmit,
          handleUpdate,
          handleCancel,
          loading
      }

}

export default ProductFormBloc;