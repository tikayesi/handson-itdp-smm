import { Outlet, Route, Routes } from "react-router-dom"
import { CustomerForm } from "./component/CustomerForm"
import { CustomerList } from "./component/CustomerList"

export const Customer = () => {
    return(
     <Routes>
       <Route path="/" element={<Outlet />}>
          <Route index element={<CustomerList />} />
          <Route path="form" element={<CustomerForm />} />
          <Route path=":name" element={<CustomerList />} />
        </Route>
     </Routes>
    )
  }
  