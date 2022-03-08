import { Modal, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadItem } from '../../config/redux/dispatch';

function MyVerticallyCenteredModal({ show, onHide, data, loadItem }) {
  if (show) {
    return (
      <Modal
        show={show}
        onHide={onHide}
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
                <img className="img-fluid" src={data.image} alt={data.title} />
              </Col>
              <Col lg="6">
                <h5>{data.title}</h5>
                <p>$ {data.price}</p>
                <p>{data.description}</p>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Link className="btn btn-success" to="/order" onClick={(e) => loadItem(data)}>
            Proses
          </Link>
          <Button variant="danger" onClick={onHide}>Kembali Berbelanja</Button>
        </Modal.Footer>
      </Modal>
    );
  } else {
    return (
      <></>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.modalBox
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadItem: (item) => dispatch(loadItem(item))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyVerticallyCenteredModal);