import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Authentication/AuthProvider';
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
        <div>
            <h2>My Reviews {reviews.length}</h2>
        </div>
    );
};

export default MyReviews;