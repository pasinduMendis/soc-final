import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import {
  Button,
  Nav,
  Container,
  NavDropdown,
  Navbar as Navbars,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = (props) => {
  const [user, setUser] = useState('')
  var token=localStorage.getItem("token")
  useEffect(() => {
    axios.post('https://soc-server-web.herokuapp.com/user/getData',{token:token}).then((res)=>{
    console.log(res.data.user.name)
    setUser(res.data.user.name)
  })
  }, [])
  
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
            <NavDropdown title={user?user:"Account"} id="collasible-nav-dropdown">
              <Link
                to="/tickets"
                className="linking"
                style={{ textDecoration: "none" }}
              >
                <span className="linking rightLinks">My Tickets</span>
              </Link>
              <NavDropdown.Divider />
              <Link
                to="/login"
                className="linking"
                style={{ textDecoration: "none" }}
                onClick={()=>{localStorage.removeItem("token");props.ChanegeToken(null)}}
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
