import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='container my-5'>
            <h2 style={{ color: "#27abba" }} className='text-center mb-4'>Blogs</h2>
            <Accordion className='mb-5' defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h6>Differences between Authorization and Authentication.</h6></Accordion.Header>
                    <Accordion.Body>
                        Authorization is the process of confirming a user's access rights, whereas authentication is the process of confirming the user's identity.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h6>Why are you using firebase? What other options do you have to implement authentication?</h6></Accordion.Header>
                    <Accordion.Body>
                        Without having to comprehend the complexities of developing our own authentication system, Firebase simplifies authentication by allowing users to authenticate not only via email/password, but also via Google, Facebook, Github, and other providers.
                        Some other options to implement authentication are:
                        <li>Back4App</li>
                        <li>Parse</li>
                        <li>MongoDB</li>
                        <li>AWS Amplify</li>
                        <li>Kuzzle</li>
                        <li>Couchbase</li>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header><h6>What other services does firebase provide other than authentication?</h6></Accordion.Header>
                    <Accordion.Body>
                        Other than authentication, firebase provides the following services:
                        <li>Google Analytics</li>
                        <li>Hosting</li>
                        <li>Cloud Storage</li>
                        <li>Cloud Functions</li>
                        <li>Cloud Firestore</li>
                        <li>Dynamic Links</li>
                        <li>Remote Config</li>
                        <li>Predictions</li>
                        <li>Cloud Messaging</li>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blogs;