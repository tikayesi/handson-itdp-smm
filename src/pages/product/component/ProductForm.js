import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export const ProductForm = () => {
  // let params = useLocation()
  let params = useParams()
  console.log("param", params);
  const [newData, setNewData] = useState({});
  const navigate = useNavigate();
  const readable = params.id ? true : false;
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    if(params.id){
    getDataById()
    }
  }, [])

  const getDataById = async () => {
    const res = await axios.get(`http://localhost:3000/products/${params.id}`)
    console.log("response data", res);
    setNewData(res.data)
  }

  const handleChangeId = (event) => {
    setNewData({...newData, id:event.target.value})
}

const handleChangeName = (event) => {
    setNewData({...newData, name:event.target.value})
}

  const handleSubmit = async (event) => {
    try{
      setLoading(true)
       await axios.post(`http://localhost:3000/products`, newData)
       setLoading(false);
      navigate("/products");
    } catch (error) {
      console.error(error);
    }
    event.preventDefault()
}

const handleUpdate = async (event) => {
    try{
      setLoading(true)
        await axios.put(`http://localhost:3000/products`, newData)
        setLoading(false);
       navigate("/products");
     } catch (error) {
       console.error(error);
     }
    event.preventDefault()
}

  return (
    <div>
      {loading ? <h1>Loading...</h1> : <div>
    <h2>Product Form</h2>
        <div className="form-group row">
        <label htmlFor="inputId" className="col-sm-2 col-form-label">Id</label>
        <div className="col-sm-10">
        <input type="text" className="form-control" id="inputId" placeholder="Id"
        value={newData.id || ''}
        onChange={handleChangeId}
        readOnly={readable}
        />
        </div>
    </div>
    <br></br>
    <div className="form-group row">
        <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
        <div className="col-sm-10">
        <input type="text" className="form-control" id="inputName" placeholder="Name"
         value={newData.name || ''}
         onChange={handleChangeName}
         />
        </div>
    </div>
    <br></br>
    <input className="btn btn-primary" type="submit" value="Submit"
     onClick={(e) => params.id ? handleUpdate(e) : handleSubmit(e)}/> 
     </div>
}
    </div>
  );
};
