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
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadProducts, statusLoad } from '../../config/redux/dispatch';
import { API, dataProducts } from '../../config/services';
import Banner from "../../components/banner/Banner.component";

function Home({ products, loadProducts, statusLoad, getStatusLoad }) {
  useEffect(() => {
    if (!getStatusLoad) {
      API.get("products")
        .then(
          (result) => {
            statusLoad(true);
            loadProducts(result.data);
          }
        ).catch(() => {
          statusLoad(true);
          loadProducts(dataProducts)
        })
    }
  }, [loadProducts, products, statusLoad, getStatusLoad])

  if (!getStatusLoad) {
    return (
      <div>
        <NavBar />
        <Banner />
        <Container className="mt-5">
          <div className="full-container">
            <Row>
              <p className="text-center">Loading ...</p>
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
        <Banner />
        <Container className="mt-5">
          <div className="full-container">
            <Row>
              {products.map(item => (
                <Col key={item.id} lg="3">
                  <CardComponent data={item} />
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
    getStatusLoad: state.statusLoad,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadProducts: (products) => dispatch(loadProducts(products)),
    statusLoad: (boolean) => dispatch(statusLoad(boolean),)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);