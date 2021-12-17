import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import NavBar from "../../components/navbar/NavBar.component";
import TableCustom from "../../components/table/Table.component";
import Footer from "../../components/footer/Footer.component";
import { Form, Button } from "react-bootstrap";
import "./Dashboard.css";
export default function Dashboard() {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="full-container">
          <h1 className="title-content">FORM INPUT POST</h1>
          <Form>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Upload Thumb</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="title" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Price</Form.Label>
              <Form.Control type="number" placeholder="Rp" />
            </Form.Group>
            <label className="mb-2">Field Content</label>
            <CKEditor editor={ClassicEditor} />
            <Button variant="primary" className="mt-3">SAVE</Button>
          </Form>
          <TableCustom />
        </div>
      </div>
      <Footer />
    </>
  )
}