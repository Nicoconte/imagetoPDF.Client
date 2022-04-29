import React from 'react';

import './Main.css';

import PDF from '../../../pdf/index'
import Images from '../../../images/index'

const Main = () => {
    return (
        <div className='main-container'>
            <PDF />
            <Images />
        </div>
    );
}

export default Main;