import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import DisplayReview from '../DisplayReview/DisplayReview';
import Review from '../Review/Review';
import './ServiceDetails.css';

const ServiceDetails = () => {
    const service = useLoaderData()
    const { _id, name, price, img, rating, details } = service;
    return (
        <div>
            <h2>This is Service Details Page</h2>
            <Container>
                <Card style={{}}>
                    <Card.Img className=' img-fluid' variant="top" src={img} />
                    <Card.Title> <h2> Details of {name} </h2></Card.Title>
                    <Card.Body>
                        <Card.Text>
                            {details}
                        </Card.Text>
                        {/* <Link className=' text-decoration-none fw-bolder' to={`/services/${_id}`}>Show Details</Link> */}
                    </Card.Body>
                </Card>
            </Container>
            <Review
                key={_id}
                service_id={_id}
                name={name}
                img={img}
                price={price}
                rating={rating}
                details={details}
            ></Review>
            <DisplayReview
                service_id={_id}
            ></DisplayReview>
        </div>
    );
};

export default ServiceDetails;