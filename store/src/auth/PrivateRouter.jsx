import ProductsAdmin from "../admin/ProductsAdmin";
import { Navigate } from "react-router-dom";


const PrivateRouter = () => {

  const isAuth = false;

  if (isAuth) {
    return <ProductsAdmin/>
  } else {
    return <Navigate to="/login" replace />
  }
}

export default PrivateRouter