import React from 'react';

import './Navbar.css'

import SessionStatus from '../../../sessions/components/session-status';
import GuideTour from '../guide-tour';

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <div className='navbar-logo'>
                <h3>ImageToPDF.IO 📁</h3>
                <GuideTour />
            </div>
            <div className='navbar-status'>
                <SessionStatus />
            </div>
        </div>
    );
}

export default Navbar;