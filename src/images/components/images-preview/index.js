import React, { useContext, useEffect, useState } from "react";
import { SessionContext } from "../../../core/context";
import ImagePreviewItem from "../image-preview-item";

import './ImagesPreview.css';


import DeleteAllImageButton from '../delete-all-image-button/'
import ImagesCount from "../images-count";

const ImagesPreview = () => {
    const {
        sessionImages: images
    } = useContext(SessionContext);

    return (
        <div className="images-preview-container">
            {!images.length && <h1>No files :C {images.length}</h1>}
            {images.length && <DeleteAllImageButton />}
            {images.length && <ImagesCount />}
            {images.map(img => (
                <ImagePreviewItem
                    key={img.name}
                    imageName={img.name}
                    imagePath={img.path}
                />
            ))}
        </div>
    );
}

export default ImagesPreview