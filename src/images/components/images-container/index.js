import React from "react";

import './ImagesContainer.css';

import ImagesPreview from "../images-preview";

const ImagesContainer = () => {
    return (
        <div className="images-container">
            <ImagesPreview />
        </div>
    );
}

export default ImagesContainer;