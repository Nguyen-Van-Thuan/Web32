import ProductsAdmin from "../admin/ProductsAdmin";
import { Navigate } from "react-router-dom";


const PrivateRouter = () => {
  // Check xem da dang nhap hay chua
  const isAuth = localStorage.getItem("isLogin");
  console.log(isAuth);

  if (isAuth) {
    return <ProductsAdmin/>
  } else {
    return <Navigate to="/login" replace />
  }
}

export default PrivateRouter