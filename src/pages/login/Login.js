import "./Login.css";
// import NavBar from "../../components/navbar/NavBar.component";
// import Footer from "../../components/footer/Footer.component";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <div className="container-login">
        <div className="card-login">
          <h3>Form Login</h3>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>User Name</Form.Label>
              <Form.Control type="text" placeholder="User Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
          <hr></hr>
          <div className="text-center mt-3">
            <Link to="/registration">
              Registration
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