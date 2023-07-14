import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const FormProduct = ({ oldData, setShow, getApi }) => {

  // console.log(oldData, 'oldData');

  const { handleSubmit, control, formState: { errors } } = useForm({
    defaultValues: {
      title: oldData.title ?? "" //A ? B : C
    }
  });

  const onSubmit = (data) => {

    if (data) {
      axios({
        method: 'patch',
        url: `http://localhost:3000/products/${oldData.id}`,
        data: {
          title: data.title,
        }
      })
        .then(() => {
          getApi();
          toast.success('Edit successfull!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
            
        })
        .catch((error)=>{
          console.log(error);
          toast.error('Edit false!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
            
        })
    }
    setShow(false);
  }

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>

          <Controller
            control={control}
            name='title'
            rules={{
              required: true,
            }}
            render={({ field }) => (
              <Form.Control
                {...field}
                type="text"
                placeholder="Nhap vao ten san pham cua ban"
              />
            )}
          />
          {errors.title && <p>Ten SP khong duoc de trong!</p>}
        </Form.Group>

        <Button variant="primary" type="submit">
          Save Edit
        </Button>
      </Form>

    </>
  )
}

export default FormProduct