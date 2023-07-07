import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate(); //Dieu huong trang

  // Check neu nguoi dung dang nhap roi, van quay lai trang login
  const isAuth = localStorage.getItem("isLogin");
  if (isAuth) {
    navigate("/dashboad");
  }

  const urlLogin = `http://localhost:3000/login`

  /* Get API Tu server ve */
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);

  // Tao 1 Function getAPI ve
  const getApi = async () => {
    setLoading(true)
    const res = await axios({
      method: "get",
      url: urlLogin
    });
    if (res) {
      setUser(res.data[0]);
      setLoading(false);
    }
  }
  useEffect(() => {
    getApi();
  }, []);

  // Form
  const { handleSubmit, control, formState: { errors } } = useForm({
    defaultValues: {
      email: "",
      password: ""
    }
  });

  // Ham xu ly xu kien nguoi dung gui form len
  const onSubmit = (data) => {

    if (data.email === user.user && data.password === user.pass) {
      // Dang nhap thanh cong
      localStorage.setItem("isLogin", true);

      // Hien thong bao khi dang nhap thanh cong
      toast.success('Dang nhap thanh cong!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      // Dieu huong trang
      setTimeout(() => {
        navigate("/dashboad"); //dieu huong den trang dashboad
      }, 1500)

    } else {

      // Dang nhap that bai
      toast.error('Dang nhap that bai!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

    }

  }


  if (loading === true) return ("Loading...");

  return (
    <>
      {/* Phan Form xu ly */}
      <Form className='wrap-form' onSubmit={handleSubmit(onSubmit)}>
        <h1>Form Dang Nhap</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email: </Form.Label>
          <Controller
            control={control}
            name='email'
            rules={
              {
                required: true,
              }
            }
            render={({ field }) => (
              <Form.Control
                {...field}
                type="email"
                placeholder="Nhap email!"
              />
            )} />
          {errors.email && <p>Email khong duoc de trong!</p>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Mat Khau: </Form.Label>
          <Controller
            control={control}
            name='password'
            render={({ field }) => (
              <Form.Control
                {...field}
                type="password"
                placeholder="Nhap mat khau!"
              />
            )}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      {/* Phan Thong bao dang nhap */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

    </>

  )
}

export default Login