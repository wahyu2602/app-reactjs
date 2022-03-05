import { Modal, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Masuk Keranjang Belanja Anda
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col lg="6">
              <img className="img-fluid" src={props.image} alt={props.title} />
            </Col>
            <Col lg="6">
              <h5>{props.title}</h5>
              <p>$ {props.price}</p>
              <p>{props.description}</p>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Link className="btn btn-success" to={`/order/${props.data}`}>
          Proses
        </Link>
        <Button variant="danger" onClick={props.onHide}>Kembali Berbelanja</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;