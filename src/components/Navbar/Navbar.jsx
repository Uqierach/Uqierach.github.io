import React from 'react'
import './Navbar.css';

import iconLeft from '../../assets/icons/icon-left.svg';
import iconRight from '../../assets/icons/dots-right.svg';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <section className="left">
                <img src={iconLeft} alt="nav icon" />
            </section>
            <section className="right">
                <img src={iconRight} alt="nav icon" />
            </section>
        </nav>
    );
}


export default Navbar;