import { Button, Table } from "react-bootstrap"

const TableProduct = () => {
  return (
    <>
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
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
              <Button variant="link">Edit</Button>
              <Button variant="link">Delete</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  )
}

export default TableProduct