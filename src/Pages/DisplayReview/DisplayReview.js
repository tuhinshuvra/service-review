import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllReview from './AllReview';
import './DisplayReview.css';

const DisplayReview = () => {
    // const reviews = useLoaderData();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(response => response.json())
            .then(data => setReviews(data))
    }, [])



    return (
        <div className=' container'>
            <h2 className=' text-center fw-bold mt-2 mb-1'> All Review Display</h2>
            <table class="table table-striped">
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
                            <AllReview
                                key={review._id}
                                review={review}
                            ></AllReview>
                        )
                    }

                </tbody>
            </table>
        </div>
    );
};

export default DisplayReview;