import React, { useContext } from 'react';
import { AuthContext } from '../Authentication/AuthProvider';
import useTitle from '../Hooks/useTitle';
import './MyReviewDisplay.css';

const MyReviewDisplay = ({ review }) => {
    const { user } = useContext(AuthContext);
    useTitle('My Review');
    const { serviceName, price, customer, email, phone, message } = review;
    return (
        <tr>
            <td>#</td>
            <td>{serviceName}</td>
            <td>{customer}</td>
            <td>{email}</td>
            <td>{message}</td>
            <td> <span className=' fw-bold'> X </span> <span className=' ms-2 fw-bold'> Update </span> </td>
        </tr>
    );
};

export default MyReviewDisplay;