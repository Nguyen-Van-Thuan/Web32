import axios from "axios";
import { Button, Table } from "react-bootstrap"

// import show edit
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import FormProduct from "./FormProduct";

const TableProduct = ({ dataTable, getApi }) => {
  const [oldData, setOldData] = useState();


  // Xy ly xoa bang ghi
  const handleDelete = async (id) => {
    try {
      await axios({
        method: 'delete',
        url: `http://localhost:3000/products/${id}`
      });
      getApi();
    } catch (error) {
      console.log(error);
    }
  }

  // Setting show edit
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (item) => {
    setOldData(item)
    setShow(true)
  };

  // console.log(oldData, 'oldData');

  return (
    <div className="wrap-form-admin">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {dataTable.length > 0 && dataTable.map((item) => {
            // console.log(item);
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.price} $</td>
                <td>{item.category}</td>
                <td>
                  <Button variant="link" onClick={()=> handleShow(item)}>Edit</Button>
                  <Button variant="link" onClick={() => handleDelete(item.id)}>Delete</Button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>


      {/* Setting show edit UI */}
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Edit Product</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <FormProduct oldData={oldData}/>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default TableProduct