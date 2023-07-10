import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Controller, useForm } from 'react-hook-form';

const FormProduct = ({oldData}) => {

  console.log(oldData, 'oldData');

  const { handleSubmit, control, formState: { errors } } = useForm({
    defaultValues: {
      title: oldData.title ?? ""
    }
  });

  const onSubmit = (data) => {
    console.log(data, 'data');
  }
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>

          <Controller
            control={control}
            name='title'
            rules={
              {
                required: true,
              }
            }
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