import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import './Footer.css';

function Footer() {
  return (
    <footer className=" bg-dark text-white mt-5 pt-4 pb-3">
      <Container fluid>
        <Row>
          <Col md={4} className="mb-3">
            <h5>About Us</h5>
            <p>
              We are a leading real estate agency dedicated to helping you find your dream home. Our team of experienced professionals is here to assist you every step of the way.
            </p>
          </Col>
          <Col md={4} className="mb-3">
            <h5>Quick Links</h5>
            <Nav className="flex-column">
              <Nav.Link href="#home" className="text-white">Home</Nav.Link>
              <Nav.Link href="#properties" className="text-white">Properties</Nav.Link>
              <Nav.Link href="#about" className="text-white">About Us</Nav.Link>
              <Nav.Link href="#contact" className="text-white">Contact</Nav.Link>
            </Nav>
          </Col>
          <Col md={4} className="mb-3">
            <h5>Contact Us</h5>
            <p>
              Email: <a href="mailto:info@realestate.com" className="text-white">info@realestate.com</a>
            </p>
            <p>
              Phone: <a href="tel:+1234567890" className="text-white">+1 234 567 890</a>
            </p>
            <p>
              Follow us: 
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white mx-1">Facebook</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white mx-1">Twitter</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white mx-1">Instagram</a>
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-3">
            <p>&copy; {new Date().getFullYear()} Real Estate. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
