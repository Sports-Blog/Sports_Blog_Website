import React, {useContext} from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavBar.css"
import { Context } from "../../context/context";
import { Link } from "react-router-dom";

function Navbara() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      sticky="top"
      bg="light"
      data-bs-theme="light"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src="/logo.png"
            alt="Sports Blog"
            className="navbar-logo"
          /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center gap-3">
            {user && (
            <Nav.Link href="/newArticle">ADD NEW ARTICLE</Nav.Link>
            )}
              { user ? ( <> <Link to="/settings" className="d-inline-flex align-items-center">
                  <img className="topImg" src={PF + user.profilePic} alt="Profile" />
            </Link>
              <NavDropdown title="ACCOUNT" id="basic-nav-dropdown">
              <NavDropdown.Item href="/settings">MY ACCOUNT</NavDropdown.Item>
              <NavDropdown.Item onClick={handleLogout}>{user && "LOGOUT"}</NavDropdown.Item>
              </NavDropdown></>) : (
                <>
                <NavDropdown title="ACCOUNT" id="basic-nav-dropdown">
              <NavDropdown.Item href="/login">LOGIN</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/register">
                CREATE ACCOUNT
              </NavDropdown.Item>
              </NavDropdown>
              </>
              )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbara;
