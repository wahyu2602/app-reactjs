import './Cart.css';
import NavBar from '../../components/navbar/NavBar.component';
import Footer from '../../components/footer/Footer.component';
import { Container, Card, Row, Col, Image, Button, InputGroup, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { updateQty, removeCart } from '../../config/redux/dispatch'

function Cart({ cart, updateQty, removeCart }) {
  const [totalQty, setTotalQty] = useState();
  const [totalPrice, setTotalPrice] = useState();

  useEffect(() => {
    let getQty = 0;
    let getPrice = 0;
    cart.forEach((item) => {
      getQty += item.qty
      getPrice += item.totalPrice;
    })

    setTotalQty(getQty);
    setTotalPrice(getPrice);
  }, [cart, setTotalQty, setTotalPrice]);

  return (
    <>
      <NavBar />
      <Container>
        <div className="full-container">
          <Row className="mt-5">
            <Col lg="6" >
              <Row>
                {cart.map(item => (
                  <Col className="col-12" key={item.id}>
                    <Card>
                      <Card.Body>
                        <Row>
                          <Col className="col-6">
                            <Image className="img-100" src={item.image} fluid />
                          </Col>
                          <Col className="col-6">
                            <Card.Title>
                              {item.title}
                            </Card.Title>
                            <Card.Text>
                              $ {item.totalPrice}
                            </Card.Text>
                            <InputGroup>
                              <FormControl
                                type="number"
                                value={item.qty}
                                onChange={(e) => updateQty(item.id, Number(e.target.value))}
                              />
                              <Button variant="outline-primary" onClick={(e) => updateQty(item.id, item.qty + 1)}>+</Button>
                              <Button variant="outline-danger" onClick={(e) => updateQty(item.id, item.qty - 1)}>-</Button>
                            </InputGroup>
                            <Button variant="danger" className="mt-2" onClick={(e) => removeCart(item.id)}>Delete</Button>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
            <Col lg="6">
              <Card>
                <Card.Body>
                  <Card.Title>
                    Items
                  </Card.Title>
                  <Card.Text>
                    Total Qty : {totalQty}
                  </Card.Text>
                  <Card.Text>
                    Total : $ {totalPrice}
                  </Card.Text>
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);