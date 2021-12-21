import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import "./NavBar.component.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';

function NavBar(props) {

  // const addCart = {
  //   add: 1
  // }

  const handleCart = () => {
    if (props.order > 0) {
      return (
        <Link className="nav-link me-5 cart text-white" to="/carts">
          <span className="sub-icons">{props.order}</span>
          <FontAwesomeIcon icon={faShoppingCart} />
        </Link>
      )
    } else {
      return (
        <div className="nav-link me-5 cart text-white">
          <span className="sub-icons d-none">{props.order}</span>
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
            Sepatu Kekini
          </Link>
          <Nav className="ms-auto">
            {handleCart()}
            <Link className="nav-link btn btn-success text-white" to="/login">
              Login
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    order: state.totalOrder,
  }
}

export default connect(mapStateToProps)(NavBar);
