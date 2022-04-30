import React from 'react';

import './Navbar.css'

import EndSessionButton from '../../../sessions/end-session-button/index'

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <EndSessionButton />
        </div>
    );
}

export default Navbar;