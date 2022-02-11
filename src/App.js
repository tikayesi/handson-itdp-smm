import "./App.css";
import {
  BrowserRouter as Router,
  Link,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Product } from "./pages/product/Product";
import { Customer } from "./pages/customer/Customer";
import { ProductForm } from "./pages/product/ProductForm";
import { CustomerForm } from "./pages/customer/component/CustomerForm";
import { NotFoundPage } from "./pages/shared/PageNotFound";

const App = () => {
  return (
    <Router>
      {/* Navigation */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="products">Product</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="customers">Customer</Link>
          </li>
        </ul>
      </nav>

      {/* Configurasi */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Outlet />}>
          <Route index element={<Product />} />
          <Route path="form" element={<ProductForm />} />
        </Route>
        <Route path="customers/*" element={<Customer />}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </Router>
  );
};

export default App;
