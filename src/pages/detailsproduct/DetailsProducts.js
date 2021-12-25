import './DetailsProducts.css';
import NavBar from '../../components/navbar/NavBar.component';
import Footer from '../../components/footer/Footer.component';
import { Container, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function DetailsProducts() {
  return (
    <>
      <NavBar />
      <Container>
        <div className="full-container">
          <Card className="mt-5">
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
              <Card.Title>Nike</Card.Title>
              <Card.Text>
                Deskripsi Products
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                <p>Deskripsi Products</p>
                <p>Ini adalah deskripsi Product dari kami product yang kami jual asli dan bukan abal-abal atau KW</p>
              </ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Link className="btn btn-success" to="/order">
                Buy Now
              </Link>
            </Card.Body>
          </Card>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default DetailsProducts;