import React, { useEffect, useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Hero from '../Hero/Hero';
import Slider from '../Slider/Slider';
import './Home.css';

const Home = () => {
    let services = useLoaderData()
    services = services.slice(0, 3)
    return (
        <div>
            <h2>This is home Page {services.length} </h2>
            <div className='d-flex container'>
                {
                    services.map(service =>
                        <div className=''>
                            <Container>
                                <Card style={{}}>
                                    <Card.Img style={{ height: '350px' }} className='' variant="top" src={service.img} />
                                    <Card.Body>
                                        <Card.Title>{service.name}</Card.Title>
                                        <Card.Text>
                                            {service.details.slice(0, 100)}
                                        </Card.Text>
                                        <Link className=' text-decoration-none fw-bolder' to={`/services/${service._id}`}>Show Details</Link>
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
                <Link to="/services"> <button className=' btn btn-secondary'>Show All</button></Link>
            </div>
            <Hero></Hero>
            <Slider></Slider>
        </div>
    );
};

export default Home;