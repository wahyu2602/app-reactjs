import './Order.css';
import NavBar from '../../components/navbar/NavBar.component';
import Footer from '../../components/footer/Footer.component';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';

function Order() {
  let params = useParams();

  const [item, setItems] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/prod/${params.data}`)
      .then(
        (result) => {
          setItems(result.data);
        }
      )
  }, [params.data]);

  return (
    <>
      <NavBar />
      <Container>
        <div className="full-container">
          <Card className="mt-5">
            <Card.Body>
              <Row>
                <Col lg="6">
                  <Card.Img variant="top" src={item.image} />
                </Col>
                <Col lg="6">
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
        </div>
      </Container>
      <Footer />
    </>
  )
}

export default Order;