import "./PageNotFound.css";
import { Row, Col } from "react-bootstrap";
export default function PageNotFound() {
  return (
    <div className="container">
      <Row className="justify-content-center align-items-center full-container">
        <Col>
          <div>
            <h1 className="text-center text-secondary">Page Not Found | 404</h1>
          </div>
        </Col>
      </Row>
    </div >
  )
}