import React from "react";
import "./header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <Navbar expand="lg" className="custom-navbar">
                <Container>

                    <Navbar.Brand as={Link} to="/" className="navbar-title">
                        <strong>Real Estate</strong>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/sale">Sale</Nav.Link>
                            <Nav.Link as={Link} to="/rent">Rent</Nav.Link>
                            <Nav.Link as={Link} to="/advertise">Advertise</Nav.Link>
                            <Nav.Link as={Link} to="/faq">FAQ</Nav.Link>
                        </Nav>

                        <ul className="nav navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/signup">
                                    <FontAwesomeIcon icon={faUser} /> Sign Up
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/login">
                                    <FontAwesomeIcon icon={faSignInAlt} /> Login
                                </Link>
                            </li>
                        </ul>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
