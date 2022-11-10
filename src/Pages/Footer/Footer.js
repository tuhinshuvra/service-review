import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo/online-service.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className=''>
            <div className=' text-center'>

                <footer className="">
                    <div className=" d-flex">
                        <div className="col-4 col-md-4 mb-3">
                            <h5 className='fw-bold'>Top Section</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Home</Link></li>
                                <li className="nav-item mb-2"><Link to="/services" className="nav-link p-0 text-muted">Services</Link></li>
                                <li className="nav-item mb-2"><Link to="/blog" className="nav-link p-0 text-muted">Blog</Link></li>
                            </ul>
                        </div>

                        <div className="col-4 col-md-4 mb-3">
                            <h5 className='fw-bold'>Service</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><Link to="/services" className="nav-link p-0 text-muted">All Service</Link></li>
                                <li className="nav-item mb-2"><Link to="/register" className="nav-link p-0 text-muted">Register</Link></li>
                                <li className="nav-item mb-2"><Link to="/login" className="nav-link p-0 text-muted">Login</Link></li>
                            </ul>
                        </div>


                        <div className="col-md-2 offset-md-1 mb-3">

                            <Link to="#" ><Image style={{ width: "100px" }} src={Logo} alt='' ></Image></Link>
                            <div className='d-flex flex-column'>
                                <h5 className=' text-success fw-bold'>Thanks for Visiting</h5>
                                <Link className=' text-decoration-none fw-bolder text-dark' to="/register">Register</Link>
                                <Link className=' text-decoration-none fw-bolder text-dark' to="/login" >Login</Link>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <hr />
                        <p className='text-center fw-bold'>Copyright @ 2022. All right reserved by Tuhin Shuvra</p>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;