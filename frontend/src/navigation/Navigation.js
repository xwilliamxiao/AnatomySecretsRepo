/*
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Anatomy Secrets</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#WorkoutPlan">Home</Nav.Link>
                        <Nav.Link href="#Exercise">Exercises</Nav.Link>
                        <Nav.Link href="#Create">Create</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br />
            <br />
        </>
    );
}

export default NavBar;*/

import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

/*
function NavBar() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/" activeClassName="active">
                        Anatomy Secrets
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/" activeClassName="active">
                            Workout Plan
                        </Nav.Link>
                        <Nav.Link as={Link} to="/exercise-list" activeClassName="active">
                            Exercises
                        </Nav.Link>
                        <Nav.Link as={Link} to="/create-workout" activeClassName="active">
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

export default NavBar;*/

function NavBar() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark" style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
                <Container>
                    <Navbar.Brand as={NavLink} to="/">
                        Anatomy Secrets
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/" style={{ borderRadius: '5px' }} activeStyle={{ backgroundColor: '#007bff', color: '#fff' }}>
                            Workout Plan
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/exercise-list" style={{ borderRadius: '5px' }} activeStyle={{ backgroundColor: '#007bff', color: '#fff' }}>
                            Exercises
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/create-workout" style={{ borderRadius: '5px' }} activeStyle={{ backgroundColor: '#007bff', color: '#fff' }}>
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