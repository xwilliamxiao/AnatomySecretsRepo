import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg" style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
                <Container>
                    {/* --- Homepage tab --- */}
                    <Navbar.Brand as={NavLink} to="/">
                        Anatomy Secrets
                    </Navbar.Brand>
                    {/* --- Hamburger menu button for small screens --- */}
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    {/* --- Navbar links, will be collapsed on small screens --- */}
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {/* --- Workout plan tab --- */}
                            <Nav.Link as={NavLink} to="/" style={{ borderRadius: '5px' }} activeStyle={{ backgroundColor: '#007bff', color: '#fff' }}>
                                Workout Plan
                            </Nav.Link>
                            {/* --- Exercises tab --- */}
                            <Nav.Link as={NavLink} to="/exercise-list" style={{ borderRadius: '5px' }} activeStyle={{ backgroundColor: '#007bff', color: '#fff' }}>
                                Exercises
                            </Nav.Link>
                            {/* --- Create tab --- */}
                            <Nav.Link as={NavLink} to="/create" style={{ borderRadius: '5px' }} activeStyle={{ backgroundColor: '#007bff', color: '#fff' }}>
                                Create
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <br />
            <br />
        </>
    );
}

export default NavBar;