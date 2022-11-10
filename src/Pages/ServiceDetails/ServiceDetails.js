import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import DisplayReview from '../DisplayReview/DisplayReview';
import useTitle from '../Hooks/useTitle';
import './ServiceDetails.css';

const ServiceDetails = () => {
    const service = useLoaderData()
    useTitle('Service Details');
    const { _id, name, price, img, rating, details } = service;

    return (
        <div>
            <h2 className='fw-bold text-center mt-3 mb-3'> {name} Details</h2>
            <Container>
                <Card style={{}} className=" p-2">
                    <Card.Img className=' img-fluid' variant="top" src={img} />
                    <Card.Title> <h2> Details of {name} </h2></Card.Title>
                    <Card.Body>
                        <Card.Text>
                            {details}
                        </Card.Text>
                        {/* <Link className=' text-decoration-none fw-bolder' to={`/services/${_id}`}>Show Details</Link> */}
                    </Card.Body>
                    <div className=' d-flex justify-content-between '>

                        <Card.Text> <b> Price:</b> {price}</Card.Text>
                        <Card.Text> <b> Rating:</b> {rating}</Card.Text>
                        <Link to={`/reviews/${_id}`} className="text-center"> <Button>Set Review</Button> </Link>
                    </div>
                </Card>
            </Container>
            <DisplayReview
                service_id={_id}
            ></DisplayReview>
        </div>
    );
};

export default ServiceDetails;