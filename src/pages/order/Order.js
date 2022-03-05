import './Order.css';
import NavBar from '../../components/navbar/NavBar.component';
import Footer from '../../components/footer/Footer.component';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

function Order(props) {
  let params = useParams();

  const [item, setItems] = useState([]);

  useEffect(() => {
    props.payload.map((prod) => {
      if (prod.id == params.data) {
        setItems(prod)
      }
    })
  }, [params.data]);

  return (
    <>
      <NavBar />
      <Container>
        <div className="full-container">
          <Card className="mt-5">
            <Card.Body>
              <Row>
                <Col lg="4">
                  <Card.Img variant="top" src={item.image} />
                </Col>
                <Col lg="8">
                  <Card.Title>
                    {item.title}
                  </Card.Title>
                  <Card.Text>
                    $ {item.price}
                  </Card.Text>
                  <Card.Text>
                    {item.description}
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

const mapStateToProps = (state) => {
  return {
    payload: state.payload,
  }
}

export default connect(mapStateToProps)(Order);