import React from "react";
import "./header.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <div>
             <Navbar expand="lg" className="custom-navbar"> {/* Fixed className */}
                 <Container>
                     <Navbar.Brand href="#home">Real Estate</Navbar.Brand>
                     <Navbar.Toggle aria-controls="basic-navbar-nav" />
                     <Navbar.Collapse id="basic-navbar-nav">
                         <Nav className="me-auto my-2 my-lg-0"
                             style={{ maxHeight: '100px' }}
                             navbarScroll
                         >
                             <Nav.Link href="#home">Home</Nav.Link>
                             <Nav.Link href="#sale">Houses For Sale</Nav.Link>
                             <Nav.Link href="#rent">Houses For Rent</Nav.Link>
                             <Nav.Link href="#ad_Submission">Ad Submission</Nav.Link>
                             <Nav.Link href="#faq">Frequently Asked Questions</Nav.Link>
                         </Nav>
                         <Form className="d-flex">
                             <Form.Control
                                 type="search"
                                 placeholder="Search"
                                 className="me-2"
                                 aria-label="Search"
                             />
                             <Button variant="outline-secondary">Search</Button>
                         </Form>
                     </Navbar.Collapse>
                 </Container>
             </Navbar>
        </div>
    )
}

export default Header;
