import { useForm } from "react-hook-form"

const ReactHookForm = () => {

  // B1: Khai bao useForm
  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data, 'data');
    reset();
  }

  // Xem nguoi dung nhap vao 1 cach realtime
  const inputEmail = watch("email");
  // console.log(inputEmail);


  return (
    // B2: Khai bao onSubmit={handleSubmit(onSubmit)}
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="wrap-email">
        <label htmlFor="email">Email: </label>
        <input
          {...register("email", { required: true })}
          id="email-form"
          type="email"
          placeholder="Nhap vao email cua ban!"
        />
        {errors.email && <p>Truong email khong duoc de trong!</p> }
      </div>
      {/* b3: Dang ky ten input thong qua regiter */}
      <div className="wrap-pass">
        <label htmlFor="password">Mat Khau</label>
        <input
          {...register("password")}
          id="password-form"
          name="password"
          type="password"
          placeholder="Nhap mat khau cua ban!"
        />
      </div>

      <button type="submit">Dang nhap</button>
    </form>
  )
}

export default ReactHookForm

/*
  - handleSubmit: validate dau vao form
  - onSubmit: Function gui du lieu tu form len server
*/ 