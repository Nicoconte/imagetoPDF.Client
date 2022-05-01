import React from "react";

import DeleteImageButton from '../delete-image-button'

import './ImagePreviewItem.css';

const ImagePreviewItem = ({
    imageName,
    imagePath
}) => {
    return (
        <div className="image-preview-item-container">
            <div className="image-preview-item-btn">
                <DeleteImageButton />
            </div>
            <div className="image-preview-item-img-container">
                <img src={imagePath} alt={imageName} />
            </div>
        </div>
    );
}

export default ImagePreviewItem;