import React, { useContext, useEffect, useState } from 'react';
import DisplayServices from '../DisplayServices/DisplayServices';
import useTitle from '../Hooks/useTitle';
import { AuthContext } from '../Authentication/AuthProvider';
import { Spinner } from 'react-bootstrap';
import './Service.css';

const Service = () => {
    const { setLoading, loading } = useContext(AuthContext);
    const [services, setServices] = useState([])
    useTitle('Service');

    useEffect(() => {
        fetch('https://eclectronics-doctor-review.vercel.app/services')
            .then(setLoading(true))
            .then(response => response.json())
            .then(data => {
                setServices(data)
            })
            .catch(error => {
                console.log(error);
            })
            .finally(setLoading(false))
    }, [])

    if (loading) {
        return <div className='text-info mt-5 fw-bold text-center'><Spinner animation="grow" />Loading....</div>
    }

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