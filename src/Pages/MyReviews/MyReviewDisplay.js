import React, { useContext } from 'react';
import { AuthContext } from '../Authentication/AuthProvider';
import './MyReviewDisplay.css';

const MyReviewDisplay = ({ review }) => {
    const { user } = useContext(AuthContext);
    const { serviceName, price, customer, email, phone, message } = review;
    return (
        <tr>
            <td>#</td>
            <td>{serviceName}</td>
            <td>{customer}</td>
            <td>{email}</td>
            <td>{message}</td>
        </tr>
    );
};

export default MyReviewDisplay;