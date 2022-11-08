import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Service from '../Service/Service';
import './Home.css';

const Home = () => {
    const services = useLoaderData();
    return (
        <div>
            <h2>This is home Page {services.length} </h2>
            <div className=' services'>
                {
                    services.map(service =>
                        <Service
                            key={service._id}
                            service={service}
                        ></Service>

                    )
                }
            </div>
        </div>
    );
};

export default Home;