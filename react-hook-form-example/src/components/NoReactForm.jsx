import { useState } from "react";

const NoReactForm = () => {
  // B1: Tao state luu gia tri nguoi dung nhap vao form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const hanldeSubmit = (e) => {
    e.preventDefault();
    // B2: Truy cap phan tu input
    const inputEmail = e.target.querySelector("#email-form");
    const inputPass = e.target.querySelector("#password-form");
    // B3: Luu gia tri de su dung
    setEmail(inputEmail.value);
    setPassword(inputPass.value);
  }
  console.log(email, 'email');
  console.log(password, 'pass')

  return (
    <>
      <h1>Form dang ky khong su dung thu vien</h1>

      <form onSubmit={hanldeSubmit}>

        <div className="wrap-email">
          <label htmlFor="email">Email: </label>
          <input id="email-form" name="email" type="email" placeholder="Nhap vao email cua ban!" />
        </div>

        <div className="wrap-pass">
          <label htmlFor="password">Mat Khau</label>
          <input id="password-form" name="password" type="password" placeholder="Nhap mat khau cua ban!" />
        </div>

        <button type="submit">Dang nhap</button>
      </form>
    </>
  )
}

export default NoReactForm