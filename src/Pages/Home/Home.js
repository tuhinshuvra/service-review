import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Service from '../Service/Service';
import './Home.css';

const Home = () => {
    let services = useLoaderData()
    services = services.slice(0, 3)
    return (
        <div className=''>
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
                                            {service.details.slice(0, 80)}
                                        </Card.Text>
                                        <Link className=' text-decoration-none fw-bolder' to={`/services/${service._id}`}>Show Details</Link>
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

        </div>
    );
};

export default Home;