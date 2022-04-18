import { Carousel } from 'react-bootstrap';
import React from 'react';
import './Office.css'
import office1 from '../../../images/office/office-1.jpg';
import office2 from '../../../images/office/office-2.jpg';


const Office = () => {
    return (
        <div id='office' className='office-container container'>
            <h1 className='office-heading'>Welcome to <span className='my-office'>My Office</span></h1>
            <div className='office d-flex d-block align-items-center'>
                <div className='w-50 me-5'>
                    <h3 className='mb-3'>Office and Environment</h3>
                    <p>Each of our patients is entitled to excellent oral health in a relaxing and pleasant setting and environment. A wide range of dental equipment is available as well as the ideal setting for you to feel at ease and stress-free. Any dental operation will be performed with care and courtesy, since your comfort is my top priority. My goal is for you to enjoy visiting to the dentist, so I will use the most up-to-date dental technologies to help you feel at ease and peaceful.</p>
                    <button className='visit-btn'>Visit Us</button>
                </div>
                <Carousel fade className='carousel container w-50'>
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