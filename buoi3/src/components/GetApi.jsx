import axios from "axios";
import { useEffect, useState } from "react"

const GetApi = () => {
    // B1: Tao 1 state luu tru gia tri api tra ve sau khi goi xong
    const [data, setData] = useState(null);


    // B2: Call API
    useEffect(()=> {
        const getApi = async () => {
            const res = await axios({
                method: 'get', //Phuong thuc: lay ve -- tao moi -- chinh sua -- xoa
                url: 'http://localhost:3000/posts'
            });
            const db = res.data
            // Luu tru du lieu vua goi ve ra state data
            setData(db)
        }
    
        getApi();
    }, [])
    console.log(data, 'data');

    return (
        <h1>HELLO WORLD!</h1>
    )
}

export default GetApi