import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Authentication/AuthProvider';
import useTitle from '../Hooks/useTitle';
import './MyReviewDisplay.css';

const MyReviewDisplay = ({ review, handleDeleteReview }) => {
    const { user } = useContext(AuthContext);
    useTitle('My Review');
    const { _id, serviceName, price, customer, email, phone, message } = review;
    return (
        <tr>
            <td>#</td>
            <td>{serviceName}</td>
            <td>{customer}</td>
            <td>{email}</td>
            <td>{message}</td>
            <td>
                <button className="btn btn-danger fw-bold btn-sm" onClick={() => handleDeleteReview(_id)}> X </button>
                <Link to={`/updatereview/${_id}`}>
                    {/* <button className="btn btn-primary ms-2 fw-bold btn-sm" onClick={() => handleUpdateReview(_id)}> Update </button> */}
                    <button className="btn btn-primary ms-2 fw-bold btn-sm"> Update </button>
                </Link>
            </td>
        </tr>
    );
};

export default MyReviewDisplay;