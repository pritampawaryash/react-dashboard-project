import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./header.css";

const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="danger"
      className="header"
    >
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav " />
        <Navbar.Collapse id="responsive-navbar-nav ">
          <Nav className="nav">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#company">COMPANY</Nav.Link>
            <Nav.Link href="#services">SERVICES </Nav.Link>
            <Nav.Link href="#products">PRODUCTS</Nav.Link>
            <Nav.Link href="#about">ABOUT</Nav.Link>
            <Nav.Link href="#contact">CONTACT US</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
