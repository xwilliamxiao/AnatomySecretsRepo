import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark" style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
                <Container>
                    {/*--- Homepage tab ---*/}
                    <Navbar.Brand as={NavLink} to="/">
                        Anatomy Secrets
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        {/*--- Workout plan tab ---*/}
                        <Nav.Link as={NavLink} to="/" style={{ borderRadius: '5px' }} activeStyle={{ backgroundColor: '#007bff', color: '#fff' }}>
                            Workout Plan
                        </Nav.Link>
                        {/*--- Exercises tab ---*/}
                        <Nav.Link as={NavLink} to="/exercise-list" style={{ borderRadius: '5px' }} activeStyle={{ backgroundColor: '#007bff', color: '#fff' }}>
                            Exercises
                        </Nav.Link>
                       {/* --- Create tab ---*/}
                        <Nav.Link as={NavLink} to="/create" style={{ borderRadius: '5px' }} activeStyle={{ backgroundColor: '#007bff', color: '#fff' }}>
                            Create
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br />
            <br />
        </>
    );
}

export default NavBar;