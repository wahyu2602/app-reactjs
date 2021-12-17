import "./Registration.css";
// import NavBar from "../../components/navbar/NavBar.component";
// import Footer from "../../components/footer/Footer.component";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Registration() {
  return (
    <>
      <div className="container-login">
        <div className="card-login">
          <h3>Form Registration</h3>
          <Form>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>User Name</Form.Label>
              <Form.Control type="text" placeholder="User Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="emaple@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="nohp">
              <Form.Label>No Handphone</Form.Label>
              <Form.Control type="number" placeholder="+62812345678" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Register
            </Button>
          </Form>
          <hr></hr>
          <div className="text-center mt-3">
            <Link to="/login">
              Login
            </Link>
          </div>
          <div className="text-center">
            <Link to="/">
              Go back
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}