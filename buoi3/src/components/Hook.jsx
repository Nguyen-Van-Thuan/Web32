import { useEffect, useState } from "react"

const Hook = () => {
    // useState giup minh quan ly sate cua component
    const [name, setName] = useState(0);

    const hanldeClick = () => {
        setName("Thanh");
    }
    console.log(name, 'name');

    // useEffect
    useEffect(() => {
        //Logic xu ly o day. Call API
    })
    return (
        <button onClick={hanldeClick}>Rename</button>
    )
}

export default Hook


/*
  Khai niem Hook
  + Bat dau bang tu use
  + Phuong thuc (Function) co san. Muon su dung phai import vao
  + Mo rong cac chuc nang cua Function Components

useEffect()
  + Nhan 2 gia tri: 
    - arrow function: Thuc thi logic minh muon
    - Deps:
      + TH1:  Khong co -- Logic duoc goi lien tuc
      + TH2: TRUYEN VAO 1 MANG RONG [ ] -- Logic duoc goi 1 lan
      + TH3: TRUYEN VAO 1 GIA TRI CU THE -- Logic duoc goi theo gia tri day
*/ 