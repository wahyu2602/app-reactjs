import "./Card.component.css";
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Row, Col } from 'react-bootstrap';
import { useState } from "react";
import MyVerticallyCenteredModal from "../modalbox/ModalBox";

export default function CardComponent(props) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Card className="card-hover">
        <Card.Img className="img-card" variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text className="text-end">
            {props.price}
          </Card.Text>
          <p className="sub-text text-secondary text-end">{props.stockStatus}</p>
          <hr></hr>
          <Row >
            <Col>
              <Button variant="primary" className="ms-1" onClick={() => setModalShow(true)}>
                <FontAwesomeIcon icon={faCartArrowDown} />
              </Button>
            </Col>
            <Col className="text-end">
              <Link className="btn btn-success" to="/order">
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