import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Authentication/AuthProvider';
import useTitle from '../Hooks/useTitle';
import MyReviewDisplay from './MyReviewDisplay';
import './MyReviews.css';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])
    useTitle('My Reviews');

    useEffect(() => {
        fetch(`http://localhost:5000/reviewmail?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])
    return (
        <div className=' container'>
            <h2 className=' text-center fw-bold mt-2 mb-1'> Review Display</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">SL</th>
                        <th scope="col">Service Name</th>
                        <th scope="col">Customer</th>
                        <th scope="col">Email</th>
                        <th scope="col">Message</th>
                        <th scope="col">Perform</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        reviews.map(review =>
                            <MyReviewDisplay
                                key={review._id}
                                review={review}
                            ></MyReviewDisplay>

                        )
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyReviews;