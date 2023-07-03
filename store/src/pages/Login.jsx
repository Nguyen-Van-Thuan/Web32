import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {
    return (
        <Form className='wrap-form'>
            <h1>Form Dang Nhap</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">

                <Form.Label>Email: </Form.Label>

                <Form.Control type="email" placeholder="Nhap email cua ban!" />

                <Form.Text className="text-muted">
                    Chung toi se tuyet doi bao mat thong tin cua quy khach!
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Mat Khau: </Form.Label>
                <Form.Control type="password" placeholder="Nhap mat khau Password cua ban!" />
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