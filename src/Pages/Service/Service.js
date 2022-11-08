import { Container, Button, Card } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { _id, name, price, img, rating, details } = service;
    return (
        <div>
            <Container>
                <Card style={{}}>
                    <Card.Img style={{ height: '350px' }} className='' variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {details.slice(0, 80)}
                        </Card.Text>
                        <Link className=' text-decoration-none fw-bolder' to={`/services/${_id}`}>Show Details</Link>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
}



export default Service;