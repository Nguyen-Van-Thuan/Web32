import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const Detail = () => {
    const URL = `http://localhost:3000`
    const [data, setData] = useState();


    //B1: Lay id dong tu router  bang useParams(); 
    /* useParams la 1 cai hook thuoc react-router-dom chuyen lay id dynamic */ 
    // const id = useParams();
    const {id} = useParams();
    console.log(id);

    //B2: Get API tu id
    useEffect(
        ()=>{
            const getAPI = async() => {
                const response = await axios({
                    method: "get",
                    url: `${URL}/products/${id}`
                })
                return setData(response.data);
            }
            getAPI();
        },[URL, id] //Chi chay lai khi URL, ID THAY DOI.
    )

        console.log(data, 'data');

    return (
        <h1>{data && data.title}</h1>
    )
}
export default Detail