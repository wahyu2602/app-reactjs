import './Order.css';
import NavBar from '../../components/navbar/NavBar.component';
import Footer from '../../components/footer/Footer.component';
import { Container, Card, Row, Col, Image, Button, InputGroup, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import { updateQtyOrder, addCart } from '../../config/redux/dispatch';

function Order({ item, updateQtyOrder, addCart }) {
  return (
    <>
      <NavBar />
      <Container>
        <div className="full-container">
          <Row className="mt-5">
            <Col lg="6" >
              <Row>
                <Col className="col-12">
                  <Card>
                    <Card.Body>
                      <Row>
                        <Col className="col-6">
                          <Image className="img-100" src={item.image} alt={item.title} fluid />
                        </Col>
                        <Col className="col-6">
                          <Card.Title>
                            {item.title}
                          </Card.Title>
                          <p className="sub-text text-secondary mt-2">{item.category}</p>
                          <Card.Text>
                            Price : $ {item.price}
                          </Card.Text>
                        </Col>
                        <Card.Text className="mt-3">
                          Description :
                        </Card.Text>
                        <Card.Text>
                          {item.description}
                        </Card.Text>
                        <Button variant="primary" className="mt-2" onClick={(e) => addCart(item.id)}>Add To Cart</Button>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col lg="6">
              <Card>
                <Card.Body>
                  <Card.Title>
                    Item
                  </Card.Title>
                  <Card.Text>
                    Total Price : $ {item.totalPrice}
                  </Card.Text>
                  <Col className="col-lg-4 col-6">
                    <Card.Text>
                      Qty : {item.qty}
                    </Card.Text>
                    <InputGroup>
                      <FormControl
                        type="number"
                        value={item.qty}
                        onChange={(e) => updateQtyOrder(item.id, Number(e.target.value))}
                      />
                      <Button variant="outline-primary" onClick={(e) => updateQtyOrder(item.id, item.qty + 1)}>+</Button>
                      <Button variant="outline-danger" onClick={(e) => updateQtyOrder(item.id, item.qty - 1)}>-</Button>
                    </InputGroup>
                  </Col>
                  <Button variant="success" className="mt-2">Process</Button>
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
    item: state.prodItem,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateQtyOrder: (id, value) => dispatch(updateQtyOrder(id, value)),
    addCart: (id) => dispatch(addCart(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Order);

