import React from 'react';

import './Navbar.css'

import SessionStatus from '../../../sessions/components/session-status';

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <div className='navbar-logo'>
                <h3>ImageToPDF 📁</h3>
            </div>
            <div className='navbar-status'>
                <SessionStatus />
            </div>
        </div>
    );
}

export default Navbar;