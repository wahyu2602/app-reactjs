import './Cart.css';
import NavBar from '../../components/navbar/NavBar.component';
import Footer from '../../components/footer/Footer.component';
import { Container, Card, Row, Col, Image } from 'react-bootstrap';
import { connect } from 'react-redux';

function Cart({ cart }) {
  return (
    <>
      <NavBar />
      <Container>
        <div className="full-container">
          <Row className="mt-5">
            <Col className="col-6" >
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
                              $ {item.price}
                            </Card.Text>
                            <Card.Text>
                              Qty : {item.qty}
                            </Card.Text>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
            <Col className="col-6">
              <Card>
                <Card.Body>
                  <Card.Title>
                    Items
                  </Card.Title>
                  <Card.Text>
                    Total Qty :
                  </Card.Text>
                  <Card.Text>
                    Total : $
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

export default connect(mapStateToProps, null)(Cart);