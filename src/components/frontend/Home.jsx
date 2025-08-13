import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AboutUs from '../../assets/images/about-us.jpg';
import Construction2 from '../../assets/images/construction2.jpg';
import Construction3 from '../../assets/images/construction3.jpg';
import Construction4 from '../../assets/images/construction4.jpg';
import Construction5 from '../../assets/images/construction5.jpg';
import Icon1 from '../../assets/images/icon-1.svg';
import Icon2 from '../../assets/images/icon-2.svg';
import Icon3 from '../../assets/images/icon-3.svg';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
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
                                        <img src={ Construction2 } alt="" srcSet="" />
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
                                        <img src={ Construction3 } alt="" srcSet="" />
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
                                        <img src={ Construction4 } alt="" srcSet="" />
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
                                <div className="card shadow p-4">
                                    <div className="card-icon">
                                        <img src={ Icon1 } alt="" srcSet="" />
                                    </div>
                                    <div className="card-title">
                                        <h3>Expertise</h3>
                                        <p>Small actions create big impacts. It all begins and ends with each employee committing to safer work practices daily, ensuring they return home safely.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="card shadow p-4">
                                    <div className="card-icon">
                                        <img src={ Icon2 } alt="" srcSet="" />
                                    </div>
                                    <div className="card-title">
                                        <h3>Cutting-Edge Solutions</h3>
                                        <p>Small actions create big impacts. It all begins and ends with each employee committing to safer work practices daily, ensuring they return home safely.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="card shadow p-4">
                                    <div className="card-icon">
                                        <img src={ Icon3 } alt="" srcSet="" />
                                    </div>
                                    <div className="card-title">
                                        <h3>Cutting-Edge Solutions</h3>
                                        <p>Small actions create big impacts. It all begins and ends with each employee committing to safer work practices daily, ensuring they return home safely.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* our projects */ }
                <div className="our-projects bg-light">
                    <div className="container py-5">
                        <div className="section-header">
                            <span>our projects</span>
                            <h2>Explore our recent projects</h2>
                            <p>We take pride in our diverse portfolio, showcasing our expertise across various sectors and project types.</p>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <div className="item">
                                    <div className="service-image">
                                        <img src="https://urbenedge.liveprojectlab.in/uploads/projects/small/17383940062.jpg" alt="" srcSet="" />
                                    </div>
                                    <div className="service-body">
                                        <div className="service-title">
                                            <h3>Goa Project 2025</h3>
                                        </div>
                                        <div className="service-content">
                                            <p>Specialty construction is a niche sector within the construction industry that focuses on projects requiring specialized skills, materials, and techniques.</p>
                                        </div>
                                        <a href="" className='btn btn-primary'>Read More</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="item">
                                    <div className="service-image">
                                        <img src="https://urbenedge.liveprojectlab.in/uploads/projects/small/17383940062.jpg" alt="" srcSet="" />
                                    </div>
                                    <div className="service-body">
                                        <div className="service-title">
                                            <h3>Goa Project 2025</h3>
                                        </div>
                                        <div className="service-content">
                                            <p>Specialty construction is a niche sector within the construction industry that focuses on projects requiring specialized skills, materials, and techniques.</p>
                                        </div>
                                        <a href="" className='btn btn-primary'>Read More</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="item">
                                    <div className="service-image">
                                        <img src="https://urbenedge.liveprojectlab.in/uploads/projects/small/17383940062.jpg" alt="" srcSet="" />
                                    </div>
                                    <div className="service-body">
                                        <div className="service-title">
                                            <h3>Goa Project 2025</h3>
                                        </div>
                                        <div className="service-content">
                                            <p>Specialty construction is a niche sector within the construction industry that focuses on projects requiring specialized skills, materials, and techniques.</p>
                                        </div>
                                        <a href="" className='btn btn-primary'>Read More</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="item">
                                    <div className="service-image">
                                        <img src="https://urbenedge.liveprojectlab.in/uploads/projects/small/17383940062.jpg" alt="" srcSet="" />
                                    </div>
                                    <div className="service-body">
                                        <div className="service-title">
                                            <h3>Goa Project 2025</h3>
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
                {/* testimonials */ }
                <div className="testimonials">
                    <div className="container py-5">
                        <div className="section-header">
                            <span>Testimonials</span>
                            <h2>What people are saying about us</h2>
                            <p>We take pride in our diverse portfolio, showcasing our expertise across various sectors and project types.</p>
                        </div>

                        <Swiper
                            spaceBetween={ 50 }
                            slidesPerView={ 3 }
                            modules={ [Pagination] }
                            pagination={ { clickable: true } }
                        >
                            <SwiperSlide>
                                <div className="card shadow">
                                    <div className="rating">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                                        </svg>
                                    </div>
                                    <div className="card-body">
                                        <p className='card-text'>“Urbanedge Construction exceeded our expectations with their professionalism and attention to detail. Our project was completed on time and within budget, and the quality of work is outstanding.”</p>
                                    </div>
                                    <hr />
                                    <div className="d-flex align-items-center justify-content-center p-3">
                                        <div className="img">
                                            <img src="https://urbenedge.liveprojectlab.in/uploads/testimonials/17383942924.jpg" alt="" srcSet="" />
                                        </div>
                                        <div className="ps-3">
                                            <div className="name">Shivani</div>
                                            <p>Project Manager, ABC Corp</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card shadow">
                                    <div className="rating">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                                        </svg>
                                    </div>
                                    <div className="card-body">
                                        <p className='card-text'>“Urbanedge Construction exceeded our expectations with their professionalism and attention to detail. Our project was completed on time and within budget, and the quality of work is outstanding.”</p>
                                    </div>
                                    <hr />
                                    <div className="d-flex align-items-center justify-content-center p-3">
                                        <div className="img">
                                            <img src="https://urbenedge.liveprojectlab.in/uploads/testimonials/17383942924.jpg" alt="" srcSet="" />
                                        </div>
                                        <div className="ps-3">
                                            <div className="name">Shivani</div>
                                            <p>Project Manager, ABC Corp</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card shadow">
                                    <div className="rating">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                                        </svg>
                                    </div>
                                    <div className="card-body">
                                        <p className='card-text'>“Urbanedge Construction exceeded our expectations with their professionalism and attention to detail. Our project was completed on time and within budget, and the quality of work is outstanding.”</p>
                                    </div>
                                    <hr />
                                    <div className="d-flex align-items-center justify-content-center p-3">
                                        <div className="img">
                                            <img src="https://urbenedge.liveprojectlab.in/uploads/testimonials/17383942924.jpg" alt="" srcSet="" />
                                        </div>
                                        <div className="ps-3">
                                            <div className="name">Shivani</div>
                                            <p>Project Manager, ABC Corp</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card shadow">
                                    <div className="rating">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                                        </svg>
                                    </div>
                                    <div className="card-body">
                                        <p className='card-text'>“Urbanedge Construction exceeded our expectations with their professionalism and attention to detail. Our project was completed on time and within budget, and the quality of work is outstanding.”</p>
                                    </div>
                                    <hr />
                                    <div className="d-flex align-items-center justify-content-center p-3">
                                        <div className="img">
                                            <img src="https://urbenedge.liveprojectlab.in/uploads/testimonials/17383942924.jpg" alt="" srcSet="" />
                                        </div>
                                        <div className="ps-3">
                                            <div className="name">Shivani</div>
                                            <p>Project Manager, ABC Corp</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>

                    </div>
                </div>
                {/* blogs */ }
                <div className="blogs">
                    <div className="container py-5">
                        <div className="section-header">
                            <span>Blog & News</span>
                            <h2>Latest news and insights</h2>
                            <p>Stay updated with the latest trends, technologies, and insights in the construction industry.</p>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card shadow">
                                    <div className="card-image-top">
                                        <img src="https://urbenedge.liveprojectlab.in/uploads/articles/small/17383946732.jpg" alt="" srcSet="" />
                                    </div>
                                    <div className="card-body py-4">
                                        <h3>Innovative Construction Techniques for 2025</h3>
                                        <p>Explore the latest advancements in construction technology and how they are shaping the future of the industry.</p>
                                        <a href="" className='btn btn-primary'>Read More</a>
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