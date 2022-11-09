import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { Navigate, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Authentication/AuthProvider';

const Review = ({ _id, name, price, img, rating, details }) => {
    const service = useLoaderData();
    const { user } = useContext(AuthContext);
    // const { _id, title, price, img, service_id, description, facility } = service;

    const handleSetReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const customer = `${form.firstName.value} ${form.lastName.value}`
        const email = user?.email || 'Unregistered';
        const phone = form.phone.value;
        const message = form.message.value;
        const reviewPostDate = new Date();

        const review = {
            service: _id,
            serviceName: name,
            price,
            customer: customer,
            email,
            phone,
            message,
            reviewPostDate
        }
        // fetch('https://eclectronics-doctor-review.vercel.app/reviews', {
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                // authorization: `Bearer ${localStorage.getItem('geniusToken')}`
            },
            body: JSON.stringify(review)
        })
            .then(response => response.json())
            .then(data => {
                console.log("review-data", data);
                if (data.acknowledged) {
                    // alert('Review places successfully.')
                    toast('Review places successfully.')
                    form.reset();
                }

            })
            .catch(error => console.log(error))

        // if (phone.length < 11) {
        //     toast.message('Phone number should be more 11 character')
        // }
    }


    return (
        <div className=' container'>
            <form onSubmit={handleSetReview} className="form-floating">
                <h2 className=' text-3xl text-center font-bold mb-4 mt-4'>Here you can add your review on {name} </h2>
                <h4 className=' text-3xl text-center font-bold mb-4'>Service Price : ${price} </h4>
                <div className=' d-flex flex-column'>

                    <input name="firstName" type="text" placeholder="First Name" className=" form-control mb-2 " />
                    <input name="lastName" type="text" placeholder="Last Name" className="form-control mb-2" />
                    <input name="phone" type="text" placeholder="Your Phone" defaultValue={user?.phone} className="form-control mb-2" required />
                    <div>
                        {/* <Image className=' mb-2' roundedCircle style={{ width: '30px' }} src={user?.photoURL} /> */}
                        <input name="email" type="text" placeholder="Your Email" defaultValue={user?.email} className="form-control mb-2" readOnly />
                    </div>
                </div>
                <div className="form-floating mt-2">
                    <textarea name='message' className="form-control" placeholder="Leave a comment here" id="floatingTextarea" required />
                    <label htmlFor="floatingTextarea">Review Message</label>
                </div>

                <div className=' mx-auto'>
                    <input className='btn btn-primary btn-sm mt-2 mb-3 ' type="submit" value="Submit Your Review" />
                </div>
            </form>
        </div>
    );
};

export default Review;