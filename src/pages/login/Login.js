import "./Login.css";
import NavBar from "../../components/NavBar.component";
import Footer from "../../components/Footer.component";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
export default function Login() {
  return (
    <>
      <NavBar />
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
              Submit
            </Button>
          </Form>
        </div>
      </div>
      <Footer />
    </>
  )
}