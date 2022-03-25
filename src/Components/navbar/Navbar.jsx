import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Nav,
  Container,
  NavDropdown,
  Navbar as Navbars,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  return (
    <Navbars collapseOnSelect expand="lg" variant="dark" className="sticky-nav">
      <Container>
        <Navbars.Brand>
          <Link to="/" className="navbarBrand">
            <img src="/logo.png" alt="" />
          </Link>
        </Navbars.Brand>
        <Navbars.Toggle aria-controls="responsive-navbar-nav" />
        <Navbars.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="linking" style={{ textDecoration: "none" }}>
              <span className="linking">Home</span>
            </Link>

            <Link
              to="/cinemas"
              className="linking"
              style={{ textDecoration: "none" }}
            >
              <span className="linking">Theaters</span>
            </Link>

            <Link
              to="/blogs"
              className="linking"
              style={{ textDecoration: "none" }}
            >
              <span className="linking">Blogs</span>
            </Link>
          </Nav>
          <Nav>
            <NavDropdown title="Account" id="collasible-nav-dropdown">
              <Link
                to="/tickets"
                className="linking"
                style={{ textDecoration: "none" }}
              >
                <span className="linking rightLinks">My Tickets</span>
              </Link>
              <NavDropdown.Divider />
              <Link
                to="/account"
                className="linking"
                style={{ textDecoration: "none" }}
              >
                <span className="linking rightLinks">Log Out</span>
              </Link>
            </NavDropdown>
          </Nav>
        </Navbars.Collapse>
      </Container>
    </Navbars>
  );
};

export default Navbar;
