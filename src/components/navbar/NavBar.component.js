import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import "./NavBar.component.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { useEffect, useState } from "react";

function NavBar({ cart }) {

  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach(item => {
      count += item.qty
    });

    setCartCount(count);
  }, [cart, cartCount])

  const handleCart = () => {
    if (cartCount > 0) {
      return (
        <Link className="nav-link cart text-white" to="/cart">
          <span className="sub-icons">{cartCount}</span>
          <FontAwesomeIcon icon={faShoppingCart} />
        </Link>
      )
    } else {
      return (
        <div className="nav-link cart text-white">
          <FontAwesomeIcon icon={faShoppingCart} />
        </div>
      )
    }
  }

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Link className="navbar-brand" to="/">
            Happy Shop
          </Link>
          <Nav className="ms-auto">
            {handleCart()}
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  }
}

export default connect(mapStateToProps)(NavBar);
