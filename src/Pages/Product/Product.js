import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = () => {
    return (
        <div>
            <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                <div class="col-md-5 p-lg-5 mx-auto my-5">
                    <h1 class="display-4 fw-normal">Announcement</h1>
                    <p class="lead fw-normal">I am going to start free home delivery service in Dhaka city. Here I will provide as the same service at same price and same time as before. So call me for solution of your electronics problem. </p>
                    <Link class="btn btn-outline-secondary" to="/">Coming soon</Link>
                </div>
                <div class="product-device shadow-sm d-none d-md-block"></div>
                <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
            </div>
        </div>
    );
};

export default Product;