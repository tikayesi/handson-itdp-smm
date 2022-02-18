import { Outlet, Route, Routes } from "react-router-dom";
import { Customer } from "../pages/customer/Customer";
import { Home } from "../pages/home/Home";
import ProductFormBloc from "../pages/product/bloc/ProductFormBloc";
import ProductListBloc from "../pages/product/bloc/ProductListBloc";
import { ProductForm } from "../pages/product/component/ProductForm";
import { ProductList } from "../pages/product/component/ProductList";
import ProductService from "../pages/product/service/ProductService";
import { NotFoundPage } from "../pages/shared/PageNotFound";

const AppRouters = () => {
    return(
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Outlet />}>
          <Route index element={<ProductList bloc={() => ProductListBloc(ProductService)}/>} />
          <Route path="form" element={<ProductForm bloc={() => ProductFormBloc(ProductService)}/>} />
          <Route path="form/:id" element={<ProductForm bloc={() => ProductFormBloc(ProductService)}/>} />
        </Route>
        <Route path="customers/*" element={<Customer />}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    );
}

export default AppRouters;