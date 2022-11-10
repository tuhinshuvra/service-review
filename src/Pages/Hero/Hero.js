import React from 'react';
import { Link } from 'react-router-dom';
import Electronics from '../../assets/images/Electronic.jpg'

const Hero = () => {
    return (
        <div>
            <div className="container col-xxl-8 px-md-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-md-10 col-sm-8 col-lg-6">
                        <img src={Electronics} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                    </div>
                    <div className="col-lg-6">
                        <h3 className="display-5 fw-bold lh-1 mb-3">Electronics Doctor Provide Service 24/7 </h3>
                        <p className="lead">I provide my service every day 24/7. My people will will response your contact any time with cordially. The will get you better suggestion for the solution.</p>
                        <div className=" d-md-grid gap-2 d-md-flex justify-content-md-start">
                            <Link to="/services"> <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Services</button></Link>
                            <Link to="/login"> <button type="button" className="btn btn-outline-secondary btn-lg px-4">Login</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;