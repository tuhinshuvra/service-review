import React, { useContext } from 'react';
import { AuthContext } from '../Authentication/AuthProvider';
import './AllReview.css';

const AllReview = ({ review }) => {
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

export default AllReview;