import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Home = () => {
    return (
        <>
            <header>
                <div className="container py-3">
                    <Navbar expand="lg" className="">
                        <Container>
                            <Navbar.Brand href="#home" className='logo'><span>Urbanedge</span>construction</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ms-auto">
                                    <Nav.Link href="#home" className='nav-link'>Home</Nav.Link>
                                    <Nav.Link href="#link" className='nav-link'>About Us</Nav.Link>
                                    <Nav.Link href="#link" className='nav-link'>Services</Nav.Link>
                                    <Nav.Link href="#link" className='nav-link'>Projects</Nav.Link>
                                    <Nav.Link href="#link" className='nav-link'>Blogs</Nav.Link>
                                    <Nav.Link href="#link" className='nav-link'>Contact Us</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </header>

            <main>
                <div className="section-1">
                    <div className="hero">
                        <div className="container-fluid d-flex align-items-center justify-content-center">
                            <div className="hero-content">
                                <span>Welcome Amazing Constructions</span>
                                <h1>Crafting dreams with<br />
                                    precision and excellence.
                                </h1>
                                <p>We excel at transforming visions into reality through outstanding craftsmanship and precise<br />
                                    attention to detail. With years of experience and a dedication to quality.</p>
                                <div className="mb-3">
                                    <a href="#services" className="btn btn-primary">Contact Now</a>
                                    <a href="#services" className="btn btn-secondary ms-3">View Projects</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home