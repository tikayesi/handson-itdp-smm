import { useFormik } from "formik";
import { useEffect } from "react";

import * as Yup from "yup";

export const ProductForm = ({bloc}) => {
  const {
    params,
    readable,
    getProductById,
    handleSubmit,
    handleUpdate,
    handleCancel,
    loading
} = bloc();

  useEffect(() => {
    console.log(("param: ", params));
    if (params.id) {
      setFormProductWithData();
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      id: "",
      name: "",
    },
    validationSchema: Yup.object({
      id: Yup.string().required("This field is required"),
      name: Yup.string()
        .required("This field is required")
        .min(5, "Minimum 5 character"),
    }),
    onSubmit: () => {
      if (params.id) {
        handleUpdate(formik.values);
      } else {
        handleSubmit(formik.values);
      }
    },
  });

  const setFormProductWithData = async () => {
    const res = await getProductById();
    console.log("response data", res);
    formik.values.id = res.data.id;
    formik.values.name = res.data.name;
    formik.setFieldValue();
  };


  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h2>Product Form</h2>
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group row">
              <label htmlFor="inputId" className="col-sm-2 col-form-label">
                Id
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="inputId"
                  placeholder="Id"
                  name="id"
                  value={formik.values.id || ""}
                  onChange={formik.handleChange}
                  readOnly={readable}
                />
              </div>
            </div>
            <br></br>
            <div className="form-group row">
              <label htmlFor="inputName" className="col-sm-2 col-form-label">
                Name
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="inputName"
                  placeholder="Name"
                  name="name"
                  value={formik.values.name || ""}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.name && formik.touched.name ? (
                  <small className="text-danger">{formik.errors.name}</small>
                ) : null}
              </div>
            </div>
            <br></br>
            <button
              className="btn btn-warning"
              type="button"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <input className="btn btn-primary" type="submit" value="Submit" />
          </form>
        </div>
      )}
    </div>
  );
};
