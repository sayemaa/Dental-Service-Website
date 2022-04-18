import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { name, img, price, description } = service;

    return (
        <div className='service pb-4'>
            <img src={img} className='mx-auto' alt="" />
            <div className='service-details mx-auto'>
                <h2 className='service-name'>{name}</h2>
                <p className='fs-5 mb-2 mt-2'>Price: ${price}</p>
                <p><small>{description}</small></p>
                <Link to="/checkout">
                    <button className='booking-button'>Book an Appointment</button>
                </Link>
            </div>
        </div>
    );
};

export default Service;