import React from 'react';

import './Main.css';

import PDFContainer from '../../../pdf/components/pdf-container/index'
import ImagesContainer from '../../../images/components/images-container/index'

const Main = () => {

    return (
        <div className='main-container'>
            <PDFContainer />
            <ImagesContainer />
        </div>
    );
}

export default Main;