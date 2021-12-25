import NavBar from "../../components/navbar/NavBar.component";
import CardComponent from "../../components/card/Card.component";
import Footer from "../../components/footer/Footer.component";
import { Container, Row, Col } from "react-bootstrap";
import "./Home.css";
// import nikeWhite from '../../assets/images/nike-white.jpg';
// import nikeRed from '../../assets/images/nike-red.jpg';
// import nikeBrown from '../../assets/images/nike-brown.jpg';
// import nikeAirMax from '../../assets/images/nike-air-max.jpg';
// import nikeAirForce from '../../assets/images/nike-air-force.jpg';
// import adidasWhite from '../../assets/images/adidas-white.jpg';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/prod")
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <div>
        <NavBar />
        <Container className="mt-5">
          <div className="full-container">
            <Row className="jutify-content-center align-items-center">
              <Col>
                <p className="text-center">Is Loading ...</p>
              </Col>
            </Row>
          </div>
        </Container>
        <Footer />
      </div>
    )
  } else {
    return (
      <div>
        <NavBar />
        <Container className="mt-5">
          <div className="full-container">
            <Row>
              {items.map(item => (
                <Col key={item.id} lg="3">
                  <CardComponent data={item.id} image={item.image} title={item.merk} price={item.harga} stockStatus={item.status} />
                </Col>
              ))}
            </Row>
          </div>
        </Container>
        <Footer />
      </div>
    )
  }
}
