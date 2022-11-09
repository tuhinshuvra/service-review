import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Authentication/AuthProvider';
import MyReviewDisplay from './MyReviewDisplay';
import './MyReviews.css';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/reviewonmail?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className=' container'>
            <h2 className=' text-center fw-bold mt-2 mb-1'> My all Review Display</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">SL</th>
                        <th scope="col">Service Name</th>
                        <th scope="col">Customer</th>
                        <th scope="col">Email</th>
                        <th scope="col">Message</th>
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