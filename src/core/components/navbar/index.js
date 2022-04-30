import React from 'react';

import './Navbar.css'

import EndSessionButton from '../../../sessions/components/end-session-button'

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <EndSessionButton />
        </div>
    );
}

export default Navbar;