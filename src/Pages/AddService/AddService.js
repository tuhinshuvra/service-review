import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { Navigate, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Authentication/AuthProvider';
import useTitle from '../Hooks/useTitle';

const AddService = () => {
    const { user } = useContext(AuthContext);
    useTitle('Add Service');
    // const { _id, title, price, img, service_id, description, facility } = service;

    const handleSetReview = (event) => {
        event.preventDefault();
        const form = event.target;
        // const customer = `${form.firstName.value} ${form.lastName.value}`
        const serviceName = form.serviceName.value;
        const price = form.price.value;
        const rating = form.rating.value;
        // const image = form.image.value;
        const details = form.details.value;
        const servicePostDate = new Date();

        const service = {
            name: serviceName,
            price: price,
            // img: image,
            rating: rating,
            details: details,
            servicePostDate,
        }
        fetch('https://eclectronics-doctor-review.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                // authorization: `Bearer ${localStorage.getItem('reviewToken')}`
            },
            body: JSON.stringify(service)
        })
            .then(response => response.json())
            .then(data => {
                console.log("review-data", data);
                if (data.acknowledged) {
                    toast('Service submitted successfully.')
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
                <h2 className=' text-3xl text-center font-bold mb-4 mt-4'>Add New Service</h2>
                <div className=' d-flex flex-column'>

                    <input name="serviceName" type="text" placeholder="Service Name" className=" form-control mb-2 " />
                    <input name="price" type="text" placeholder="Price" className="form-control mb-2" />
                    <input name="rating" type="text" placeholder="Rating" className="form-control mb-2" />
                    {/* <div>
                        <Image name="image" className=' mb-2' roundedCircle style={{ width: '30px' }} src='' alt='' />
                    </div> */}
                    <input type="image" placeholder='input image' src="submit.gif" alt="Input Image" style={{ float: "right" }} width="100" height="100" />
                </div>
                <div className="form-floating mt-2">
                    <textarea name='details' className="form-control" placeholder="Service Details" id="floatingTextarea" required />
                    <label htmlFor="floatingTextarea">Service Details</label>
                </div>

                <div className=' mx-auto'>
                    <input className='btn btn-primary btn-sm mt-2 mb-3 ' type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
};

export default AddService;