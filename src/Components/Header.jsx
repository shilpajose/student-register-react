import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <>
            <Navbar expand="lg" className="bg-primary">
                <Container>
                    <Navbar.Brand href="#home" className='text-light'>Student Data</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home" className='text-light'>Home</Nav.Link>
                            <Nav.Link href="#link" className='text-light'>Contact us</Nav.Link>
                            <Nav.Link href="#link" className='text-light'>About us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header