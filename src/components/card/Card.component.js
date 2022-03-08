import "./Card.component.css";
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Row, Col } from 'react-bootstrap';
import { useState } from "react";
import MyVerticallyCenteredModal from "../modalbox/ModalBox";
import { connect } from 'react-redux';
import { addCart, loadItem, popUpModalBox } from '../../config/redux/dispatch';

function CardComponent({ data, addCart, loadItem, popUpModalBox }) {
  const [modalShow, setModalShow] = useState(false);
  const handClick = () => {
    addCart(data.id);
    setModalShow(true);
    popUpModalBox(data.id);
  }

  return (
    <>
      <Card className="card-hover">
        <Card.Img className="img-card" variant="top" src={data.image} />
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
          <Card.Text className="text-end">
            $ {data.price}
          </Card.Text>
          <p className="sub-text text-secondary text-end">{data.category}</p>
          <hr></hr>
          <Row >
            <Col>
              <Button variant="primary" className="ms-1" onClick={handClick}>
                <FontAwesomeIcon icon={faCartArrowDown} />
              </Button>
            </Col>
            <Col className="text-end">
              <Link className="btn btn-success" to="/order" onClick={(e) => loadItem(data)}>
                Buy Now
              </Link>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCart: (id) => dispatch(addCart(id)),
    loadItem: (item) => dispatch(loadItem(item)),
    popUpModalBox: (id) => dispatch(popUpModalBox(id))
  }
}

export default connect(null, mapDispatchToProps)(CardComponent);