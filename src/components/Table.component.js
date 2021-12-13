import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table'
export default function TableCustom() {
  return (
    <div className="table">
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>No.</th>
            <th>Title</th>
            <th>Create At</th>
            <th>Create Update</th>
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
              <Button variant="secondary">UPDATE</Button>{' '}
              <Button variant="danger">DELETE</Button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>
              <Button variant="secondary">UPDATE</Button>{' '}
              <Button variant="danger">DELETE</Button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>
              <Button variant="secondary">UPDATE</Button>{' '}
              <Button variant="danger">DELETE</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}