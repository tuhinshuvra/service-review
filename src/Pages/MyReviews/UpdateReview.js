import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const UpdateReview = () => {
    const preReview = useLoaderData();
    const [review, setReview] = useState(preReview);
    const { _id, serviceName, price, customer, email, phone, message } = preReview;

    const handleUpdateReview = (event) => {
        event.preventDefault();
        fetch(`https://eclectronics-doctor-review.vercel.app/reviews/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('reviewToken')}`,
            },
            body: JSON.stringify(review)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast('Review Updated Successfully')
                    // const remaining = review.filter(rev => rev._id !== id);
                    const newReviews = [...review];
                    setReview(newReviews);
                }
            })
    }

    const handleInputUpdate = (event) => {
        const field = event.target.name;
        const value = event.target.value;

        const newReview = { ...review }
        newReview[field] = value;
        // newUser[field] = value;
        // console.log(newUser);
        setReview(newReview);
    }
    return (
        <div className='container p-5'>
            <h2 className=' text-center fw-bold mb-3'>Update Review {serviceName} </h2>
            <form onSubmit={handleUpdateReview} className="form-control">
                {/* <label htmlFor="name">Full Name</label> */}
                <input className="form-control" onChange={handleInputUpdate} type="text" name='serviceName' defaultValue={serviceName} placeholder='Service Name' readOnly /><br />

                <div class="form-floating mb-2">
                    <textarea class="form-control" name='message' onChange={handleInputUpdate} placeholder="Leave a comment here" defaultValue={message} id="floatingTextarea"></textarea>
                    <label for="floatingTextarea">Review</label>
                </div>
                <button className="btn btn-primary btn-sm" type='submit'>Update Review</button>
            </form>
        </div>
    );
};

export default UpdateReview;