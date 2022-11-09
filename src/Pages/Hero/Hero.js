import React from 'react';
import { Link } from 'react-router-dom';
import Electronics from '../../assets/images/Electronic.jpg'

const Hero = () => {
    return (
        <div>
            <div class="container col-xxl-8 px-4 py-5">
                <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div class="col-10 col-sm-8 col-lg-6">
                        <img src={Electronics} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                    </div>
                    <div class="col-lg-6">
                        <h1 class="display-5 fw-bold lh-1 mb-3">Electronics Doctor Provide Service 24/7 </h1>
                        <p class="lead">I provide my service every day 24/7. My people will will response your contact any time with cordially. The will get you better suggestion for the solution.</p>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                            <Link to="/services"> <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Services</button></Link>
                            <Link to="/login"> <button type="button" class="btn btn-outline-secondary btn-lg px-4">Login</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;