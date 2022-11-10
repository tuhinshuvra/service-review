import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../Authentication/AuthProvider';
import useTitle from '../Hooks/useTitle';
import MyReviewDisplay from './MyReviewDisplay';
import './MyReviews.css';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])
    useTitle('My Reviews');

    useEffect(() => {
        fetch(`https://eclectronics-doctor-review.vercel.app/reviewmail?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])

    const handleDeleteReview = (id) => {
        const proceed = window.confirm('Are you sure to delete the review ?')
        if (proceed) {
            fetch(`https://eclectronics-doctor-review.vercel.app/reviews/${id}`, {
                method: 'DELETE',
                headers: {}
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast('Review Deleted Successfully.')
                        const remaining = reviews.filter(rev => rev._id !== id)
                        setReviews(remaining);
                    }
                })
        }
    }

    const handleUpdateReview = (id) => {
        fetch(`https://eclectronics-doctor-review.vercel.app/reviews/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({})

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // if (data.modifiedCount > 0) {
                // const remaining = reviews.filter(rev => rev._id !== id);
                // const newReviews = [...remaining];
                // setReviews(newReviews);
                // }
            })

    }

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
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        reviews.map(review =>
                            <MyReviewDisplay
                                key={review._id}
                                review={review}
                                handleDeleteReview={handleDeleteReview}
                                handleUpdateReview={handleUpdateReview}
                            ></MyReviewDisplay>

                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyReviews;