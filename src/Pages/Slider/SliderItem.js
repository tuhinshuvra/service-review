import React from 'react';
import './SliderItem.css'

const SliderItem = ({ slide }) => {

    const { id, image, prev, next } = slide;

    return (
        <div>
            <h2>Test Data</h2>

            <div id={`slide${id}`} className="carousel-item active relative w-100">
                <div className='carousel-img'>
                    <img src={image} className="w-100 rounded-xl" />
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/3">
                    <h1 className=' text-6xl  font-bold text-white'>
                        Affordable <br /> Price For Car <br /> Servicing
                    </h1>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-24 w-2/5 top-1/2">
                    <p className=' text-lg font-normal text-white'>
                        There are many variations of passages of  available, but
                        the majority have suffered alteration in some form
                    </p>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-24 w-2/7 top-3/4">
                    <button className="btn btn-active btn-secondary w-44 h-14">Discover More</button>
                    <button className="btn btn-outline btn-secondary ml-5  w-44 h-14">Latest Project</button>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href={`#slide${prev}`} className="btn btn-circle to-transparent border-none">❮</a>
                    <a href={`#slide${next}`} className="btn btn-circle ml-5 bg-orange-700 border-none">❯</a>
                </div>
            </div>
        </div>
    );
};

export default SliderItem;