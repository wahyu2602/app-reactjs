import "./Card.component.css";
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Row, Col } from 'react-bootstrap';
import { useState } from "react";
import MyVerticallyCenteredModal from "../modalbox/ModalBox";
import { useDispatch } from 'react-redux';
import { TypeAction } from "../../config/redux/constanta";
import { connect } from 'react-redux';
import { addCart } from '../../config/redux/dispatch';

function CardComponent(props) {
  const [modalShow, setModalShow] = useState(false);
  const handClick = () => {
    props.addCart(props.data)
    setModalShow(true)
  }

  return (
    <>
      <Card className="card-hover">
        <Card.Img className="img-card" variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text className="text-end">
            $ {props.price}
          </Card.Text>
          <p className="sub-text text-secondary text-end">{props.stockStatus}</p>
          <hr></hr>
          <Row >
            <Col>
              <Button variant="primary" className="ms-1" onClick={handClick}>
                <FontAwesomeIcon icon={faCartArrowDown} />
              </Button>
            </Col>
            <Col className="text-end">
              <Link className="btn btn-success" to={`/order/${props.data}`}>
                Buy Now
              </Link>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <MyVerticallyCenteredModal
        title={props.title}
        image={props.image}
        price={props.price}
        data={props.data}
        description={props.description}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCart: (id) => dispatch(addCart(id)),
  }
}


export default connect(null, mapDispatchToProps)(CardComponent);