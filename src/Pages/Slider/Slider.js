import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Img1 from '../../assets/images/laptop.jpg';
import Img2 from '../../assets/images/washing-machine.jpg';
import Img3 from '../../assets/images/smart-tv.png';
import Img4 from '../../assets/images/monitor.jpg';
import Img5 from '../../assets/images/refrigerator.jpg';
import './SliderItem.css';

function Slider() {
    return (
        <div className='container '>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100 bg-gradient"
                        src={Img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h2 className=' fw-bold'>I Provide Better Solution of Your Electronics as Soon as Possible</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Img2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h2 className=' fw-bold'>I Provide Better Solution of Your Electronics as Soon as Possible</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Img3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h2 className=' fw-bold'>I Provide Better Solution of Your Electronics as Soon as Possible</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Img4}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h2 className=' fw-bold'>I Provide Better Solution of Your Electronics as Soon as Possible</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Img5}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h2 className=' fw-bold'>I Provide Better Solution of Your Electronics as Soon as Possible</h2>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Slider;