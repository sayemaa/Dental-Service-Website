import React from 'react';
import './Checkout.css';

const Checkout = () => {
    return (
        <div>
            <h2 className='checkout my-5'>Billing Address</h2>
            <form className='d-grid justify-items-center w-25 mx-auto billing-form'>
                <input type="text" class="form-control" name="" placeholder='Full Name' required />
                <input type="number" class="form-control" name="phone" placeholder='Phone no' required />
                <input type="number" class="form-control" name="address" placeholder='Address' required />
                <input className='submit-btn border-0 mx-auto' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Checkout;