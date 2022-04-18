import { Carousel } from 'react-bootstrap';
import React from 'react';
import './Office.css'
import office1 from '../../../images/office/office-1.jpg';
import office2 from '../../../images/office/office-2.jpg';


const Office = () => {
    return (
        <div className='office-container container'>
            <h1 className='office-heading'>Welcome to <span className='my-office'>My Office</span></h1>
            <div className='d-flex align-items-center'>
                <div className='w-50'>

                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint facilis tempora dicta mollitia error soluta consequuntur, quasi quisquam amet voluptatibus, animi explicabo voluptas expedita deserunt delectus! Ipsum obcaecati omnis fugit?</p>
                </div>
                <Carousel fade className='container w-50'>
                    <Carousel.Item>
                        <img
                            className="office-img d-block w-100"
                            src={office1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="office-img d-block w-100"
                            src={office2}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                </Carousel >
            </div>

        </div>
    );
};

export default Office;