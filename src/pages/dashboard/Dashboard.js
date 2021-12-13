import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import NavBar from "../../components/NavBar.component";
import TableCustom from "../../components/Table.component";
import Footer from "../../components/Footer.component";
import "./Dashboard.css";
export default function Dashboard() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="title-content">FORM INPUT POST</h1>
        <form>
          <div className="input-group">
            <label>Title</label>
            <input type="text" />
          </div>
          <label>Field Content</label>
          <CKEditor editor={ClassicEditor} />
          <button type="submit" className="btn-submit">SAVE</button>
        </form>
        <TableCustom />
      </div>
      <Footer />
    </>
  )
}