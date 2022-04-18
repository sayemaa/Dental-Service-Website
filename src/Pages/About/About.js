import React from 'react';
import person from '../../images/person.png'

const About = () => {
    return (
        <div className='d-flex container align-items-center mt-5 justify-content-around'>
            <div>
                <h1>Sayema Akhtar</h1>
                <p className='w-75'>My ideal job would be to work as a web developer. To learn about web programming, I first enrolled in an online web development course. After completing the program, I plan to work as a professional web developer and continue my web development career.</p>
            </div>
            <div>
                <img width="350px" src={person} alt="" />
            </div>
        </div>
    );
};

export default About;