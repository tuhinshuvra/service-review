import { Container, Button, Card } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './Service.css';
import DisplayServices from '../DisplayServices/DisplayServices';

const Service = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(response => response.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            {
                services.map(service =>
                    <DisplayServices
                        key={service._id}
                        service={service}
                    ></DisplayServices>

                )
            }
        </div>
    );
}



export default Service;