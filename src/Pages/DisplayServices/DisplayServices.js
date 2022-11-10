import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import useTitle from '../Hooks/useTitle';
import './DisplayServices.css';

const DisplayServices = ({ service }) => {
    const { _id, name, price, img, rating, details } = service;
    useTitle('All Service');
    return (
        <div>
            <Container>
                <Card style={{ height: '510px' }}>
                    <PhotoView src={img} style={{ height: '300px' }}>
                        <Card.Img className='' variant="top" src={img} />
                    </PhotoView>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {details.slice(0, 90)}
                        </Card.Text>
                        <Link className=' text-decoration-none fw-bolder' to={`/services/${service._id}`}>Show Details</Link>
                        <div className=' d-flex justify-content-between'>
                            <Card.Text> <b> Price : </b>${service.price}</Card.Text>
                            <Card.Text> <b> Rating : </b>{service.rating}</Card.Text>
                        </div>
                    </Card.Body>

                </Card>
            </Container>
        </div >
    );
};

export default DisplayServices;