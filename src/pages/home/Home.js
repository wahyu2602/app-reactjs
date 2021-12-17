import NavBar from "../../components/navbar/NavBar.component";
import CardComponent from "../../components/card/Card.component";
import Footer from "../../components/footer/Footer.component";
import { Container, Row, Col } from "react-bootstrap";
import "./Home.css";
import nikeWhite from '../../assets/images/nike-white.jpg';
import nikeRed from '../../assets/images/nike-red.jpg';
import nikeBrown from '../../assets/images/nike-brown.jpg';
import nikeAirMax from '../../assets/images/nike-air-max.jpg';
import nikeAirForce from '../../assets/images/nike-air-force.jpg';
import adidasWhite from '../../assets/images/adidas-white.jpg';

export default function Home() {
  return (
    <div>
      <NavBar />
      <Container className="mt-5">
        <div className="full-container">
          <Row>
            <Col lg="3">
              <CardComponent image={nikeWhite} title="NIKE" price="Rp. 200.000" stockStatus="Stock Ready" />
            </Col>
            <Col lg="3">
              <CardComponent image={nikeRed} title="NIKE" price="Rp. 220.000" stockStatus="Stock Ready" />
            </Col>
            <Col lg="3">
              <CardComponent image={nikeAirMax} title="NIKE AIR MAX" price="Rp. 300.000" stockStatus="Stock Ready" />
            </Col>
            <Col lg="3">
              <CardComponent image={nikeBrown} title="NIKE BROWN" price="Rp. 220.000" stockStatus="Stock Ready" />
            </Col>
            <Col lg="3">
              <CardComponent image={nikeAirForce} title="NIKE AIR FORCE" price="Rp. 320.000" stockStatus="Stock Ready" />
            </Col>
            <Col lg="3">
              <CardComponent image={adidasWhite} title="ADIDAS WHITE" price="Rp. 350.000" stockStatus="Stock Ready" />
            </Col>
          </Row>
        </div>
      </Container>
      <Footer />
    </div>
  )
}