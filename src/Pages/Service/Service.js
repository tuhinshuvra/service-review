import { Container, Button, Card } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './Service.css';
import DisplayServices from '../DisplayServices/DisplayServices';
import useTitle from '../Hooks/useTitle';

const Service = () => {
    const [services, setServices] = useState([])
    useTitle('Service');

    useEffect(() => {
        fetch('https://eclectronics-doctor-review.vercel.app/services')
            .then(response => response.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='services container mt-5'>

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