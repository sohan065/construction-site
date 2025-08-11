import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AboutUs from '../../assets/images/about-us.jpg';
import Construction2 from '../../assets/images/construction2.jpg';
import Construction3 from '../../assets/images/construction3.jpg';
import Construction4 from '../../assets/images/construction4.jpg';
import Construction5 from '../../assets/images/construction5.jpg';
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
                    <div className="hero d-flex">
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
                {/* about us */ }
                <div className="about-us">
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-md-6">
                                <img src={ AboutUs } alt="" style={ { width: '100%' } } />
                            </div>
                            <div className="col-md-6">
                                <span>about us</span>
                                <h2>Crafting structures that last a lifetime</h2>
                                <p>Building enduring structures requires a comprehensive approach that combines advanced materials, resilient design, routine maintenance, and sustainable practices. By drawing on historical insights and utilizing modern technology.</p>
                                <p>Designing structures that stand the test of time involves a seamless blend of cutting-edge materials, durable design, ongoing upkeep, and eco-friendly practices. By combining lessons from the past with the power of modern technology.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* services */ }
                <div className="services">
                    <div className="container-fluid py-5">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <span>our services</span>
                                <h2>Our construction services</h2>
                                <p>We offer a diverse array of construction services, spanning residential, commercial, and industrial projects.</p>
                            </div>
                        </div>
                        <div className="row mt-4">
                            {/* Service items would go here */ }
                            <div className="col-md-4">
                                <div className="item">
                                    <div className="service-image">
                                        <img src={ Construction2 } alt="" srcset="" />
                                    </div>
                                    <div className="service-body">
                                        <div className="service-title">
                                            <h3>두레Specialty Construction</h3>
                                        </div>
                                        <div className="service-content">
                                            <p>Specialty construction is a niche sector within the construction industry that focuses on projects requiring specialized skills, materials, and techniques.</p>
                                        </div>
                                        <a href="" className='btn btn-primary'>Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="item">
                                    <div className="service-image">
                                        <img src={ Construction3 } alt="" srcset="" />
                                    </div>
                                    <div className="service-body">
                                        <div className="service-title">
                                            <h3>Industrial Construction</h3>
                                        </div>
                                        <div className="service-content">
                                            <p>Specialty construction is a niche sector within the construction industry that focuses on projects requiring specialized skills, materials, and techniques.</p>
                                        </div>
                                        <a href="" className='btn btn-primary'>Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="item">
                                    <div className="service-image">
                                        <img src={ Construction4 } alt="" srcset="" />
                                    </div>
                                    <div className="service-body">
                                        <div className="service-title">
                                            <h3>Building Construction</h3>
                                        </div>
                                        <div className="service-content">
                                            <p>Specialty construction is a niche sector within the construction industry that focuses on projects requiring specialized skills, materials, and techniques.</p>
                                        </div>
                                        <a href="" className='btn btn-primary'>Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* why choose us */ }
                <div className="why-choose-us">
                    <div className="container py-5">
                        <div className="section-header">
                            <span>why choose us</span>
                            <h2>Discover our wide variety of projects.</h2>
                            <p>Created in close partnership with our clients and collaborators, this approach merges industry expertise,
                                decades of experience, innovation, and flexibility to consistently deliver excellence.</p>
                        </div>
                        <div className="row pt-5">
                            <div className="col-md-4">
                                <div className="card p-4">
                                    <div className="card-icon">
                                        <img src="" alt="" srcset="" />
                                    </div>
                                    <div className="card-title">
                                        <h3>Expertise</h3>
                                        <p>Small actions create big impacts. It all begins and ends with each employee committing to safer work practices daily, ensuring they return home safely.</p>
                                    </div>
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