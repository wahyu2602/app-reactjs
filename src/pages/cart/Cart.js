import './Cart.css';
import NavBar from '../../components/navbar/NavBar.component';
import Footer from '../../components/footer/Footer.component';
import { Container, Card, Row, Col, Image } from 'react-bootstrap';
import { connect } from 'react-redux';

function Cart(props) {
  return (
    <>
      <NavBar />
      <Container>
        <div className="full-container">
          <Row className="mt-5">
            {props.cart.map(item => (
              <Col lg="12" key={item.id}>
                <Card>
                  <Card.Body>
                    <Row>
                      <Col className="col-6">
                        <Image className="img-100" src={item.image} fluid />
                      </Col>
                      <Col className="col-6">
                        <Card.Title>
                          {item.merk}
                        </Card.Title>
                        <Card.Text>
                          Rp. {item.harga}
                        </Card.Text>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
      <Footer />
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    cart: state.carts,
  }
}

export default connect(mapStateToProps, null)(Cart);