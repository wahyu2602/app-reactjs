import './Order.css';
import NavBar from '../../components/navbar/NavBar.component';
import Footer from '../../components/footer/Footer.component';
import { Container, Card, Row, Col } from 'react-bootstrap';

function Order() {
  return (
    <>
      <NavBar />
      <Container>
        <div className="full-container">
          <Card className="mt-5">
            <Card.Body>
              <Row>
                <Col lg="6">
                  <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                </Col>
                <Col lg="6">
                  <Card.Title>
                    Nike
                  </Card.Title>
                  <Card.Text>

                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>
      </Container>
      <Footer />
    </>
  )
}

export default Order;