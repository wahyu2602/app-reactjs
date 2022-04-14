import './Cart.css';
import NavBar from '../../components/navbar/NavBar.component';
import Footer from '../../components/footer/Footer.component';
import { Container, Card, Row, Col, Image, Button, InputGroup, FormControl, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { updateQty, removeCart, checkedLoad } from '../../config/redux/dispatch';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function Cart({ cart, updateQty, removeCart, checkedLoad }) {
  const [totalQty, setTotalQty] = useState();
  const [totalPrice, setTotalPrice] = useState();

  useEffect(() => {
    let getQty = 0;
    let getPrice = 0;
    cart.forEach((item) => {
      if (item.checked) {
        getQty += item.qty
        getPrice += item.totalPrice;
      }
    })

    setTotalQty(getQty);
    setTotalPrice(getPrice);
  }, [cart, setTotalQty, setTotalPrice]);

  return (
    <>
      <NavBar />
      <div className="bg-light py-4 in-top-shadow">
        <h3 className="text-center text-secondary">Shopping cart</h3>
      </div>
      <Container>
        <div className="full-container">
          <Row className="mt-5">
            <Col lg="8" >
              <Row>
                <Col className="col-12" >
                  <Card>
                    <h5 className="p-3">Cart ({totalQty} {totalQty > 1 ? 'items' : 'item'})</h5>
                    {cart.map(item => (
                      <>
                        <Card.Body key={item.id} className="border-top">
                          <Row className="mb-4">
                            <Col className="col-2 my-auto rounded">
                              <Image className="img-100" src={item.image} fluid />
                            </Col>
                            <Col>
                              <Row>
                                <Col className="col-lg-6">
                                  <Card.Title>
                                    {item.title}
                                  </Card.Title>
                                  <Card.Text>
                                    Price : $ {item.price}
                                  </Card.Text>
                                </Col>
                                <Col className="col-3 d-lg">
                                  <InputGroup>
                                    <Button variant="outline-primary" onClick={(e) => updateQty(item.id, item.qty + 1)}>+</Button>
                                    <FormControl
                                      type="number"
                                      value={item.qty}
                                      onChange={(e) => updateQty(item.id, Number(e.target.value))}
                                    />
                                    <Button variant="outline-danger" onClick={(e) => updateQty(item.id, item.qty - 1)}>-</Button>
                                  </InputGroup>
                                </Col>
                                <Col>
                                  <Form.Check className="text-end" aria-label="option 1" checked={item.checked} onChange={(e) => (checkedLoad(item.id, item.checked ? false : true))} />
                                </Col>
                              </Row>
                              <Col sm={4} className="mt-3 d-sm">
                                <InputGroup>
                                  <Button variant="outline-primary" onClick={(e) => updateQty(item.id, item.qty + 1)}>+</Button>
                                  <FormControl
                                    type="number"
                                    value={item.qty}
                                    onChange={(e) => updateQty(item.id, Number(e.target.value))}
                                  />
                                  <Button variant="outline-danger" onClick={(e) => updateQty(item.id, item.qty - 1)}>-</Button>
                                </InputGroup>
                              </Col>
                              <div className="mt-4">
                                <button className="btn mt-2 fw-bold" onClick={(e) => removeCart(item.id)}><FontAwesomeIcon icon={faTrashAlt} className="me-1" /> Remove Item</button>
                                <Card.Text className="d-inline-block float-end">
                                  <p className="mt-3">$ {item.totalPrice}</p>
                                </Card.Text>
                              </div>
                            </Col>
                          </Row>
                        </Card.Body>
                      </>
                    ))}
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col lg="4">
              <Card>
                <Card.Body>
                  <Card.Title className="mb-3">
                    The total amount of
                  </Card.Title>
                  <Row>
                    <Col><p className="text-secondary">Temporary amount</p></Col>
                    <Col><p className="text-end text-secondary">$ {totalPrice}</p></Col>
                  </Row>
                  <Row>
                    <Col><p className="text-secondary">Shopping</p></Col>
                    <Col><p className="text-end text-secondary">Gratis</p></Col>
                  </Row>
                  <hr />
                  <Row>
                    <Col><h6 className="mb-3">The total amount of</h6></Col>
                    <Col><p className="text-end">$ {totalPrice}</p></Col>
                  </Row>
                  {totalQty === 0 && totalPrice === 0 ?
                    <Button variant="secondary" disabled>Process</Button> :
                    <Button variant="primary">Process</Button>
                  }
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
      <Footer />
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateQty: (id, value) => dispatch(updateQty(id, value)),
    removeCart: (id) => dispatch(removeCart(id)),
    checkedLoad: (id, checked) => dispatch(checkedLoad(id, checked)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);