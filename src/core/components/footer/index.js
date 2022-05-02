import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import React from 'react'

import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-container'>
            <span>
                Made with ❤️ by Nicolas Conte
                <a className='text-black' target="_blank" href="https://github.com/Nicoconte/"><FontAwesomeIcon icon={faGithub} /></a>
            </span>
        </div>
    );
}

export default Footer;