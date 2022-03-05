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
import { useDispatch } from 'react-redux';
import { TypeAction } from "../../config/redux/constanta";
import { connect } from 'react-redux';

function Home({ products }) {
  const [error, setError] = useState(null);
  const [items, setItems] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!items) {
      axios.get("https://fakestoreapi.com/products")
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(true)
            dispatch({ type: TypeAction.TODOS_LOADED, products: result.data })
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }
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
              {products.map(item => (
                <Col key={item.id} lg="3">
                  <CardComponent data={item.id} image={item.image} title={item.title} price={item.price} stockStatus={item.category} description={item.description} />
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

const mapStateToProps = (state) => {
  return {
    products: state.products,
  }
}

export default connect(mapStateToProps)(Home);