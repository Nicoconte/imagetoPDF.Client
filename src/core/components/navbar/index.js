import React from 'react';

import './Navbar.css'

import SessionStatus from '../../../sessions/components/session-status';

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <SessionStatus />
        </div>
    );
}

export default Navbar;