import React, { useEffect, useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Hero from '../Hero/Hero';
import Product from '../Product/Product';
import Slider from '../Slider/Slider';
import './Home.css';

const Home = () => {
    let services = useLoaderData()
    services = services.slice(0, 3)
    return (
        <div>
            <h1 className=' fw-bolder  text-center text-primary mt-3 mb-2'>Welcome to Electronics Doctor Services</h1>
            <div className='d-flex container mt-5'>
                {
                    services.map(service =>
                        <div key={service._id}>
                            <Container>
                                <Card style={{}}>
                                    <Card.Img style={{ height: '350px' }} className='' variant="top" src={service.img} />
                                    <Card.Body>
                                        <Card.Title>{service.name}</Card.Title>
                                        <Card.Text>
                                            {service.details.slice(0, 95)}
                                        </Card.Text>
                                        <Link className='text-decoration-none fw-bolder' to={`/services/${service._id}`}>Show Details</Link>
                                        <div className=' d-flex justify-content-between'>
                                            <Card.Text> <b> Price : </b>${service.price}</Card.Text>
                                            <Card.Text> <b> Rating : </b>{service.rating}</Card.Text>
                                        </div>
                                    </Card.Body>

                                </Card>
                            </Container>
                        </div>
                    )
                }
            </div>

            <div id='show-all' className=' text-center'>
                <Link to="/services"> <button className=' btn btn-secondary mt-3 mb-3'>Show All</button></Link>
            </div>
            <div>
                <Slider></Slider>
                <Hero></Hero>
                <Product></Product>
            </div>
        </div>
    );
};

export default Home;