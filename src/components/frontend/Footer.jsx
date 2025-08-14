import React from 'react'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer-content">
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-md-3">
                                <h3 className='mb-3'>UrbanEdge Constructions</h3>
                                <div className="">
                                    <p>Our post-construction services gives you peace of mind knowing that we are still here for you even after.</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <h3 className='mb-3'>Our Services</h3>
                                <ul>
                                    <li><a href="">Specialty Construction</a></li>
                                    <li><a href="">Specialty Construction</a></li>
                                    <li><a href="">Specialty Construction</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <h3 className='mb-3'>Quick Links</h3>
                                <ul>
                                    <li><a href="">About Us</a></li>
                                    <li><a href="">Services</a></li>
                                    <li><a href="">Projects</a></li>
                                    <li><a href="">Blogs</a></li>
                                    <li><a href="">Contact Us</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <h3 className='mb-3'>Contact Us</h3>
                                <ul>
                                    <li><a href="">(888-000-0000)</a></li>
                                    <li><a href="">info@example.com</a></li>
                                    <p>TK Bhabon, Karwan Bazar <br /> Dhaka, Bangladesh, 1250 <br />
                                        0522400XXXX</p>
                                </ul>
                            </div>
                        </div>
                        <hr />
                        <div className="text-center">
                            <p className='mb-0'>© 2023 UrbanEdge Constructions. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer
