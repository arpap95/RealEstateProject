import React from "react";
import "./header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSignInAlt } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
        <div>
            <Navbar expand="lg" className="custom-navbar">
                <Container>
                    {/* Navbar Title */}
                    <Navbar.Brand href="#home" className="navbar-title">
                        <strong>Real Estate</strong>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        {/* Navigation Links */}
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#sale">Sale</Nav.Link>
                            <Nav.Link href="#rent">Rent</Nav.Link>
                            <Nav.Link href="#ad_Submission">Advertise</Nav.Link>
                            <Nav.Link href="#faq">FAQ</Nav.Link>
                        </Nav>

                        {/* Sign Up and Login */}
                        <ul className="nav navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">
                                    <FontAwesomeIcon icon={faUser} /> Sign Up
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">
                                    <FontAwesomeIcon icon={faSignInAlt} /> Login
                                </a>
                            </li>
                        </ul>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
