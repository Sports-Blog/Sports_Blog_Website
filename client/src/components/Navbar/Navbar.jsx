import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image"
import "./NavBar.css"



function Navbara() {
  const user = false;
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      sticky="top"
      bg="light"
      data-bs-theme="light"
    >
      <Container>
        <Navbar.Brand href="/">Sports Blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link href="/newArticle">NEW ARTICLE</Nav.Link>
              { user ? ( <><Image src="https://image.winudf.com/v2/image1/bmV0LndsbHBwci5ib3lzX3Byb2ZpbGVfcGljdHVyZXNfc2NyZWVuXzBfMTY2NzUzNzYxN18wOTk/screen-0.webp?fakeurl=1&type=.webp" className="topImg"/> <NavDropdown title="ACCOUNT" id="basic-nav-dropdown">
              <NavDropdown.Item href="/settings">MY ACCOUNT</NavDropdown.Item>
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
