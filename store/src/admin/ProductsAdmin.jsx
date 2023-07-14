import { useEffect, useState } from "react";
import TableProduct from "./common/TableProduct"
import axios from "axios";

const ProductsAdmin = () => {
  const [data, setData] = useState([]);

  // call APi goi ra product.
  const getApi = async () => {
    const res = await axios({
      method: "get", //lay ve
      url: "http://localhost:3000/products"
    })
    return setData(res.data)
  }

  useEffect(() => {
    getApi(); 
  }, [])


  return (
    <>
      <h3 className="text-center mt-4 my-4">Danh sach san pham</h3>
      <TableProduct dataTable={data} getApi={getApi}/>
    </>
  )
}

export default ProductsAdmin