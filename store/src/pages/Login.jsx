import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Controller, useForm } from 'react-hook-form';

const Login = () => {

  const { handleSubmit, control, formState: { errors } } = useForm({
    defaultValues: {
      email: "",
      password: ""
    }
  });

  // Ham xu ly xu kien nguoi dung gui form len
  const onSubmit = (data) => {
    console.log(data, 'data');

  }

  return (
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
              placeholder="Nhap email cua ban!"
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
              placeholder="Nhap mat khau Password cua ban!"
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
  )
}

export default Login