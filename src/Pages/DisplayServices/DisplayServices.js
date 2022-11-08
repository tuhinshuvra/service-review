import React from 'react';
import { Card, Container } from 'react-bootstrap';
import './DisplayServices.css';

const DisplayServices = ({ service }) => {
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
                    </Card.Body>

                </Card>
            </Container>
        </div>
    );
};

export default DisplayServices;