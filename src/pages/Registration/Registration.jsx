import React from 'react';
import { Outlet, Link } from "react-router-dom";

import Button from '../../components/Button/Button';
import './Registration.css';    


const Registration = () => {

    return (
        <>
            <section className='registration flex'>
                <div className="top">
                    <div className="lang flex">
                        <p>Eng</p>
                        <span className="dropdown"></span>
                    </div>
                </div>
                <div className="bottom flex">
                    <div className="bottom-text flex">
                        <h3>La Chateau !</h3>
                        <p>Get a million beautiful and delicious recipes around the world</p>
                    </div>
                    <Link to="/home" className='button primary login'>Log In</Link>
                    {/* <Button
                        className="primary"
                        buttonType="button"
                        buttonName='Log In'>
                    </Button> */}
                    <Button
                        className="base button"
                        buttonType="button"
                        buttonName='Register' />
                </div>
            </section>
            <Outlet />
        </>
    );
}

export default Registration;