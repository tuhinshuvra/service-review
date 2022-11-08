import React from 'react';
import { Button } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Service from '../Service/Service';
import './Home.css';

const Home = () => {
    let services = useLoaderData();
    // services = services.slice(0, 3);
    return (
        <div>
            <h2>This is home Page {services.length} </h2>
            <div className=' services container'>
                {
                    services.map(service =>
                        <Service
                            key={service._id}
                            service={service}
                        ></Service>
                    )
                }
            </div>
            <Button>Load More</Button>
        </div>
    );
};

export default Home;